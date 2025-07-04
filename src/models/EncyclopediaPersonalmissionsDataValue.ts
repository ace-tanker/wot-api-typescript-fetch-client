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
import type { EncyclopediaPersonalmissionsDataValueOperationsValue } from './EncyclopediaPersonalmissionsDataValueOperationsValue.js';
import {
    EncyclopediaPersonalmissionsDataValueOperationsValueFromJSON,
    EncyclopediaPersonalmissionsDataValueOperationsValueFromJSONTyped,
    EncyclopediaPersonalmissionsDataValueOperationsValueToJSON,
    EncyclopediaPersonalmissionsDataValueOperationsValueToJSONTyped,
} from './EncyclopediaPersonalmissionsDataValueOperationsValue.js';

/**
 * 
 * @export
 * @interface EncyclopediaPersonalmissionsDataValue
 */
export interface EncyclopediaPersonalmissionsDataValue {
    /**
     * Campaign ID
     * @type {number}
     * @memberof EncyclopediaPersonalmissionsDataValue
     */
    campaign_id: number;
    /**
     * Campaign name
     * @type {string}
     * @memberof EncyclopediaPersonalmissionsDataValue
     */
    name: string;
    /**
     * Campaign description
     * @type {string}
     * @memberof EncyclopediaPersonalmissionsDataValue
     */
    description: string;
    /**
     * 
     * @type {{ [key: string]: EncyclopediaPersonalmissionsDataValueOperationsValue | undefined; }}
     * @memberof EncyclopediaPersonalmissionsDataValue
     */
    operations: { [key: string]: EncyclopediaPersonalmissionsDataValueOperationsValue | undefined; };
}

/**
 * Check if a given object implements the EncyclopediaPersonalmissionsDataValue interface.
 */
export function instanceOfEncyclopediaPersonalmissionsDataValue(value: object): value is EncyclopediaPersonalmissionsDataValue {
    if (!('campaign_id' in value) || value['campaign_id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('operations' in value) || value['operations'] === undefined) return false;
    return true;
}

export function EncyclopediaPersonalmissionsDataValueFromJSON(json: any): EncyclopediaPersonalmissionsDataValue {
    return EncyclopediaPersonalmissionsDataValueFromJSONTyped(json, false);
}

export function EncyclopediaPersonalmissionsDataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncyclopediaPersonalmissionsDataValue {
    if (json == null) {
        return json;
    }
    return {
        
        'campaign_id': json['campaign_id'],
        'name': json['name'],
        'description': json['description'],
        'operations': (mapValues(json['operations'], EncyclopediaPersonalmissionsDataValueOperationsValueFromJSON)),
    };
}

export function EncyclopediaPersonalmissionsDataValueToJSON(json: any): EncyclopediaPersonalmissionsDataValue {
    return EncyclopediaPersonalmissionsDataValueToJSONTyped(json, false);
}

export function EncyclopediaPersonalmissionsDataValueToJSONTyped(value?: EncyclopediaPersonalmissionsDataValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'campaign_id': value['campaign_id'],
        'name': value['name'],
        'description': value['description'],
        'operations': (mapValues(value['operations'], EncyclopediaPersonalmissionsDataValueOperationsValueToJSON)),
    };
}

export const EncyclopediaPersonalmissionsDataValuePropertyValidationAttributesMap: {
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

