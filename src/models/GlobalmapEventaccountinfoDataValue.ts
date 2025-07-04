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
import type { GlobalmapEventaccountinfoDataValueEventsValueItem } from './GlobalmapEventaccountinfoDataValueEventsValueItem.js';
import {
    GlobalmapEventaccountinfoDataValueEventsValueItemFromJSON,
    GlobalmapEventaccountinfoDataValueEventsValueItemFromJSONTyped,
    GlobalmapEventaccountinfoDataValueEventsValueItemToJSON,
    GlobalmapEventaccountinfoDataValueEventsValueItemToJSONTyped,
} from './GlobalmapEventaccountinfoDataValueEventsValueItem.js';

/**
 * 
 * @export
 * @interface GlobalmapEventaccountinfoDataValue
 */
export interface GlobalmapEventaccountinfoDataValue {
    /**
     * 
     * @type {{ [key: string]: Array<GlobalmapEventaccountinfoDataValueEventsValueItem> | undefined; }}
     * @memberof GlobalmapEventaccountinfoDataValue
     */
    events: { [key: string]: Array<GlobalmapEventaccountinfoDataValueEventsValueItem> | undefined; };
}

/**
 * Check if a given object implements the GlobalmapEventaccountinfoDataValue interface.
 */
export function instanceOfGlobalmapEventaccountinfoDataValue(value: object): value is GlobalmapEventaccountinfoDataValue {
    if (!('events' in value) || value['events'] === undefined) return false;
    return true;
}

export function GlobalmapEventaccountinfoDataValueFromJSON(json: any): GlobalmapEventaccountinfoDataValue {
    return GlobalmapEventaccountinfoDataValueFromJSONTyped(json, false);
}

export function GlobalmapEventaccountinfoDataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapEventaccountinfoDataValue {
    if (json == null) {
        return json;
    }
    return {
        
        'events': json['events'],
    };
}

export function GlobalmapEventaccountinfoDataValueToJSON(json: any): GlobalmapEventaccountinfoDataValue {
    return GlobalmapEventaccountinfoDataValueToJSONTyped(json, false);
}

export function GlobalmapEventaccountinfoDataValueToJSONTyped(value?: GlobalmapEventaccountinfoDataValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'events': value['events'],
    };
}

export const GlobalmapEventaccountinfoDataValuePropertyValidationAttributesMap: {
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

