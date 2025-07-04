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
import type { EncyclopediaVehicleprofilesDataValueItem } from './EncyclopediaVehicleprofilesDataValueItem.js';
import {
    EncyclopediaVehicleprofilesDataValueItemFromJSON,
    EncyclopediaVehicleprofilesDataValueItemFromJSONTyped,
    EncyclopediaVehicleprofilesDataValueItemToJSON,
    EncyclopediaVehicleprofilesDataValueItemToJSONTyped,
} from './EncyclopediaVehicleprofilesDataValueItem.js';
import type { EncyclopediaVehicleprofilesMeta } from './EncyclopediaVehicleprofilesMeta.js';
import {
    EncyclopediaVehicleprofilesMetaFromJSON,
    EncyclopediaVehicleprofilesMetaFromJSONTyped,
    EncyclopediaVehicleprofilesMetaToJSON,
    EncyclopediaVehicleprofilesMetaToJSONTyped,
} from './EncyclopediaVehicleprofilesMeta.js';

/**
 * 
 * @export
 * @interface EncyclopediaVehicleprofilesOk
 */
export interface EncyclopediaVehicleprofilesOk {
    /**
     * 
     * @type {string}
     * @memberof EncyclopediaVehicleprofilesOk
     */
    status: EncyclopediaVehicleprofilesOkStatusEnum;
    /**
     * 
     * @type {EncyclopediaVehicleprofilesMeta}
     * @memberof EncyclopediaVehicleprofilesOk
     */
    meta: EncyclopediaVehicleprofilesMeta;
    /**
     * 
     * @type {{ [key: string]: Array<EncyclopediaVehicleprofilesDataValueItem> | undefined | null; }}
     * @memberof EncyclopediaVehicleprofilesOk
     */
    data: { [key: string]: Array<EncyclopediaVehicleprofilesDataValueItem> | undefined | null; };
}

/**
* @export
* @enum {string}
*/
export enum EncyclopediaVehicleprofilesOkStatusEnum {
    Ok = 'ok'
}


/**
 * Check if a given object implements the EncyclopediaVehicleprofilesOk interface.
 */
export function instanceOfEncyclopediaVehicleprofilesOk(value: object): value is EncyclopediaVehicleprofilesOk {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function EncyclopediaVehicleprofilesOkFromJSON(json: any): EncyclopediaVehicleprofilesOk {
    return EncyclopediaVehicleprofilesOkFromJSONTyped(json, false);
}

export function EncyclopediaVehicleprofilesOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncyclopediaVehicleprofilesOk {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'meta': EncyclopediaVehicleprofilesMetaFromJSON(json['meta']),
        'data': json['data'],
    };
}

export function EncyclopediaVehicleprofilesOkToJSON(json: any): EncyclopediaVehicleprofilesOk {
    return EncyclopediaVehicleprofilesOkToJSONTyped(json, false);
}

export function EncyclopediaVehicleprofilesOkToJSONTyped(value?: EncyclopediaVehicleprofilesOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'meta': EncyclopediaVehicleprofilesMetaToJSON(value['meta']),
        'data': value['data'],
    };
}

export const EncyclopediaVehicleprofilesOkPropertyValidationAttributesMap: {
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

