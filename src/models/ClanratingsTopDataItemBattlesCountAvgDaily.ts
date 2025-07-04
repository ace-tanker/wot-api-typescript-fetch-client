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
 * Average number of battles per day
 * @export
 * @interface ClanratingsTopDataItemBattlesCountAvgDaily
 */
export interface ClanratingsTopDataItemBattlesCountAvgDaily {
    /**
     * Absolute value
     * @type {number}
     * @memberof ClanratingsTopDataItemBattlesCountAvgDaily
     */
    value: number;
    /**
     * Position
     * @type {number}
     * @memberof ClanratingsTopDataItemBattlesCountAvgDaily
     */
    rank: number;
    /**
     * Change of position in rating
     * @type {number}
     * @memberof ClanratingsTopDataItemBattlesCountAvgDaily
     */
    rank_delta: number;
}

/**
 * Check if a given object implements the ClanratingsTopDataItemBattlesCountAvgDaily interface.
 */
export function instanceOfClanratingsTopDataItemBattlesCountAvgDaily(value: object): value is ClanratingsTopDataItemBattlesCountAvgDaily {
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('rank' in value) || value['rank'] === undefined) return false;
    if (!('rank_delta' in value) || value['rank_delta'] === undefined) return false;
    return true;
}

export function ClanratingsTopDataItemBattlesCountAvgDailyFromJSON(json: any): ClanratingsTopDataItemBattlesCountAvgDaily {
    return ClanratingsTopDataItemBattlesCountAvgDailyFromJSONTyped(json, false);
}

export function ClanratingsTopDataItemBattlesCountAvgDailyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClanratingsTopDataItemBattlesCountAvgDaily {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
        'rank': json['rank'],
        'rank_delta': json['rank_delta'],
    };
}

export function ClanratingsTopDataItemBattlesCountAvgDailyToJSON(json: any): ClanratingsTopDataItemBattlesCountAvgDaily {
    return ClanratingsTopDataItemBattlesCountAvgDailyToJSONTyped(json, false);
}

export function ClanratingsTopDataItemBattlesCountAvgDailyToJSONTyped(value?: ClanratingsTopDataItemBattlesCountAvgDaily | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
        'rank': value['rank'],
        'rank_delta': value['rank_delta'],
    };
}

export const ClanratingsTopDataItemBattlesCountAvgDailyPropertyValidationAttributesMap: {
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

