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

import type { ClansMessageboardError } from './ClansMessageboardError.js';
import {
    instanceOfClansMessageboardError,
    ClansMessageboardErrorFromJSON,
    ClansMessageboardErrorFromJSONTyped,
    ClansMessageboardErrorToJSON,
} from './ClansMessageboardError.js';
import type { ClansMessageboardOk } from './ClansMessageboardOk.js';
import {
    instanceOfClansMessageboardOk,
    ClansMessageboardOkFromJSON,
    ClansMessageboardOkFromJSONTyped,
    ClansMessageboardOkToJSON,
} from './ClansMessageboardOk.js';

/**
 * @type ClansMessageboardResponse
 * 
 * @export
 */
export type ClansMessageboardResponse = ClansMessageboardError | ClansMessageboardOk;

export function ClansMessageboardResponseFromJSON(json: any): ClansMessageboardResponse {
    return ClansMessageboardResponseFromJSONTyped(json, false);
}

export function ClansMessageboardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClansMessageboardResponse {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfClansMessageboardError(json)) {
        return ClansMessageboardErrorFromJSONTyped(json, true);
    }
    if (instanceOfClansMessageboardOk(json)) {
        return ClansMessageboardOkFromJSONTyped(json, true);
    }

    return {} as any;
}

export function ClansMessageboardResponseToJSON(json: any): any {
    return ClansMessageboardResponseToJSONTyped(json, false);
}

export function ClansMessageboardResponseToJSONTyped(value?: ClansMessageboardResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfClansMessageboardError(value)) {
        return ClansMessageboardErrorToJSON(value as ClansMessageboardError);
    }
    if (instanceOfClansMessageboardOk(value)) {
        return ClansMessageboardOkToJSON(value as ClansMessageboardOk);
    }

    return {};
}

