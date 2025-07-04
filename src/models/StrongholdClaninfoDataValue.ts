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
import type { StrongholdClaninfoDataValueSkirmishStatistics } from './StrongholdClaninfoDataValueSkirmishStatistics.js';
import {
    StrongholdClaninfoDataValueSkirmishStatisticsFromJSON,
    StrongholdClaninfoDataValueSkirmishStatisticsFromJSONTyped,
    StrongholdClaninfoDataValueSkirmishStatisticsToJSON,
    StrongholdClaninfoDataValueSkirmishStatisticsToJSONTyped,
} from './StrongholdClaninfoDataValueSkirmishStatistics.js';
import type { StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatistics } from './StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatistics.js';
import {
    StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatisticsFromJSON,
    StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatisticsFromJSONTyped,
    StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatisticsToJSON,
    StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatisticsToJSONTyped,
} from './StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatistics.js';
import type { StrongholdClaninfoDataValueBuildingSlotsItem } from './StrongholdClaninfoDataValueBuildingSlotsItem.js';
import {
    StrongholdClaninfoDataValueBuildingSlotsItemFromJSON,
    StrongholdClaninfoDataValueBuildingSlotsItemFromJSONTyped,
    StrongholdClaninfoDataValueBuildingSlotsItemToJSON,
    StrongholdClaninfoDataValueBuildingSlotsItemToJSONTyped,
} from './StrongholdClaninfoDataValueBuildingSlotsItem.js';
import type { StrongholdClaninfoDataValueBattlesForStrongholdsStatistics } from './StrongholdClaninfoDataValueBattlesForStrongholdsStatistics.js';
import {
    StrongholdClaninfoDataValueBattlesForStrongholdsStatisticsFromJSON,
    StrongholdClaninfoDataValueBattlesForStrongholdsStatisticsFromJSONTyped,
    StrongholdClaninfoDataValueBattlesForStrongholdsStatisticsToJSON,
    StrongholdClaninfoDataValueBattlesForStrongholdsStatisticsToJSONTyped,
} from './StrongholdClaninfoDataValueBattlesForStrongholdsStatistics.js';

/**
 * 
 * @export
 * @interface StrongholdClaninfoDataValue
 */
export interface StrongholdClaninfoDataValue {
    /**
     * Clan ID
     * @type {number}
     * @memberof StrongholdClaninfoDataValue
     */
    clan_id: number;
    /**
     * Clan name
     * @type {string}
     * @memberof StrongholdClaninfoDataValue
     */
    clan_name: string;
    /**
     * Clan tag
     * @type {string}
     * @memberof StrongholdClaninfoDataValue
     */
    clan_tag: string;
    /**
     * Stronghold's level
     * @type {number}
     * @memberof StrongholdClaninfoDataValue
     */
    stronghold_level: number;
    /**
     * Total level of the Stronghold's structures
     * @type {number}
     * @memberof StrongholdClaninfoDataValue
     */
    stronghold_buildings_level: number;
    /**
     * Map ID associated with the Command Center construction site
     * @type {string}
     * @memberof StrongholdClaninfoDataValue
     */
    command_center_arena_id: string;
    /**
     * Information about the Stronghold's construction sites
     * @type {Array<StrongholdClaninfoDataValueBuildingSlotsItem>}
     * @memberof StrongholdClaninfoDataValue
     */
    building_slots: Array<StrongholdClaninfoDataValueBuildingSlotsItem>;
    /**
     * 
     * @type {StrongholdClaninfoDataValueSkirmishStatistics}
     * @memberof StrongholdClaninfoDataValue
     */
    skirmish_statistics: StrongholdClaninfoDataValueSkirmishStatistics;
    /**
     * 
     * @type {StrongholdClaninfoDataValueBattlesForStrongholdsStatistics}
     * @memberof StrongholdClaninfoDataValue
     */
    battles_for_strongholds_statistics: StrongholdClaninfoDataValueBattlesForStrongholdsStatistics;
    /**
     * 
     * @type {StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatistics}
     * @memberof StrongholdClaninfoDataValue
     */
    battles_series_for_strongholds_statistics: StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatistics;
}

