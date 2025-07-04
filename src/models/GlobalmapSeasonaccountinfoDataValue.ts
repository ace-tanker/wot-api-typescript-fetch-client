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
import type { GlobalmapSeasonaccountinfoDataValueSeasonsValueItem } from './GlobalmapSeasonaccountinfoDataValueSeasonsValueItem.js';
import {
    GlobalmapSeasonaccountinfoDataValueSeasonsValueItemFromJSON,
    GlobalmapSeasonaccountinfoDataValueSeasonsValueItemFromJSONTyped,
    GlobalmapSeasonaccountinfoDataValueSeasonsValueItemToJSON,
    GlobalmapSeasonaccountinfoDataValueSeasonsValueItemToJSONTyped,
} from './GlobalmapSeasonaccountinfoDataValueSeasonsValueItem.js';

/**
 * 
 * @export
 * @interface GlobalmapSeasonaccountinfoDataValue
 */
export interface GlobalmapSeasonaccountinfoDataValue {
    /**
     * 
     * @type {{ [key: string]: Array<GlobalmapSeasonaccountinfoDataValueSeasonsValueItem> | undefined; }}
     * @memberof GlobalmapSeasonaccountinfoDataValue
     */
    seasons: { [key: string]: Array<GlobalmapSeasonaccountinfoDataValueSeasonsValueItem> | undefined; };
}

/**
 * Check if a given object implements the GlobalmapSeasonaccountinfoDataValue interface.
 */
export function instanceOfGlobalmapSeasonaccountinfoDataValue(value: object): value is GlobalmapSeasonaccountinfoDataValue {
    if (!('seasons' in value) || value['seasons'] === undefined) return false;
    return true;
}

export function GlobalmapSeasonaccountinfoDataValueFromJSON(json: any): GlobalmapSeasonaccountinfoDataValue {
    return GlobalmapSeasonaccountinfoDataValueFromJSONTyped(json, false);
}

export function GlobalmapSeasonaccountinfoDataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapSeasonaccountinfoDataValue {
    if (json == null) {
        return json;
    }
    return {
        
        'seasons': json['seasons'],
    };
}

export function GlobalmapSeasonaccountinfoDataValueToJSON(json: any): GlobalmapSeasonaccountinfoDataValue {
    return GlobalmapSeasonaccountinfoDataValueToJSONTyped(json, false);
}

export function GlobalmapSeasonaccountinfoDataValueToJSONTyped(value?: GlobalmapSeasonaccountinfoDataValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'seasons': value['seasons'],
    };
}

export const GlobalmapSeasonaccountinfoDataValuePropertyValidationAttributesMap: {
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

