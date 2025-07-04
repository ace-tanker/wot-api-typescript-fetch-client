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
 * @interface ClanratingsTypesDataValue
 */
export interface ClanratingsTypesDataValue {
    /**
     * Rating period
     * @type {string}
     * @memberof ClanratingsTypesDataValue
     */
    type: string;
    /**
     * Rating categories
     * @type {Array<string>}
     * @memberof ClanratingsTypesDataValue
     */
    rank_fields: Array<string>;
}

/**
 * Check if a given object implements the ClanratingsTypesDataValue interface.
 */
export function instanceOfClanratingsTypesDataValue(value: object): value is ClanratingsTypesDataValue {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('rank_fields' in value) || value['rank_fields'] === undefined) return false;
    return true;
}

export function ClanratingsTypesDataValueFromJSON(json: any): ClanratingsTypesDataValue {
    return ClanratingsTypesDataValueFromJSONTyped(json, false);
}

export function ClanratingsTypesDataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClanratingsTypesDataValue {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'rank_fields': json['rank_fields'],
    };
}

export function ClanratingsTypesDataValueToJSON(json: any): ClanratingsTypesDataValue {
    return ClanratingsTypesDataValueToJSONTyped(json, false);
}

export function ClanratingsTypesDataValueToJSONTyped(value?: ClanratingsTypesDataValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'rank_fields': value['rank_fields'],
    };
}

export const ClanratingsTypesDataValuePropertyValidationAttributesMap: {
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

