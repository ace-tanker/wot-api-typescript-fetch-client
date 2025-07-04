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
 * @interface GlobalmapClanbattlesDataItem
 */
export interface GlobalmapClanbattlesDataItem {
    /**
     * Front ID
     * @type {string}
     * @memberof GlobalmapClanbattlesDataItem
     */
    front_id: string;
    /**
     * Front name
     * @type {string}
     * @memberof GlobalmapClanbattlesDataItem
     */
    front_name: string;
    /**
     * Province ID
     * @type {string}
     * @memberof GlobalmapClanbattlesDataItem
     */
    province_id: string;
    /**
     * Province name
     * @type {string}
     * @memberof GlobalmapClanbattlesDataItem
     */
    province_name: string;
    /**
     * Battle date and time
     * @type {number}
     * @memberof GlobalmapClanbattlesDataItem
     */
    time: number;
    /**
     * Battle type: attack or defense
     * @type {string}
     * @memberof GlobalmapClanbattlesDataItem
     */
    type: string;
    /**
     * Enemy clan ID
     * @type {number}
     * @memberof GlobalmapClanbattlesDataItem
     */
    competitor_id: number;
    /**
     * Attack Type: ground, auction, tournament
     * @type {string}
     * @memberof GlobalmapClanbattlesDataItem
     */
    attack_type: string;
    /**
     * Vehicle Tier
     * @type {number}
     * @memberof GlobalmapClanbattlesDataItem
     */
    vehicle_level: number;
}

/**
 * Check if a given object implements the GlobalmapClanbattlesDataItem interface.
 */
export function instanceOfGlobalmapClanbattlesDataItem(value: object): value is GlobalmapClanbattlesDataItem {
    if (!('front_id' in value) || value['front_id'] === undefined) return false;
    if (!('front_name' in value) || value['front_name'] === undefined) return false;
    if (!('province_id' in value) || value['province_id'] === undefined) return false;
    if (!('province_name' in value) || value['province_name'] === undefined) return false;
    if (!('time' in value) || value['time'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('competitor_id' in value) || value['competitor_id'] === undefined) return false;
    if (!('attack_type' in value) || value['attack_type'] === undefined) return false;
    if (!('vehicle_level' in value) || value['vehicle_level'] === undefined) return false;
    return true;
}

export function GlobalmapClanbattlesDataItemFromJSON(json: any): GlobalmapClanbattlesDataItem {
    return GlobalmapClanbattlesDataItemFromJSONTyped(json, false);
}

export function GlobalmapClanbattlesDataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapClanbattlesDataItem {
    if (json == null) {
        return json;
    }
    return {
        
        'front_id': json['front_id'],
        'front_name': json['front_name'],
        'province_id': json['province_id'],
        'province_name': json['province_name'],
        'time': json['time'],
        'type': json['type'],
        'competitor_id': json['competitor_id'],
        'attack_type': json['attack_type'],
        'vehicle_level': json['vehicle_level'],
    };
}

export function GlobalmapClanbattlesDataItemToJSON(json: any): GlobalmapClanbattlesDataItem {
    return GlobalmapClanbattlesDataItemToJSONTyped(json, false);
}

export function GlobalmapClanbattlesDataItemToJSONTyped(value?: GlobalmapClanbattlesDataItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'front_id': value['front_id'],
        'front_name': value['front_name'],
        'province_id': value['province_id'],
        'province_name': value['province_name'],
        'time': value['time'],
        'type': value['type'],
        'competitor_id': value['competitor_id'],
        'attack_type': value['attack_type'],
        'vehicle_level': value['vehicle_level'],
    };
}

export const GlobalmapClanbattlesDataItemPropertyValidationAttributesMap: {
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

