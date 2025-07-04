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
 * Elo rating on the Global Map in Absolute division
 * @export
 * @interface ClanratingsClansDataValueGmEloRating10
 */
export interface ClanratingsClansDataValueGmEloRating10 {
    /**
     * Absolute value
     * @type {number}
     * @memberof ClanratingsClansDataValueGmEloRating10
     */
    value: number;
    /**
     * Position
     * @type {number}
     * @memberof ClanratingsClansDataValueGmEloRating10
     */
    rank: number | null;
    /**
     * Change of position in rating
     * @type {number}
     * @memberof ClanratingsClansDataValueGmEloRating10
     */
    rank_delta: number | null;
}

/**
 * Check if a given object implements the ClanratingsClansDataValueGmEloRating10 interface.
 */
export function instanceOfClanratingsClansDataValueGmEloRating10(value: object): value is ClanratingsClansDataValueGmEloRating10 {
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('rank' in value) || value['rank'] === undefined) return false;
    if (!('rank_delta' in value) || value['rank_delta'] === undefined) return false;
    return true;
}

export function ClanratingsClansDataValueGmEloRating10FromJSON(json: any): ClanratingsClansDataValueGmEloRating10 {
    return ClanratingsClansDataValueGmEloRating10FromJSONTyped(json, false);
}

export function ClanratingsClansDataValueGmEloRating10FromJSONTyped(json: any, ignoreDiscriminator: boolean): ClanratingsClansDataValueGmEloRating10 {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
        'rank': json['rank'],
        'rank_delta': json['rank_delta'],
    };
}

export function ClanratingsClansDataValueGmEloRating10ToJSON(json: any): ClanratingsClansDataValueGmEloRating10 {
    return ClanratingsClansDataValueGmEloRating10ToJSONTyped(json, false);
}

export function ClanratingsClansDataValueGmEloRating10ToJSONTyped(value?: ClanratingsClansDataValueGmEloRating10 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
        'rank': value['rank'],
        'rank_delta': value['rank_delta'],
    };
}

export const ClanratingsClansDataValueGmEloRating10PropertyValidationAttributesMap: {
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

