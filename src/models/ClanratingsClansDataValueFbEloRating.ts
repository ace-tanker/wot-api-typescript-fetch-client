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
 * Weighted Elo rating achieved in the Stronghold mode
 * @export
 * @interface ClanratingsClansDataValueFbEloRating
 */
export interface ClanratingsClansDataValueFbEloRating {
    /**
     * Absolute value
     * @type {number}
     * @memberof ClanratingsClansDataValueFbEloRating
     */
    value: number;
    /**
     * Position
     * @type {number}
     * @memberof ClanratingsClansDataValueFbEloRating
     */
    rank: number | null;
    /**
     * Change of position in rating
     * @type {number}
     * @memberof ClanratingsClansDataValueFbEloRating
     */
    rank_delta: number | null;
}

/**
 * Check if a given object implements the ClanratingsClansDataValueFbEloRating interface.
 */
export function instanceOfClanratingsClansDataValueFbEloRating(value: object): value is ClanratingsClansDataValueFbEloRating {
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('rank' in value) || value['rank'] === undefined) return false;
    if (!('rank_delta' in value) || value['rank_delta'] === undefined) return false;
    return true;
}

export function ClanratingsClansDataValueFbEloRatingFromJSON(json: any): ClanratingsClansDataValueFbEloRating {
    return ClanratingsClansDataValueFbEloRatingFromJSONTyped(json, false);
}

export function ClanratingsClansDataValueFbEloRatingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClanratingsClansDataValueFbEloRating {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
        'rank': json['rank'],
        'rank_delta': json['rank_delta'],
    };
}

export function ClanratingsClansDataValueFbEloRatingToJSON(json: any): ClanratingsClansDataValueFbEloRating {
    return ClanratingsClansDataValueFbEloRatingToJSONTyped(json, false);
}

export function ClanratingsClansDataValueFbEloRatingToJSONTyped(value?: ClanratingsClansDataValueFbEloRating | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
        'rank': value['rank'],
        'rank_delta': value['rank_delta'],
    };
}

export const ClanratingsClansDataValueFbEloRatingPropertyValidationAttributesMap: {
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

