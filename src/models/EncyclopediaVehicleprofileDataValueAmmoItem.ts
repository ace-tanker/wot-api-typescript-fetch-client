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
import type { EncyclopediaVehicleprofileDataValueAmmoItemStun } from './EncyclopediaVehicleprofileDataValueAmmoItemStun.js';
import {
    EncyclopediaVehicleprofileDataValueAmmoItemStunFromJSON,
    EncyclopediaVehicleprofileDataValueAmmoItemStunFromJSONTyped,
    EncyclopediaVehicleprofileDataValueAmmoItemStunToJSON,
    EncyclopediaVehicleprofileDataValueAmmoItemStunToJSONTyped,
} from './EncyclopediaVehicleprofileDataValueAmmoItemStun.js';

/**
 * 
 * @export
 * @interface EncyclopediaVehicleprofileDataValueAmmoItem
 */
export interface EncyclopediaVehicleprofileDataValueAmmoItem {
    /**
     * Shell type
     * @type {string}
     * @memberof EncyclopediaVehicleprofileDataValueAmmoItem
     */
    type: string;
    /**
     * Damage (hp), a list of values: min, avg, max
     * @type {Array<number>}
     * @memberof EncyclopediaVehicleprofileDataValueAmmoItem
     */
    damage: Array<number>;
    /**
     * Penetration (mm), a list of values: min, avg, max
     * @type {Array<number>}
     * @memberof EncyclopediaVehicleprofileDataValueAmmoItem
     */
    penetration: Array<number>;
    /**
     * 
     * @type {EncyclopediaVehicleprofileDataValueAmmoItemStun}
     * @memberof EncyclopediaVehicleprofileDataValueAmmoItem
     */
    stun: EncyclopediaVehicleprofileDataValueAmmoItemStun | null;
}

/**
 * Check if a given object implements the EncyclopediaVehicleprofileDataValueAmmoItem interface.
 */
export function instanceOfEncyclopediaVehicleprofileDataValueAmmoItem(value: object): value is EncyclopediaVehicleprofileDataValueAmmoItem {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('damage' in value) || value['damage'] === undefined) return false;
    if (!('penetration' in value) || value['penetration'] === undefined) return false;
    if (!('stun' in value) || value['stun'] === undefined) return false;
    return true;
}

export function EncyclopediaVehicleprofileDataValueAmmoItemFromJSON(json: any): EncyclopediaVehicleprofileDataValueAmmoItem {
    return EncyclopediaVehicleprofileDataValueAmmoItemFromJSONTyped(json, false);
}

export function EncyclopediaVehicleprofileDataValueAmmoItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncyclopediaVehicleprofileDataValueAmmoItem {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'damage': json['damage'],
        'penetration': json['penetration'],
        'stun': EncyclopediaVehicleprofileDataValueAmmoItemStunFromJSON(json['stun']),
    };
}

export function EncyclopediaVehicleprofileDataValueAmmoItemToJSON(json: any): EncyclopediaVehicleprofileDataValueAmmoItem {
    return EncyclopediaVehicleprofileDataValueAmmoItemToJSONTyped(json, false);
}

export function EncyclopediaVehicleprofileDataValueAmmoItemToJSONTyped(value?: EncyclopediaVehicleprofileDataValueAmmoItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'damage': value['damage'],
        'penetration': value['penetration'],
        'stun': EncyclopediaVehicleprofileDataValueAmmoItemStunToJSON(value['stun']),
    };
}

export const EncyclopediaVehicleprofileDataValueAmmoItemPropertyValidationAttributesMap: {
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

