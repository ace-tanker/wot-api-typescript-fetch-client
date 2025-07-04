/* tslint:disable */
/* eslint-disable */
/**
 * World of Tanks
 * OpenAPI specification for the Wargaming.net Public API. The official Wargaming.net Public API documentation can be found at the Wargaming [Developer\'s room](https://developers.wargaming.net/).
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact@ace-tanker.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface GlobalmapEventaccountratingneighborsMeta
 */
export interface GlobalmapEventaccountratingneighborsMeta {
    /**
     * 
     * @type {number}
     * @memberof GlobalmapEventaccountratingneighborsMeta
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof GlobalmapEventaccountratingneighborsMeta
     */
    page_total: number;
    /**
     * 
     * @type {number}
     * @memberof GlobalmapEventaccountratingneighborsMeta
     */
    page: number;
}

/**
 * Check if a given object implements the GlobalmapEventaccountratingneighborsMeta interface.
 */
export function instanceOfGlobalmapEventaccountratingneighborsMeta(value: object): value is GlobalmapEventaccountratingneighborsMeta {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('page_total' in value) || value['page_total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    return true;
}

export function GlobalmapEventaccountratingneighborsMetaFromJSON(json: any): GlobalmapEventaccountratingneighborsMeta {
    return GlobalmapEventaccountratingneighborsMetaFromJSONTyped(json, false);
}

export function GlobalmapEventaccountratingneighborsMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapEventaccountratingneighborsMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'page_total': json['page_total'],
        'page': json['page'],
    };
}

export function GlobalmapEventaccountratingneighborsMetaToJSON(json: any): GlobalmapEventaccountratingneighborsMeta {
    return GlobalmapEventaccountratingneighborsMetaToJSONTyped(json, false);
}

export function GlobalmapEventaccountratingneighborsMetaToJSONTyped(value?: GlobalmapEventaccountratingneighborsMeta | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'page_total': value['page_total'],
        'page': value['page'],
    };
}

export const GlobalmapEventaccountratingneighborsMetaPropertyValidationAttributesMap: {
    [property: string]: {
        maxLength?: number,
        minLength?: number,
        pattern?: string,
        maximum?: number,
        exclusiveMaximum?: boolean,
        minimum?: number,
        exclusiveMinimum?: boolean,
        multipleOf?: number,
        maxItems?: number,
        minItems?: number,
        uniqueItems?: boolean
    }
} = {
}

