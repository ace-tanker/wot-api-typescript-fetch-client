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
 * @interface AuthLogoutOk
 */
export interface AuthLogoutOk {
    /**
     * 
     * @type {string}
     * @memberof AuthLogoutOk
     */
    status: AuthLogoutOkStatusEnum;
    /**
     * 
     * @type {object}
     * @memberof AuthLogoutOk
     */
    meta: object;
    /**
     * 
     * @type {object}
     * @memberof AuthLogoutOk
     */
    data: object;
}

/**
* @export
* @enum {string}
*/
export enum AuthLogoutOkStatusEnum {
    Ok = 'ok'
}


/**
 * Check if a given object implements the AuthLogoutOk interface.
 */
export function instanceOfAuthLogoutOk(value: object): value is AuthLogoutOk {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AuthLogoutOkFromJSON(json: any): AuthLogoutOk {
    return AuthLogoutOkFromJSONTyped(json, false);
}

export function AuthLogoutOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthLogoutOk {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'meta': json['meta'],
        'data': json['data'],
    };
}

export function AuthLogoutOkToJSON(json: any): AuthLogoutOk {
    return AuthLogoutOkToJSONTyped(json, false);
}

export function AuthLogoutOkToJSONTyped(value?: AuthLogoutOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'meta': value['meta'],
        'data': value['data'],
    };
}

export const AuthLogoutOkPropertyValidationAttributesMap: {
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