/**
 * Check if a given object implements the StrongholdClaninfoDataValue interface.
 */
export function instanceOfStrongholdClaninfoDataValue(value: object): value is StrongholdClaninfoDataValue {
    if (!('clan_id' in value) || value['clan_id'] === undefined) return false;
    if (!('clan_name' in value) || value['clan_name'] === undefined) return false;
    if (!('clan_tag' in value) || value['clan_tag'] === undefined) return false;
    if (!('stronghold_level' in value) || value['stronghold_level'] === undefined) return false;
    if (!('stronghold_buildings_level' in value) || value['stronghold_buildings_level'] === undefined) return false;
    if (!('command_center_arena_id' in value) || value['command_center_arena_id'] === undefined) return false;
    if (!('building_slots' in value) || value['building_slots'] === undefined) return false;
    if (!('skirmish_statistics' in value) || value['skirmish_statistics'] === undefined) return false;
    if (!('battles_for_strongholds_statistics' in value) || value['battles_for_strongholds_statistics'] === undefined) return false;
    if (!('battles_series_for_strongholds_statistics' in value) || value['battles_series_for_strongholds_statistics'] === undefined) return false;
    return true;
}

export function StrongholdClaninfoDataValueFromJSON(json: any): StrongholdClaninfoDataValue {
    return StrongholdClaninfoDataValueFromJSONTyped(json, false);
}

export function StrongholdClaninfoDataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrongholdClaninfoDataValue {
    if (json == null) {
        return json;
    }
    return {
        
        'clan_id': json['clan_id'],
        'clan_name': json['clan_name'],
        'clan_tag': json['clan_tag'],
        'stronghold_level': json['stronghold_level'],
        'stronghold_buildings_level': json['stronghold_buildings_level'],
        'command_center_arena_id': json['command_center_arena_id'],
        'building_slots': ((json['building_slots'] as Array<any>).map(StrongholdClaninfoDataValueBuildingSlotsItemFromJSON)),
        'skirmish_statistics': StrongholdClaninfoDataValueSkirmishStatisticsFromJSON(json['skirmish_statistics']),
        'battles_for_strongholds_statistics': StrongholdClaninfoDataValueBattlesForStrongholdsStatisticsFromJSON(json['battles_for_strongholds_statistics']),
        'battles_series_for_strongholds_statistics': StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatisticsFromJSON(json['battles_series_for_strongholds_statistics']),
    };
}

export function StrongholdClaninfoDataValueToJSON(json: any): StrongholdClaninfoDataValue {
    return StrongholdClaninfoDataValueToJSONTyped(json, false);
}

export function StrongholdClaninfoDataValueToJSONTyped(value?: StrongholdClaninfoDataValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'clan_id': value['clan_id'],
        'clan_name': value['clan_name'],
        'clan_tag': value['clan_tag'],
        'stronghold_level': value['stronghold_level'],
        'stronghold_buildings_level': value['stronghold_buildings_level'],
        'command_center_arena_id': value['command_center_arena_id'],
        'building_slots': ((value['building_slots'] as Array<any>).map(StrongholdClaninfoDataValueBuildingSlotsItemToJSON)),
        'skirmish_statistics': StrongholdClaninfoDataValueSkirmishStatisticsToJSON(value['skirmish_statistics']),
        'battles_for_strongholds_statistics': StrongholdClaninfoDataValueBattlesForStrongholdsStatisticsToJSON(value['battles_for_strongholds_statistics']),
        'battles_series_for_strongholds_statistics': StrongholdClaninfoDataValueBattlesSeriesForStrongholdsStatisticsToJSON(value['battles_series_for_strongholds_statistics']),
    };
}

export const StrongholdClaninfoDataValuePropertyValidationAttributesMap: {
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

