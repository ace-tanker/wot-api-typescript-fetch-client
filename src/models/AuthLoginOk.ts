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
import type { AuthLoginMeta } from './AuthLoginMeta.js';
import {
    AuthLoginMetaFromJSON,
    AuthLoginMetaFromJSONTyped,
    AuthLoginMetaToJSON,
    AuthLoginMetaToJSONTyped,
} from './AuthLoginMeta.js';
import type { AuthLoginData } from './AuthLoginData.js';
import {
    AuthLoginDataFromJSON,
    AuthLoginDataFromJSONTyped,
    AuthLoginDataToJSON,
    AuthLoginDataToJSONTyped,
} from './AuthLoginData.js';

/**
 * 
 * @export
 * @interface AuthLoginOk
 */
export interface AuthLoginOk {
    /**
     * 
     * @type {string}
     * @memberof AuthLoginOk
     */
    status: AuthLoginOkStatusEnum;
    /**
     * 
     * @type {AuthLoginMeta}
     * @memberof AuthLoginOk
     */
    meta: AuthLoginMeta;
    /**
     * 
     * @type {AuthLoginData}
     * @memberof AuthLoginOk
     */
    data: AuthLoginData;
}

/**
* @export
* @enum {string}
*/
export enum AuthLoginOkStatusEnum {
    Ok = 'ok'
}


/**
 * Check if a given object implements the AuthLoginOk interface.
 */
export function instanceOfAuthLoginOk(value: object): value is AuthLoginOk {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AuthLoginOkFromJSON(json: any): AuthLoginOk {
    return AuthLoginOkFromJSONTyped(json, false);
}

export function AuthLoginOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthLoginOk {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'meta': AuthLoginMetaFromJSON(json['meta']),
        'data': AuthLoginDataFromJSON(json['data']),
    };
}

export function AuthLoginOkToJSON(json: any): AuthLoginOk {
    return AuthLoginOkToJSONTyped(json, false);
}

export function AuthLoginOkToJSONTyped(value?: AuthLoginOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'meta': AuthLoginMetaToJSON(value['meta']),
        'data': AuthLoginDataToJSON(value['data']),
    };
}

export const AuthLoginOkPropertyValidationAttributesMap: {
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

