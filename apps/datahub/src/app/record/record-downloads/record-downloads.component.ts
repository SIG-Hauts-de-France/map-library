import { ChangeDetectionStrategy, Component } from '@angular/core'
import { DataService } from '@geonetwork-ui/feature/dataviz'
import { getFileFormat, getLinkPriority } from '@geonetwork-ui/util/shared'
import { combineLatest, of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import {
  DatasetDistribution,
  DatasetServiceDistribution,
} from '@geonetwork-ui/common/domain/model/record'
import { MdViewFacade } from '@geonetwork-ui/feature/record'

@Component({
  selector: 'datahub-record-downloads',
  templateUrl: './record-downloads.component.html',
  styleUrls: ['./record-downloads.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordDownloadsComponent {
  constructor(public facade: MdViewFacade, private dataService: DataService) {}

  error: string = null

  links$ = this.facade.downloadLinks$.pipe(
    switchMap((links) => {
      const wfsLinks = links.filter(
        (link) =>
          link.type === 'service' && link.accessServiceProtocol === 'wfs'
      )
      const esriRestLinks = links
        .filter(
          (link) =>
            link.type === 'service' && link.accessServiceProtocol === 'esriRest'
        )
        .flatMap((link) =>
          this.dataService.getDownloadLinksFromEsriRest(
            link as DatasetServiceDistribution
          )
        )
      const ogcLinks = links.filter(
        (link) =>
          link.type === 'service' &&
          link.accessServiceProtocol === 'ogcFeatures'
      )

      const otherLinks = links.filter(
        (link) =>
          link.type !== 'service' ||
          (link.type === 'service' &&
            link.accessServiceProtocol !== 'esriRest' &&
            link.accessServiceProtocol !== 'wfs' &&
            link.accessServiceProtocol !== 'ogcFeatures')
      )

      this.error = null

      return combineLatest([
        ...(wfsLinks.length > 0
          ? wfsLinks.map((link) =>
              this.dataService.getDownloadLinksFromWfs(
                link as DatasetServiceDistribution
              )
            )
          : [of([] as DatasetDistribution[])]),
        ...(ogcLinks.length > 0
          ? ogcLinks.map((link) =>
              this.dataService.getDownloadLinksFromOgcApiFeatures(
                link as DatasetServiceDistribution
              )
            )
          : [of([] as DatasetDistribution[])]),
      ]).pipe(
        map(flattenArray),
        map(removeLinksWithUnknownFormat),
        map(removeDuplicateLinks),
        map((downloadLinks) => {
          return [...otherLinks, ...downloadLinks, ...esriRestLinks]
        }),
        catchError((e) => {
          this.error = e.message
          return of([...otherLinks, ...esriRestLinks])
        }),
        map(sortLinks)
      )
    })
  )
}

const flattenArray = (arrayOfArrays) =>
  arrayOfArrays.reduce((prev, curr) => [...prev, ...curr], [])

const removeLinksWithUnknownFormat = (downloadLinks) =>
  downloadLinks.filter((link) => !!getFileFormat(link))

const removeDuplicateLinks = (downloadLinks) =>
  downloadLinks.filter(
    (link, i, links) =>
      links.findIndex(
        (firstLink) =>
          getFileFormat(firstLink) === getFileFormat(link) &&
          firstLink.name === link.name &&
          firstLink.type === link.type
      ) === i
  )

const sortLinks = (allLinks) =>
  allLinks.sort((a: DatasetDistribution, b: DatasetDistribution): number => {
    return getLinkPriority(b) - getLinkPriority(a)
  })
