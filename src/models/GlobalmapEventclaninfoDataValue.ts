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
import type { GlobalmapEventclaninfoDataValueEventsValueItem } from './GlobalmapEventclaninfoDataValueEventsValueItem.js';
import {
    GlobalmapEventclaninfoDataValueEventsValueItemFromJSON,
    GlobalmapEventclaninfoDataValueEventsValueItemFromJSONTyped,
    GlobalmapEventclaninfoDataValueEventsValueItemToJSON,
    GlobalmapEventclaninfoDataValueEventsValueItemToJSONTyped,
} from './GlobalmapEventclaninfoDataValueEventsValueItem.js';

/**
 * 
 * @export
 * @interface GlobalmapEventclaninfoDataValue
 */
export interface GlobalmapEventclaninfoDataValue {
    /**
     * 
     * @type {{ [key: string]: Array<GlobalmapEventclaninfoDataValueEventsValueItem> | undefined; }}
     * @memberof GlobalmapEventclaninfoDataValue
     */
    events: { [key: string]: Array<GlobalmapEventclaninfoDataValueEventsValueItem> | undefined; };
}

/**
 * Check if a given object implements the GlobalmapEventclaninfoDataValue interface.
 */
export function instanceOfGlobalmapEventclaninfoDataValue(value: object): value is GlobalmapEventclaninfoDataValue {
    if (!('events' in value) || value['events'] === undefined) return false;
    return true;
}

export function GlobalmapEventclaninfoDataValueFromJSON(json: any): GlobalmapEventclaninfoDataValue {
    return GlobalmapEventclaninfoDataValueFromJSONTyped(json, false);
}

export function GlobalmapEventclaninfoDataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapEventclaninfoDataValue {
    if (json == null) {
        return json;
    }
    return {
        
        'events': json['events'],
    };
}

export function GlobalmapEventclaninfoDataValueToJSON(json: any): GlobalmapEventclaninfoDataValue {
    return GlobalmapEventclaninfoDataValueToJSONTyped(json, false);
}

export function GlobalmapEventclaninfoDataValueToJSONTyped(value?: GlobalmapEventclaninfoDataValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'events': value['events'],
    };
}

export const GlobalmapEventclaninfoDataValuePropertyValidationAttributesMap: {
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

