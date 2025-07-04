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
import type { EncyclopediaModulesDataValueDefaultProfileGunAmmoItem } from './EncyclopediaModulesDataValueDefaultProfileGunAmmoItem.js';
import {
    EncyclopediaModulesDataValueDefaultProfileGunAmmoItemFromJSON,
    EncyclopediaModulesDataValueDefaultProfileGunAmmoItemFromJSONTyped,
    EncyclopediaModulesDataValueDefaultProfileGunAmmoItemToJSON,
    EncyclopediaModulesDataValueDefaultProfileGunAmmoItemToJSONTyped,
} from './EncyclopediaModulesDataValueDefaultProfileGunAmmoItem.js';

/**
 * Gun characteristics
 * @export
 * @interface EncyclopediaModulesDataValueDefaultProfileGun
 */
export interface EncyclopediaModulesDataValueDefaultProfileGun {
    /**
     * Rate of fire (rounds/min)
     * @type {number}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    fire_rate: number;
    /**
     * Dispersion at 100 m (m)
     * @type {number}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    dispersion: number;
    /**
     * Aiming time (s)
     * @type {number}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    aim_time: number;
    /**
     * Reload time (s)
     * @type {number}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    reload_time: number;
    /**
     * Elevation angle (deg)
     * @type {number}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    move_up_arc: number;
    /**
     * Depression angle (deg)
     * @type {number}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    move_down_arc: number;
    /**
     * Traverse speed (deg/s)
     * @type {number}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    traverse_speed: number;
    /**
     * Gun shells characteristics
     * @type {Array<EncyclopediaModulesDataValueDefaultProfileGunAmmoItem>}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    ammo: Array<EncyclopediaModulesDataValueDefaultProfileGunAmmoItem>;
    /**
     * Number of shells
     * @type {number}
     * @memberof EncyclopediaModulesDataValueDefaultProfileGun
     */
    max_ammo: number;
}

/**
 * Check if a given object implements the EncyclopediaModulesDataValueDefaultProfileGun interface.
 */
export function instanceOfEncyclopediaModulesDataValueDefaultProfileGun(value: object): value is EncyclopediaModulesDataValueDefaultProfileGun {
    if (!('fire_rate' in value) || value['fire_rate'] === undefined) return false;
    if (!('dispersion' in value) || value['dispersion'] === undefined) return false;
    if (!('aim_time' in value) || value['aim_time'] === undefined) return false;
    if (!('reload_time' in value) || value['reload_time'] === undefined) return false;
    if (!('move_up_arc' in value) || value['move_up_arc'] === undefined) return false;
    if (!('move_down_arc' in value) || value['move_down_arc'] === undefined) return false;
    if (!('traverse_speed' in value) || value['traverse_speed'] === undefined) return false;
    if (!('ammo' in value) || value['ammo'] === undefined) return false;
    if (!('max_ammo' in value) || value['max_ammo'] === undefined) return false;
    return true;
}

export function EncyclopediaModulesDataValueDefaultProfileGunFromJSON(json: any): EncyclopediaModulesDataValueDefaultProfileGun {
    return EncyclopediaModulesDataValueDefaultProfileGunFromJSONTyped(json, false);
}

export function EncyclopediaModulesDataValueDefaultProfileGunFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncyclopediaModulesDataValueDefaultProfileGun {
    if (json == null) {
        return json;
    }
    return {
        
        'fire_rate': json['fire_rate'],
        'dispersion': json['dispersion'],
        'aim_time': json['aim_time'],
        'reload_time': json['reload_time'],
        'move_up_arc': json['move_up_arc'],
        'move_down_arc': json['move_down_arc'],
        'traverse_speed': json['traverse_speed'],
        'ammo': ((json['ammo'] as Array<any>).map(EncyclopediaModulesDataValueDefaultProfileGunAmmoItemFromJSON)),
        'max_ammo': json['max_ammo'],
    };
}

export function EncyclopediaModulesDataValueDefaultProfileGunToJSON(json: any): EncyclopediaModulesDataValueDefaultProfileGun {
    return EncyclopediaModulesDataValueDefaultProfileGunToJSONTyped(json, false);
}

export function EncyclopediaModulesDataValueDefaultProfileGunToJSONTyped(value?: EncyclopediaModulesDataValueDefaultProfileGun | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fire_rate': value['fire_rate'],
        'dispersion': value['dispersion'],
        'aim_time': value['aim_time'],
        'reload_time': value['reload_time'],
        'move_up_arc': value['move_up_arc'],
        'move_down_arc': value['move_down_arc'],
        'traverse_speed': value['traverse_speed'],
        'ammo': ((value['ammo'] as Array<any>).map(EncyclopediaModulesDataValueDefaultProfileGunAmmoItemToJSON)),
        'max_ammo': value['max_ammo'],
    };
}

export const EncyclopediaModulesDataValueDefaultProfileGunPropertyValidationAttributesMap: {
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

