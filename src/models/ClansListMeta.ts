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
 * @interface ClansListMeta
 */
export interface ClansListMeta {
    /**
     * 
     * @type {number}
     * @memberof ClansListMeta
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof ClansListMeta
     */
    total: number;
}

/**
 * Check if a given object implements the ClansListMeta interface.
 */
export function instanceOfClansListMeta(value: object): value is ClansListMeta {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function ClansListMetaFromJSON(json: any): ClansListMeta {
    return ClansListMetaFromJSONTyped(json, false);
}

export function ClansListMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClansListMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'total': json['total'],
    };
}

export function ClansListMetaToJSON(json: any): ClansListMeta {
    return ClansListMetaToJSONTyped(json, false);
}

export function ClansListMetaToJSONTyped(value?: ClansListMeta | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'total': value['total'],
    };
}

export const ClansListMetaPropertyValidationAttributesMap: {
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

