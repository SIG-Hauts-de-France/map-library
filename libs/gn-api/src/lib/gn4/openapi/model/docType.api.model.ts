/**
 * GeoNetwork 4.0.2 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.0.2
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DocumentApiModel } from './document.api.model'
import { ElementApiModel } from './element.api.model'
import { ParentApiModel } from './parent.api.model'

export interface DocTypeApiModel {
  parent?: ParentApiModel
  elementName?: string
  publicID?: string
  systemID?: string
  internalSubset?: string
  value?: string
  document?: DocumentApiModel
  parentElement?: ElementApiModel
}
