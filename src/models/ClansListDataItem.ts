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
import type { ClansListDataItemEmblems } from './ClansListDataItemEmblems.js';
import {
    ClansListDataItemEmblemsFromJSON,
    ClansListDataItemEmblemsFromJSONTyped,
    ClansListDataItemEmblemsToJSON,
    ClansListDataItemEmblemsToJSONTyped,
} from './ClansListDataItemEmblems.js';

/**
 * 
 * @export
 * @interface ClansListDataItem
 */
export interface ClansListDataItem {
    /**
     * Clan ID
     * @type {number}
     * @memberof ClansListDataItem
     */
    clan_id: number;
    /**
     * Clan name
     * @type {string}
     * @memberof ClansListDataItem
     */
    name: string;
    /**
     * Clan tag
     * @type {string}
     * @memberof ClansListDataItem
     */
    tag: string;
    /**
     * Clan creation date
     * @type {number}
     * @memberof ClansListDataItem
     */
    created_at: number;
    /**
     * Clan color in HEX #RRGGBB
     * @type {string}
     * @memberof ClansListDataItem
     */
    color: string;
    /**
     * Number of clan members
     * @type {number}
     * @memberof ClansListDataItem
     */
    members_count: number;
    /**
     * 
     * @type {ClansListDataItemEmblems}
     * @memberof ClansListDataItem
     */
    emblems: ClansListDataItemEmblems;
}

/**
 * Check if a given object implements the ClansListDataItem interface.
 */
export function instanceOfClansListDataItem(value: object): value is ClansListDataItem {
    if (!('clan_id' in value) || value['clan_id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('tag' in value) || value['tag'] === undefined) return false;
    if (!('created_at' in value) || value['created_at'] === undefined) return false;
    if (!('color' in value) || value['color'] === undefined) return false;
    if (!('members_count' in value) || value['members_count'] === undefined) return false;
    if (!('emblems' in value) || value['emblems'] === undefined) return false;
    return true;
}

export function ClansListDataItemFromJSON(json: any): ClansListDataItem {
    return ClansListDataItemFromJSONTyped(json, false);
}

export function ClansListDataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClansListDataItem {
    if (json == null) {
        return json;
    }
    return {
        
        'clan_id': json['clan_id'],
        'name': json['name'],
        'tag': json['tag'],
        'created_at': json['created_at'],
        'color': json['color'],
        'members_count': json['members_count'],
        'emblems': ClansListDataItemEmblemsFromJSON(json['emblems']),
    };
}

export function ClansListDataItemToJSON(json: any): ClansListDataItem {
    return ClansListDataItemToJSONTyped(json, false);
}

export function ClansListDataItemToJSONTyped(value?: ClansListDataItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'clan_id': value['clan_id'],
        'name': value['name'],
        'tag': value['tag'],
        'created_at': value['created_at'],
        'color': value['color'],
        'members_count': value['members_count'],
        'emblems': ClansListDataItemEmblemsToJSON(value['emblems']),
    };
}

export const ClansListDataItemPropertyValidationAttributesMap: {
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

