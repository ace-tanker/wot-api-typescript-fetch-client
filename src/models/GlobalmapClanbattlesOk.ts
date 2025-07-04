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
import type { GlobalmapClanbattlesDataItem } from './GlobalmapClanbattlesDataItem.js';
import {
    GlobalmapClanbattlesDataItemFromJSON,
    GlobalmapClanbattlesDataItemFromJSONTyped,
    GlobalmapClanbattlesDataItemToJSON,
    GlobalmapClanbattlesDataItemToJSONTyped,
} from './GlobalmapClanbattlesDataItem.js';
import type { GlobalmapClanbattlesMeta } from './GlobalmapClanbattlesMeta.js';
import {
    GlobalmapClanbattlesMetaFromJSON,
    GlobalmapClanbattlesMetaFromJSONTyped,
    GlobalmapClanbattlesMetaToJSON,
    GlobalmapClanbattlesMetaToJSONTyped,
} from './GlobalmapClanbattlesMeta.js';

/**
 * 
 * @export
 * @interface GlobalmapClanbattlesOk
 */
export interface GlobalmapClanbattlesOk {
    /**
     * 
     * @type {string}
     * @memberof GlobalmapClanbattlesOk
     */
    status: GlobalmapClanbattlesOkStatusEnum;
    /**
     * 
     * @type {GlobalmapClanbattlesMeta}
     * @memberof GlobalmapClanbattlesOk
     */
    meta: GlobalmapClanbattlesMeta;
    /**
     * 
     * @type {Array<GlobalmapClanbattlesDataItem>}
     * @memberof GlobalmapClanbattlesOk
     */
    data: Array<GlobalmapClanbattlesDataItem>;
}

/**
* @export
* @enum {string}
*/
export enum GlobalmapClanbattlesOkStatusEnum {
    Ok = 'ok'
}


/**
 * Check if a given object implements the GlobalmapClanbattlesOk interface.
 */
export function instanceOfGlobalmapClanbattlesOk(value: object): value is GlobalmapClanbattlesOk {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GlobalmapClanbattlesOkFromJSON(json: any): GlobalmapClanbattlesOk {
    return GlobalmapClanbattlesOkFromJSONTyped(json, false);
}

export function GlobalmapClanbattlesOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapClanbattlesOk {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'meta': GlobalmapClanbattlesMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(GlobalmapClanbattlesDataItemFromJSON)),
    };
}

export function GlobalmapClanbattlesOkToJSON(json: any): GlobalmapClanbattlesOk {
    return GlobalmapClanbattlesOkToJSONTyped(json, false);
}

export function GlobalmapClanbattlesOkToJSONTyped(value?: GlobalmapClanbattlesOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'meta': GlobalmapClanbattlesMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(GlobalmapClanbattlesDataItemToJSON)),
    };
}

export const GlobalmapClanbattlesOkPropertyValidationAttributesMap: {
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

