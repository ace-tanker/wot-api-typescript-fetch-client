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
import type { AccountListErrorErrorOneOf3 } from './AccountListErrorErrorOneOf3.js';
import {
    AccountListErrorErrorOneOf3FromJSON,
    AccountListErrorErrorOneOf3FromJSONTyped,
    AccountListErrorErrorOneOf3ToJSON,
    AccountListErrorErrorOneOf3ToJSONTyped,
} from './AccountListErrorErrorOneOf3.js';

/**
 * 
 * @export
 * @interface StrongholdClaninfoError
 */
export interface StrongholdClaninfoError {
    /**
     * 
     * @type {string}
     * @memberof StrongholdClaninfoError
     */
    status: StrongholdClaninfoErrorStatusEnum;
    /**
     * 
     * @type {AccountListErrorErrorOneOf3}
     * @memberof StrongholdClaninfoError
     */
    error: AccountListErrorErrorOneOf3;
}

/**
* @export
* @enum {string}
*/
export enum StrongholdClaninfoErrorStatusEnum {
    Error = 'error'
}


/**
 * Check if a given object implements the StrongholdClaninfoError interface.
 */
export function instanceOfStrongholdClaninfoError(value: object): value is StrongholdClaninfoError {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function StrongholdClaninfoErrorFromJSON(json: any): StrongholdClaninfoError {
    return StrongholdClaninfoErrorFromJSONTyped(json, false);
}

export function StrongholdClaninfoErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrongholdClaninfoError {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'error': AccountListErrorErrorOneOf3FromJSON(json['error']),
    };
}

export function StrongholdClaninfoErrorToJSON(json: any): StrongholdClaninfoError {
    return StrongholdClaninfoErrorToJSONTyped(json, false);
}

export function StrongholdClaninfoErrorToJSONTyped(value?: StrongholdClaninfoError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'error': AccountListErrorErrorOneOf3ToJSON(value['error']),
    };
}

export const StrongholdClaninfoErrorPropertyValidationAttributesMap: {
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

