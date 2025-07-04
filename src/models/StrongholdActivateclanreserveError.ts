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
import type { StrongholdActivateclanreserveErrorError } from './StrongholdActivateclanreserveErrorError.js';
import {
    StrongholdActivateclanreserveErrorErrorFromJSON,
    StrongholdActivateclanreserveErrorErrorFromJSONTyped,
    StrongholdActivateclanreserveErrorErrorToJSON,
    StrongholdActivateclanreserveErrorErrorToJSONTyped,
} from './StrongholdActivateclanreserveErrorError.js';

/**
 * 
 * @export
 * @interface StrongholdActivateclanreserveError
 */
export interface StrongholdActivateclanreserveError {
    /**
     * 
     * @type {string}
     * @memberof StrongholdActivateclanreserveError
     */
    status: StrongholdActivateclanreserveErrorStatusEnum;
    /**
     * 
     * @type {StrongholdActivateclanreserveErrorError}
     * @memberof StrongholdActivateclanreserveError
     */
    error: StrongholdActivateclanreserveErrorError;
}

/**
* @export
* @enum {string}
*/
export enum StrongholdActivateclanreserveErrorStatusEnum {
    Error = 'error'
}


/**
 * Check if a given object implements the StrongholdActivateclanreserveError interface.
 */
export function instanceOfStrongholdActivateclanreserveError(value: object): value is StrongholdActivateclanreserveError {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function StrongholdActivateclanreserveErrorFromJSON(json: any): StrongholdActivateclanreserveError {
    return StrongholdActivateclanreserveErrorFromJSONTyped(json, false);
}

export function StrongholdActivateclanreserveErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrongholdActivateclanreserveError {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'error': StrongholdActivateclanreserveErrorErrorFromJSON(json['error']),
    };
}

export function StrongholdActivateclanreserveErrorToJSON(json: any): StrongholdActivateclanreserveError {
    return StrongholdActivateclanreserveErrorToJSONTyped(json, false);
}

export function StrongholdActivateclanreserveErrorToJSONTyped(value?: StrongholdActivateclanreserveError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'error': StrongholdActivateclanreserveErrorErrorToJSON(value['error']),
    };
}

export const StrongholdActivateclanreserveErrorPropertyValidationAttributesMap: {
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

