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
import type { GlobalmapFrontsMeta } from './GlobalmapFrontsMeta.js';
import {
    GlobalmapFrontsMetaFromJSON,
    GlobalmapFrontsMetaFromJSONTyped,
    GlobalmapFrontsMetaToJSON,
    GlobalmapFrontsMetaToJSONTyped,
} from './GlobalmapFrontsMeta.js';
import type { GlobalmapFrontsDataItem } from './GlobalmapFrontsDataItem.js';
import {
    GlobalmapFrontsDataItemFromJSON,
    GlobalmapFrontsDataItemFromJSONTyped,
    GlobalmapFrontsDataItemToJSON,
    GlobalmapFrontsDataItemToJSONTyped,
} from './GlobalmapFrontsDataItem.js';

/**
 * 
 * @export
 * @interface GlobalmapFrontsOk
 */
export interface GlobalmapFrontsOk {
    /**
     * 
     * @type {string}
     * @memberof GlobalmapFrontsOk
     */
    status: GlobalmapFrontsOkStatusEnum;
    /**
     * 
     * @type {GlobalmapFrontsMeta}
     * @memberof GlobalmapFrontsOk
     */
    meta: GlobalmapFrontsMeta;
    /**
     * 
     * @type {Array<GlobalmapFrontsDataItem>}
     * @memberof GlobalmapFrontsOk
     */
    data: Array<GlobalmapFrontsDataItem>;
}

/**
* @export
* @enum {string}
*/
export enum GlobalmapFrontsOkStatusEnum {
    Ok = 'ok'
}


/**
 * Check if a given object implements the GlobalmapFrontsOk interface.
 */
export function instanceOfGlobalmapFrontsOk(value: object): value is GlobalmapFrontsOk {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GlobalmapFrontsOkFromJSON(json: any): GlobalmapFrontsOk {
    return GlobalmapFrontsOkFromJSONTyped(json, false);
}

export function GlobalmapFrontsOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapFrontsOk {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'meta': GlobalmapFrontsMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(GlobalmapFrontsDataItemFromJSON)),
    };
}

export function GlobalmapFrontsOkToJSON(json: any): GlobalmapFrontsOk {
    return GlobalmapFrontsOkToJSONTyped(json, false);
}

export function GlobalmapFrontsOkToJSONTyped(value?: GlobalmapFrontsOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'meta': GlobalmapFrontsMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(GlobalmapFrontsDataItemToJSON)),
    };
}

export const GlobalmapFrontsOkPropertyValidationAttributesMap: {
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

