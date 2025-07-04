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
 * @interface ClansInfoError
 */
export interface ClansInfoError {
    /**
     * 
     * @type {string}
     * @memberof ClansInfoError
     */
    status: ClansInfoErrorStatusEnum;
    /**
     * 
     * @type {AccountListErrorErrorOneOf3}
     * @memberof ClansInfoError
     */
    error: AccountListErrorErrorOneOf3;
}

/**
* @export
* @enum {string}
*/
export enum ClansInfoErrorStatusEnum {
    Error = 'error'
}


/**
 * Check if a given object implements the ClansInfoError interface.
 */
export function instanceOfClansInfoError(value: object): value is ClansInfoError {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function ClansInfoErrorFromJSON(json: any): ClansInfoError {
    return ClansInfoErrorFromJSONTyped(json, false);
}

export function ClansInfoErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClansInfoError {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'error': AccountListErrorErrorOneOf3FromJSON(json['error']),
    };
}

export function ClansInfoErrorToJSON(json: any): ClansInfoError {
    return ClansInfoErrorToJSONTyped(json, false);
}

export function ClansInfoErrorToJSONTyped(value?: ClansInfoError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'error': AccountListErrorErrorOneOf3ToJSON(value['error']),
    };
}

export const ClansInfoErrorPropertyValidationAttributesMap: {
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

