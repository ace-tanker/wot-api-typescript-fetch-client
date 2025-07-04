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

import type { AccountInfoError } from './AccountInfoError.js';
import {
    instanceOfAccountInfoError,
    AccountInfoErrorFromJSON,
    AccountInfoErrorFromJSONTyped,
    AccountInfoErrorToJSON,
} from './AccountInfoError.js';
import type { AccountInfoOk } from './AccountInfoOk.js';
import {
    instanceOfAccountInfoOk,
    AccountInfoOkFromJSON,
    AccountInfoOkFromJSONTyped,
    AccountInfoOkToJSON,
} from './AccountInfoOk.js';

/**
 * @type AccountInfoResponse
 * 
 * @export
 */
export type AccountInfoResponse = AccountInfoError | AccountInfoOk;

export function AccountInfoResponseFromJSON(json: any): AccountInfoResponse {
    return AccountInfoResponseFromJSONTyped(json, false);
}

export function AccountInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountInfoResponse {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfAccountInfoError(json)) {
        return AccountInfoErrorFromJSONTyped(json, true);
    }
    if (instanceOfAccountInfoOk(json)) {
        return AccountInfoOkFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AccountInfoResponseToJSON(json: any): any {
    return AccountInfoResponseToJSONTyped(json, false);
}

export function AccountInfoResponseToJSONTyped(value?: AccountInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfAccountInfoError(value)) {
        return AccountInfoErrorToJSON(value as AccountInfoError);
    }
    if (instanceOfAccountInfoOk(value)) {
        return AccountInfoOkToJSON(value as AccountInfoOk);
    }

    return {};
}

