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

export interface StatusApiModel {
  id?: string
  state?: StatusApiModel.StateEnum
  date?: string
  message?: string
}
export namespace StatusApiModel {
  export type StateEnum =
    | 'RED'
    | 'UNINITIALIZED'
    | 'YELLOW'
    | 'GREEN'
    | 'DISABLED'
  export const StateEnum = {
    RED: 'RED' as StateEnum,
    UNINITIALIZED: 'UNINITIALIZED' as StateEnum,
    YELLOW: 'YELLOW' as StateEnum,
    GREEN: 'GREEN' as StateEnum,
    DISABLED: 'DISABLED' as StateEnum,
  }
}
