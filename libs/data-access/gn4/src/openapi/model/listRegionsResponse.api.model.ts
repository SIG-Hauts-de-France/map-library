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
import { CategoryResponseApiModel } from './categoryResponse.api.model'
import { RegionResponseApiModel } from './regionResponse.api.model'

export interface ListRegionsResponseApiModel {
  region?: Array<RegionResponseApiModel>
  categories?: { [key: string]: CategoryResponseApiModel }
  regions?: Array<RegionResponseApiModel>
  count?: number
}
