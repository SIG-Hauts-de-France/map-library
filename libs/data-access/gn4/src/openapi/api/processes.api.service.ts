/**
 * GeoNetwork 4.2.7 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.2.7
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
} from '@angular/common/http'
import { CustomHttpParameterCodec } from '../encoder'
import { Observable } from 'rxjs'

import { MetadataReplacementProcessingReportApiModel } from '../model/models'
import { ProcessingReportApiModel } from '../model/models'
import { XsltMetadataProcessingReportApiModel } from '../model/models'

import { BASE_PATH, COLLECTION_FORMATS } from '../variables'
import { Configuration } from '../configuration'

@Injectable({
  providedIn: 'root',
})
export class ProcessesApiService {
  protected basePath = 'https://demo.georchestra.org/geonetwork/srv/api'
  public defaultHeaders = new HttpHeaders()
  public configuration = new Configuration()
  public encoder: HttpParameterCodec

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath
      }
      this.configuration.basePath = basePath
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec()
  }

  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value)
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key)
    }
    return httpParams
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string
  ): HttpParams {
    if (value == null) {
      return httpParams
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        ;(value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
        )
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10)
          )
        } else {
          throw Error('key may not be null if value is Date')
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k
            ))
        )
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value)
    } else {
      throw Error('key may not be null if value is not object or array')
    }
    return httpParams
  }

  /**
   * Clear process reports list
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public _delete(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any>
  public _delete(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<any>>
  public _delete(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<any>>
  public _delete(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType_: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text'
    }

    return this.httpClient.delete<any>(
      `${this.configuration.basePath}/processes/reports`,
      {
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Get current process reports
   * When processing, the report is stored in memory and allows to retrieve progress repport during processing. Usually, process reports are returned by the synchronous processing operation.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProcessReport(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<Array<ProcessingReportApiModel>>
  public getProcessReport(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<Array<ProcessingReportApiModel>>>
  public getProcessReport(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<Array<ProcessingReportApiModel>>>
  public getProcessReport(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType_: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text'
    }

    return this.httpClient.get<Array<ProcessingReportApiModel>>(
      `${this.configuration.basePath}/processes/reports`,
      {
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Preview process result applied to one or more records
   * Preview result of a process applied to metadata records with an XSL transformation declared in the metadata schema (See the process folder). Parameters sent to the service are forwarded to XSL process. Append mode has 2 limitations. First, it only support a set of records in the same schema. Secondly, it does not propagate URL parameters. This mode is mainly used to create custom reports based on metadata records content.If process name ends with \&#39;.csv\&#39;, the XSL process output a text document which is returned. When errors occur during processing, the processing report is returned in JSON format.
   * @param process Process identifier
   * @param diffType Return differences with diff, diffhtml or patch
   * @param uuids Record UUIDs. If null current selection is used.
   * @param bucket Selection bucket name
   * @param appendFirst Append documents before processing
   * @param applyUpdateFixedInfo Apply update fixed info
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public previewProcessRecords(
    process: string,
    diffType?: 'patch' | 'diff' | 'diffhtml',
    uuids?: Array<string>,
    bucket?: string,
    appendFirst?: boolean,
    applyUpdateFixedInfo?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<object>
  public previewProcessRecords(
    process: string,
    diffType?: 'patch' | 'diff' | 'diffhtml',
    uuids?: Array<string>,
    bucket?: string,
    appendFirst?: boolean,
    applyUpdateFixedInfo?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<HttpResponse<object>>
  public previewProcessRecords(
    process: string,
    diffType?: 'patch' | 'diff' | 'diffhtml',
    uuids?: Array<string>,
    bucket?: string,
    appendFirst?: boolean,
    applyUpdateFixedInfo?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<HttpEvent<object>>
  public previewProcessRecords(
    process: string,
    diffType?: 'patch' | 'diff' | 'diffhtml',
    uuids?: Array<string>,
    bucket?: string,
    appendFirst?: boolean,
    applyUpdateFixedInfo?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<any> {
    if (process === null || process === undefined) {
      throw new Error(
        'Required parameter process was null or undefined when calling previewProcessRecords.'
      )
    }

    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (diffType !== undefined && diffType !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>diffType,
        'diffType'
      )
    }
    if (uuids) {
      uuids.forEach((element) => {
        queryParameters = this.addToHttpParams(
          queryParameters,
          <any>element,
          'uuids'
        )
      })
    }
    if (bucket !== undefined && bucket !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>bucket,
        'bucket'
      )
    }
    if (appendFirst !== undefined && appendFirst !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>appendFirst,
        'appendFirst'
      )
    }
    if (applyUpdateFixedInfo !== undefined && applyUpdateFixedInfo !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>applyUpdateFixedInfo,
        'applyUpdateFixedInfo'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json', '*/*']
      httpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType_: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text'
    }

    return this.httpClient.get<object>(
      `${this.configuration.basePath}/processes/${encodeURIComponent(
        String(process)
      )}`,
      {
        params: queryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Preview of search and replace text.
   *  When errors occur during processing, the processing report is returned in JSON format.
   * @param search Value to search for
   * @param useRegexp Use regular expression (may not be supported by all databases - tested with H2 and PostgreSQL)
   * @param replace Replacement
   * @param regexpFlags regexpFlags
   * @param diffType Return differences with diff, diffhtml or patch
   * @param uuids Record UUIDs. If null current selection is used.
   * @param bucket Selection bucket name
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public previewProcessSearchAndReplace(
    search: string,
    useRegexp?: boolean,
    replace?: string,
    regexpFlags?: string,
    diffType?: 'patch' | 'diff' | 'diffhtml',
    uuids?: Array<string>,
    bucket?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<object>
  public previewProcessSearchAndReplace(
    search: string,
    useRegexp?: boolean,
    replace?: string,
    regexpFlags?: string,
    diffType?: 'patch' | 'diff' | 'diffhtml',
    uuids?: Array<string>,
    bucket?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<HttpResponse<object>>
  public previewProcessSearchAndReplace(
    search: string,
    useRegexp?: boolean,
    replace?: string,
    regexpFlags?: string,
    diffType?: 'patch' | 'diff' | 'diffhtml',
    uuids?: Array<string>,
    bucket?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<HttpEvent<object>>
  public previewProcessSearchAndReplace(
    search: string,
    useRegexp?: boolean,
    replace?: string,
    regexpFlags?: string,
    diffType?: 'patch' | 'diff' | 'diffhtml',
    uuids?: Array<string>,
    bucket?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<any> {
    if (search === null || search === undefined) {
      throw new Error(
        'Required parameter search was null or undefined when calling previewProcessSearchAndReplace.'
      )
    }

    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (useRegexp !== undefined && useRegexp !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>useRegexp,
        'useRegexp'
      )
    }
    if (search !== undefined && search !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>search,
        'search'
      )
    }
    if (replace !== undefined && replace !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>replace,
        'replace'
      )
    }
    if (regexpFlags !== undefined && regexpFlags !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>regexpFlags,
        'regexpFlags'
      )
    }
    if (diffType !== undefined && diffType !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>diffType,
        'diffType'
      )
    }
    if (uuids) {
      uuids.forEach((element) => {
        queryParameters = this.addToHttpParams(
          queryParameters,
          <any>element,
          'uuids'
        )
      })
    }
    if (bucket !== undefined && bucket !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>bucket,
        'bucket'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json', '*/*']
      httpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType_: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text'
    }

    return this.httpClient.get<object>(
      `${this.configuration.basePath}/processes/db/search-and-replace`,
      {
        params: queryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Apply a process to one or more records
   * Process a metadata with an XSL transformation declared in the metadata schema (See the process folder). Parameters sent to the service are forwarded to XSL process.
   * @param process Process identifier
   * @param uuids Record UUIDs. If null current selection is used.
   * @param bucket Selection bucket name
   * @param updateDateStamp If true updates the DateStamp (or equivalent in standards different to ISO 19139) field in the metadata with the current timestamp
   * @param index Index after processing
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public processRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<XsltMetadataProcessingReportApiModel>
  public processRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<XsltMetadataProcessingReportApiModel>>
  public processRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<XsltMetadataProcessingReportApiModel>>
  public processRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (process === null || process === undefined) {
      throw new Error(
        'Required parameter process was null or undefined when calling processRecords.'
      )
    }

    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (uuids) {
      uuids.forEach((element) => {
        queryParameters = this.addToHttpParams(
          queryParameters,
          <any>element,
          'uuids'
        )
      })
    }
    if (bucket !== undefined && bucket !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>bucket,
        'bucket'
      )
    }
    if (updateDateStamp !== undefined && updateDateStamp !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>updateDateStamp,
        'updateDateStamp'
      )
    }
    if (index !== undefined && index !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>index,
        'index'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType_: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text'
    }

    return this.httpClient.post<XsltMetadataProcessingReportApiModel>(
      `${this.configuration.basePath}/processes/${encodeURIComponent(
        String(process)
      )}`,
      null,
      {
        params: queryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Apply a database search and replace to one or more records
   * Process a metadata with an XSL transformation declared in the metadata schema (See the process folder). Parameters sent to the service are forwarded to XSL process.
   * @param search Value to search for
   * @param useRegexp Use regular expression (may not be supported by all databases - tested with H2 and PostgreSQL)
   * @param replace Replacement
   * @param regexpFlags regexpFlags
   * @param uuids Record UUIDs. If null current selection is used.
   * @param bucket Selection bucket name
   * @param updateDateStamp If true updates the DateStamp (or equivalent in standards different to ISO 19139) field in the metadata with the current timestamp
   * @param index Index after processing
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public processSearchAndReplace(
    search: string,
    useRegexp?: boolean,
    replace?: string,
    regexpFlags?: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<XsltMetadataProcessingReportApiModel>
  public processSearchAndReplace(
    search: string,
    useRegexp?: boolean,
    replace?: string,
    regexpFlags?: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<XsltMetadataProcessingReportApiModel>>
  public processSearchAndReplace(
    search: string,
    useRegexp?: boolean,
    replace?: string,
    regexpFlags?: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<XsltMetadataProcessingReportApiModel>>
  public processSearchAndReplace(
    search: string,
    useRegexp?: boolean,
    replace?: string,
    regexpFlags?: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (search === null || search === undefined) {
      throw new Error(
        'Required parameter search was null or undefined when calling processSearchAndReplace.'
      )
    }

    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (useRegexp !== undefined && useRegexp !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>useRegexp,
        'useRegexp'
      )
    }
    if (search !== undefined && search !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>search,
        'search'
      )
    }
    if (replace !== undefined && replace !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>replace,
        'replace'
      )
    }
    if (regexpFlags !== undefined && regexpFlags !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>regexpFlags,
        'regexpFlags'
      )
    }
    if (uuids) {
      uuids.forEach((element) => {
        queryParameters = this.addToHttpParams(
          queryParameters,
          <any>element,
          'uuids'
        )
      })
    }
    if (bucket !== undefined && bucket !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>bucket,
        'bucket'
      )
    }
    if (updateDateStamp !== undefined && updateDateStamp !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>updateDateStamp,
        'updateDateStamp'
      )
    }
    if (index !== undefined && index !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>index,
        'index'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType_: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text'
    }

    return this.httpClient.post<XsltMetadataProcessingReportApiModel>(
      `${this.configuration.basePath}/processes/db/search-and-replace`,
      null,
      {
        params: queryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Search and replace values in one or more ISO19139 records
   * Service to apply replacements to one or more records.  To define a replacement, send the following parameters:  * mdsection-139815551372&#x3D;metadata  * mdfield-1398155513728&#x3D;id.contact.individualName  * replaceValue-1398155513728&#x3D;Juan  * searchValue-1398155513728&#x3D;Jose  &lt;br/&gt;Batch editing can also be used for similar works.
   * @param process
   * @param uuids Record UUIDs. If null current selection is used.
   * @param bucket Selection bucket name
   * @param isTesting Test only (ie. metadata are not saved). Return the report only.
   * @param isCaseInsensitive Case insensitive search.
   * @param vacuumMode \&#39;record\&#39; to apply vacuum.xsl, \&#39;element\&#39; to remove empty elements. Empty to not affect empty elements.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   * @deprecated
   */
  public searchAndReplace(
    process?: string,
    uuids?: Array<string>,
    bucket?: string,
    isTesting?: boolean,
    isCaseInsensitive?: boolean,
    vacuumMode?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<MetadataReplacementProcessingReportApiModel>
  public searchAndReplace(
    process?: string,
    uuids?: Array<string>,
    bucket?: string,
    isTesting?: boolean,
    isCaseInsensitive?: boolean,
    vacuumMode?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<MetadataReplacementProcessingReportApiModel>>
  public searchAndReplace(
    process?: string,
    uuids?: Array<string>,
    bucket?: string,
    isTesting?: boolean,
    isCaseInsensitive?: boolean,
    vacuumMode?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<MetadataReplacementProcessingReportApiModel>>
  public searchAndReplace(
    process?: string,
    uuids?: Array<string>,
    bucket?: string,
    isTesting?: boolean,
    isCaseInsensitive?: boolean,
    vacuumMode?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (process !== undefined && process !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>process,
        'process'
      )
    }
    if (uuids) {
      uuids.forEach((element) => {
        queryParameters = this.addToHttpParams(
          queryParameters,
          <any>element,
          'uuids'
        )
      })
    }
    if (bucket !== undefined && bucket !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>bucket,
        'bucket'
      )
    }
    if (isTesting !== undefined && isTesting !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>isTesting,
        'isTesting'
      )
    }
    if (isCaseInsensitive !== undefined && isCaseInsensitive !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>isCaseInsensitive,
        'isCaseInsensitive'
      )
    }
    if (vacuumMode !== undefined && vacuumMode !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>vacuumMode,
        'vacuumMode'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType_: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text'
    }

    return this.httpClient.post<MetadataReplacementProcessingReportApiModel>(
      `${this.configuration.basePath}/processes/search-and-replace`,
      null,
      {
        params: queryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }
}
