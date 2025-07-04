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

import type { StrongholdClanreservesError } from './StrongholdClanreservesError.js';
import {
    instanceOfStrongholdClanreservesError,
    StrongholdClanreservesErrorFromJSON,
    StrongholdClanreservesErrorFromJSONTyped,
    StrongholdClanreservesErrorToJSON,
} from './StrongholdClanreservesError.js';
import type { StrongholdClanreservesOk } from './StrongholdClanreservesOk.js';
import {
    instanceOfStrongholdClanreservesOk,
    StrongholdClanreservesOkFromJSON,
    StrongholdClanreservesOkFromJSONTyped,
    StrongholdClanreservesOkToJSON,
} from './StrongholdClanreservesOk.js';

/**
 * @type StrongholdClanreservesResponse
 * 
 * @export
 */
export type StrongholdClanreservesResponse = StrongholdClanreservesError | StrongholdClanreservesOk;

export function StrongholdClanreservesResponseFromJSON(json: any): StrongholdClanreservesResponse {
    return StrongholdClanreservesResponseFromJSONTyped(json, false);
}

export function StrongholdClanreservesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrongholdClanreservesResponse {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfStrongholdClanreservesError(json)) {
        return StrongholdClanreservesErrorFromJSONTyped(json, true);
    }
    if (instanceOfStrongholdClanreservesOk(json)) {
        return StrongholdClanreservesOkFromJSONTyped(json, true);
    }

    return {} as any;
}

export function StrongholdClanreservesResponseToJSON(json: any): any {
    return StrongholdClanreservesResponseToJSONTyped(json, false);
}

export function StrongholdClanreservesResponseToJSONTyped(value?: StrongholdClanreservesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfStrongholdClanreservesError(value)) {
        return StrongholdClanreservesErrorToJSON(value as StrongholdClanreservesError);
    }
    if (instanceOfStrongholdClanreservesOk(value)) {
        return StrongholdClanreservesOkToJSON(value as StrongholdClanreservesOk);
    }

    return {};
}

