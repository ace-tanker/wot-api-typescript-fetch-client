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

import type { ClansInfoError } from './ClansInfoError.js';
import {
    instanceOfClansInfoError,
    ClansInfoErrorFromJSON,
    ClansInfoErrorFromJSONTyped,
    ClansInfoErrorToJSON,
} from './ClansInfoError.js';
import type { ClansInfoOk } from './ClansInfoOk.js';
import {
    instanceOfClansInfoOk,
    ClansInfoOkFromJSON,
    ClansInfoOkFromJSONTyped,
    ClansInfoOkToJSON,
} from './ClansInfoOk.js';

/**
 * @type ClansInfoResponse
 * 
 * @export
 */
export type ClansInfoResponse = ClansInfoError | ClansInfoOk;

export function ClansInfoResponseFromJSON(json: any): ClansInfoResponse {
    return ClansInfoResponseFromJSONTyped(json, false);
}

export function ClansInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClansInfoResponse {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfClansInfoError(json)) {
        return ClansInfoErrorFromJSONTyped(json, true);
    }
    if (instanceOfClansInfoOk(json)) {
        return ClansInfoOkFromJSONTyped(json, true);
    }

    return {} as any;
}

export function ClansInfoResponseToJSON(json: any): any {
    return ClansInfoResponseToJSONTyped(json, false);
}

export function ClansInfoResponseToJSONTyped(value?: ClansInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfClansInfoError(value)) {
        return ClansInfoErrorToJSON(value as ClansInfoError);
    }
    if (instanceOfClansInfoOk(value)) {
        return ClansInfoOkToJSON(value as ClansInfoOk);
    }

    return {};
}

