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
import type { EncyclopediaBadgesDataValue } from './EncyclopediaBadgesDataValue.js';
import {
    EncyclopediaBadgesDataValueFromJSON,
    EncyclopediaBadgesDataValueFromJSONTyped,
    EncyclopediaBadgesDataValueToJSON,
    EncyclopediaBadgesDataValueToJSONTyped,
} from './EncyclopediaBadgesDataValue.js';
import type { EncyclopediaBadgesMeta } from './EncyclopediaBadgesMeta.js';
import {
    EncyclopediaBadgesMetaFromJSON,
    EncyclopediaBadgesMetaFromJSONTyped,
    EncyclopediaBadgesMetaToJSON,
    EncyclopediaBadgesMetaToJSONTyped,
} from './EncyclopediaBadgesMeta.js';

/**
 * 
 * @export
 * @interface EncyclopediaBadgesOk
 */
export interface EncyclopediaBadgesOk {
    /**
     * 
     * @type {string}
     * @memberof EncyclopediaBadgesOk
     */
    status: EncyclopediaBadgesOkStatusEnum;
    /**
     * 
     * @type {EncyclopediaBadgesMeta}
     * @memberof EncyclopediaBadgesOk
     */
    meta: EncyclopediaBadgesMeta;
    /**
     * 
     * @type {{ [key: string]: EncyclopediaBadgesDataValue | undefined; }}
     * @memberof EncyclopediaBadgesOk
     */
    data: { [key: string]: EncyclopediaBadgesDataValue | undefined; };
}

/**
* @export
* @enum {string}
*/
export enum EncyclopediaBadgesOkStatusEnum {
    Ok = 'ok'
}


/**
 * Check if a given object implements the EncyclopediaBadgesOk interface.
 */
export function instanceOfEncyclopediaBadgesOk(value: object): value is EncyclopediaBadgesOk {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function EncyclopediaBadgesOkFromJSON(json: any): EncyclopediaBadgesOk {
    return EncyclopediaBadgesOkFromJSONTyped(json, false);
}

export function EncyclopediaBadgesOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncyclopediaBadgesOk {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'meta': EncyclopediaBadgesMetaFromJSON(json['meta']),
        'data': (mapValues(json['data'], EncyclopediaBadgesDataValueFromJSON)),
    };
}

export function EncyclopediaBadgesOkToJSON(json: any): EncyclopediaBadgesOk {
    return EncyclopediaBadgesOkToJSONTyped(json, false);
}

export function EncyclopediaBadgesOkToJSONTyped(value?: EncyclopediaBadgesOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'meta': EncyclopediaBadgesMetaToJSON(value['meta']),
        'data': (mapValues(value['data'], EncyclopediaBadgesDataValueToJSON)),
    };
}

export const EncyclopediaBadgesOkPropertyValidationAttributesMap: {
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

