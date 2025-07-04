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
import type { GlobalmapClaninfoDataValuePrivate } from './GlobalmapClaninfoDataValuePrivate.js';
import {
    GlobalmapClaninfoDataValuePrivateFromJSON,
    GlobalmapClaninfoDataValuePrivateFromJSONTyped,
    GlobalmapClaninfoDataValuePrivateToJSON,
    GlobalmapClaninfoDataValuePrivateToJSONTyped,
} from './GlobalmapClaninfoDataValuePrivate.js';
import type { GlobalmapClaninfoDataValueStatistics } from './GlobalmapClaninfoDataValueStatistics.js';
import {
    GlobalmapClaninfoDataValueStatisticsFromJSON,
    GlobalmapClaninfoDataValueStatisticsFromJSONTyped,
    GlobalmapClaninfoDataValueStatisticsToJSON,
    GlobalmapClaninfoDataValueStatisticsToJSONTyped,
} from './GlobalmapClaninfoDataValueStatistics.js';
import type { GlobalmapClaninfoDataValueRatings } from './GlobalmapClaninfoDataValueRatings.js';
import {
    GlobalmapClaninfoDataValueRatingsFromJSON,
    GlobalmapClaninfoDataValueRatingsFromJSONTyped,
    GlobalmapClaninfoDataValueRatingsToJSON,
    GlobalmapClaninfoDataValueRatingsToJSONTyped,
} from './GlobalmapClaninfoDataValueRatings.js';

/**
 * 
 * @export
 * @interface GlobalmapClaninfoDataValue
 */
export interface GlobalmapClaninfoDataValue {
    /**
     * Clan ID
     * @type {number}
     * @memberof GlobalmapClaninfoDataValue
     */
    clan_id: number;
    /**
     * Clan tag
     * @type {string}
     * @memberof GlobalmapClaninfoDataValue
     */
    tag: string;
    /**
     * Clan name
     * @type {string}
     * @memberof GlobalmapClaninfoDataValue
     */
    name: string;
    /**
     * 
     * @type {GlobalmapClaninfoDataValueStatistics}
     * @memberof GlobalmapClaninfoDataValue
     */
    statistics: GlobalmapClaninfoDataValueStatistics;
    /**
     * 
     * @type {GlobalmapClaninfoDataValueRatings}
     * @memberof GlobalmapClaninfoDataValue
     */
    ratings: GlobalmapClaninfoDataValueRatings;
    /**
     * 
     * @type {GlobalmapClaninfoDataValuePrivate}
     * @memberof GlobalmapClaninfoDataValue
     */
    _private: GlobalmapClaninfoDataValuePrivate | null;
}

/**
 * Check if a given object implements the GlobalmapClaninfoDataValue interface.
 */
export function instanceOfGlobalmapClaninfoDataValue(value: object): value is GlobalmapClaninfoDataValue {
    if (!('clan_id' in value) || value['clan_id'] === undefined) return false;
    if (!('tag' in value) || value['tag'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('statistics' in value) || value['statistics'] === undefined) return false;
    if (!('ratings' in value) || value['ratings'] === undefined) return false;
    if (!('_private' in value) || value['_private'] === undefined) return false;
    return true;
}

export function GlobalmapClaninfoDataValueFromJSON(json: any): GlobalmapClaninfoDataValue {
    return GlobalmapClaninfoDataValueFromJSONTyped(json, false);
}

export function GlobalmapClaninfoDataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapClaninfoDataValue {
    if (json == null) {
        return json;
    }
    return {
        
        'clan_id': json['clan_id'],
        'tag': json['tag'],
        'name': json['name'],
        'statistics': GlobalmapClaninfoDataValueStatisticsFromJSON(json['statistics']),
        'ratings': GlobalmapClaninfoDataValueRatingsFromJSON(json['ratings']),
        '_private': GlobalmapClaninfoDataValuePrivateFromJSON(json['private']),
    };
}

export function GlobalmapClaninfoDataValueToJSON(json: any): GlobalmapClaninfoDataValue {
    return GlobalmapClaninfoDataValueToJSONTyped(json, false);
}

export function GlobalmapClaninfoDataValueToJSONTyped(value?: GlobalmapClaninfoDataValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'clan_id': value['clan_id'],
        'tag': value['tag'],
        'name': value['name'],
        'statistics': GlobalmapClaninfoDataValueStatisticsToJSON(value['statistics']),
        'ratings': GlobalmapClaninfoDataValueRatingsToJSON(value['ratings']),
        'private': GlobalmapClaninfoDataValuePrivateToJSON(value['_private']),
    };
}

export const GlobalmapClaninfoDataValuePropertyValidationAttributesMap: {
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

