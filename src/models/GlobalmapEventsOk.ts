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
import type { GlobalmapEventsDataItem } from './GlobalmapEventsDataItem.js';
import {
    GlobalmapEventsDataItemFromJSON,
    GlobalmapEventsDataItemFromJSONTyped,
    GlobalmapEventsDataItemToJSON,
    GlobalmapEventsDataItemToJSONTyped,
} from './GlobalmapEventsDataItem.js';
import type { GlobalmapEventsMeta } from './GlobalmapEventsMeta.js';
import {
    GlobalmapEventsMetaFromJSON,
    GlobalmapEventsMetaFromJSONTyped,
    GlobalmapEventsMetaToJSON,
    GlobalmapEventsMetaToJSONTyped,
} from './GlobalmapEventsMeta.js';

/**
 * 
 * @export
 * @interface GlobalmapEventsOk
 */
export interface GlobalmapEventsOk {
    /**
     * 
     * @type {string}
     * @memberof GlobalmapEventsOk
     */
    status: GlobalmapEventsOkStatusEnum;
    /**
     * 
     * @type {GlobalmapEventsMeta}
     * @memberof GlobalmapEventsOk
     */
    meta: GlobalmapEventsMeta;
    /**
     * 
     * @type {Array<GlobalmapEventsDataItem>}
     * @memberof GlobalmapEventsOk
     */
    data: Array<GlobalmapEventsDataItem>;
}

/**
* @export
* @enum {string}
*/
export enum GlobalmapEventsOkStatusEnum {
    Ok = 'ok'
}


/**
 * Check if a given object implements the GlobalmapEventsOk interface.
 */
export function instanceOfGlobalmapEventsOk(value: object): value is GlobalmapEventsOk {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GlobalmapEventsOkFromJSON(json: any): GlobalmapEventsOk {
    return GlobalmapEventsOkFromJSONTyped(json, false);
}

export function GlobalmapEventsOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapEventsOk {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'meta': GlobalmapEventsMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(GlobalmapEventsDataItemFromJSON)),
    };
}

export function GlobalmapEventsOkToJSON(json: any): GlobalmapEventsOk {
    return GlobalmapEventsOkToJSONTyped(json, false);
}

export function GlobalmapEventsOkToJSONTyped(value?: GlobalmapEventsOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'meta': GlobalmapEventsMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(GlobalmapEventsDataItemToJSON)),
    };
}

export const GlobalmapEventsOkPropertyValidationAttributesMap: {
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

