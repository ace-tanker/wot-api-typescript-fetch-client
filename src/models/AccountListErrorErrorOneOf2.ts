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
 * Limit of specified names in **search** parameter exceeded ( >100 )
 * @export
 * @interface AccountListErrorErrorOneOf2
 */
export interface AccountListErrorErrorOneOf2 {
    /**
     * 
     * @type {number}
     * @memberof AccountListErrorErrorOneOf2
     */
    code: AccountListErrorErrorOneOf2CodeEnum;
    /**
     * 
     * @type {string}
     * @memberof AccountListErrorErrorOneOf2
     */
    message: AccountListErrorErrorOneOf2MessageEnum;
    /**
     * 
     * @type {string}
     * @memberof AccountListErrorErrorOneOf2
     */
    field: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountListErrorErrorOneOf2
     */
    value: string | null;
}

/**
* @export
* @enum {string}
*/
export enum AccountListErrorErrorOneOf2CodeEnum {
    NUMBER_407 = 407
}
/**
* @export
* @enum {string}
*/
export enum AccountListErrorErrorOneOf2MessageEnum {
    SearchListLimitExceeded = 'SEARCH_LIST_LIMIT_EXCEEDED'
}


/**
 * Check if a given object implements the AccountListErrorErrorOneOf2 interface.
 */
export function instanceOfAccountListErrorErrorOneOf2(value: object): value is AccountListErrorErrorOneOf2 {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('field' in value) || value['field'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function AccountListErrorErrorOneOf2FromJSON(json: any): AccountListErrorErrorOneOf2 {
    return AccountListErrorErrorOneOf2FromJSONTyped(json, false);
}

export function AccountListErrorErrorOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountListErrorErrorOneOf2 {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': json['message'],
        'field': json['field'],
        'value': json['value'],
    };
}

export function AccountListErrorErrorOneOf2ToJSON(json: any): AccountListErrorErrorOneOf2 {
    return AccountListErrorErrorOneOf2ToJSONTyped(json, false);
}

export function AccountListErrorErrorOneOf2ToJSONTyped(value?: AccountListErrorErrorOneOf2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'message': value['message'],
        'field': value['field'],
        'value': value['value'],
    };
}

export const AccountListErrorErrorOneOf2PropertyValidationAttributesMap: {
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

