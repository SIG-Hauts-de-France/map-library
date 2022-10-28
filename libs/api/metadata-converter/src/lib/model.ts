type Uuid = string

export enum Role {
  UNSPECIFIED,
  OTHER,
  AUTHOR, // Party who authored the resource
  COLLABORATOR, // party who assists with the generation of the resource other than the principal investigator
  CONTRIBUTOR, // party contributing to the resource
  CUSTODIAN, // Party that accepts accountability and responsibility for the data and ensures appropriate care and maintenance of the resource
  DISTRIBUTOR, // Party who distributes the resource
  EDITOR, // party who reviewed or modified the resource to improve the content
  FUNDER, // party providing monetary support for the resource
  MEDIATOR, // a class of entity that mediates access to the resource and for whom the resource is intended or useful
  ORIGINATOR, // Party who created the resource
  OWNER, // Party that owns the resource
  POINT_OF_CONTACT, // Party who can be contacted for acquiring knowledge about or acquisition of the resource
  PRINCIPAL_INVESTIGATOR, // Key party responsible for gathering information and conducting research
  PROCESSOR, // Party who has processed the data in a manner such that the resource has been modified
  PUBLISHER, // Party who published the resource
  RESOURCE_PROVIDER, // Party that supplies the resource
  RIGHTS_HOLDER, // party owning or managing rights over the resource
  SPONSOR, // party that sponsors the resource
  STAKEHOLDER, // party who has an interest in the resource or the use of the resource
  USER, // Party who uses the resource
}

export type UpdateFrequencyCode =
  | 'unknown'
  | 'notPlanned'
  | 'asNeeded'
  | 'irregular'
  | 'continual'
  | 'periodic'
export type UpdateFrequencyCustom = {
  updatedTimes: number // this should be an integer
  per: 'day' | 'week' | 'month' | 'year'
}
export type UpdateFrequency = UpdateFrequencyCode | UpdateFrequencyCustom

export interface Organisation {
  name: string
  description?: string
  website?: URL
  logoUrl?: URL
}

export interface Individual {
  firstName?: string
  lastName?: string
  email: string
  role: Role
  position?: string
  organisation: Organisation
  // to add: address, phone
}

export type RecordKind = 'dataset' | 'service'

export enum RecordStatus {
  COMPLETED,
  ON_GOING,
  UNDER_DEVELOPMENT,
  DEPRECATED,
  REMOVED,
}

export type AccessConstraintType = 'security' | 'privacy' | 'legal' | 'other'
export interface AccessConstraint {
  text: string
  type: AccessConstraintType
}

export type License = {
  text: string
  url?: URL
}

export type SpatialRepresentationType =
  | 'grid'
  | 'vector'
  | 'tin'
  | 'table'
  | 'point'

export interface BaseRecord {
  uniqueIdentifier: Uuid
  ownerOrganisation: Organisation
  contacts: Array<Individual>
  title: string
  abstract: string
  recordCreated?: Date
  recordUpdated: Date
  kind: RecordKind
  themes: Array<string> // TODO: handle codelists
  keywords: Array<string> // TODO: handle thesaurus and id
  accessConstraints: Array<AccessConstraint>
  useLimitations: Array<string>
  licenses: Array<License>
  status: RecordStatus
  updateFrequency: UpdateFrequency

  // to add: iso19139.topicCategory
  // to add: canonical url
  // to add: source catalog (??)
  // to add: thumbnail url
  // to add: is open data ?
}

// TODO: handle actual codelists
export type ServiceProtocol = 'wms' | 'wfs' | 'esriRest' | 'other'

export interface DatasetServiceDistribution {
  accessServiceUrl: URL
  accessServiceProtocol: ServiceProtocol
  identifierInService?: string
  name?: string
  description?: string
}

export interface DatasetDownloadDistribution {
  downloadUrl: URL
  mimeType?: string
  sizeBytes?: number
  // removed because what's the use? encoding can be exposed by the file server or
  // even found out by trial and error; besides we can reasonably expect unicode or iso most of the time
  // textEncoding?: string
  name?: string
  description?: string
}

export interface DatasetLinkDistribution {
  linkUrl: URL
  name?: string
  description?: string
}

export type DatasetDistribution =
  | DatasetServiceDistribution
  | DatasetDownloadDistribution
  | DatasetLinkDistribution

export interface DatasetOverview {
  url: URL
  description?: string
}

export interface DatasetSpatialExtent {
  geometry: unknown // GeoJSON
  description?: string
}

export interface DatasetTemporalExtent {
  start: Date
  end: Date
  description?: string
}

export interface DatasetRecord extends BaseRecord {
  kind: 'dataset'
  datasetCreated?: Date
  datasetUpdated?: Date
  lineage: string // Explanation of the origin of this record (e.g: how, why)"
  distributions: Array<DatasetDistribution>
  overviews: Array<DatasetOverview>
  spatialExtents: Array<DatasetSpatialExtent> // not handled yet
  temporalExtents: Array<DatasetTemporalExtent> // not handled yet
  spatialRepresentation?: SpatialRepresentationType
}

export interface ServiceEndpoint {
  endpointUrl: URL
  protocol: string // TODO: handle codelist
}

export interface ServiceRecord extends BaseRecord {
  kind: 'service'
  endpoints: Array<ServiceEndpoint>
}

export type CatalogRecord = ServiceRecord | DatasetRecord
