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

import type { GlobalmapInfoError } from './GlobalmapInfoError.js';
import {
    instanceOfGlobalmapInfoError,
    GlobalmapInfoErrorFromJSON,
    GlobalmapInfoErrorFromJSONTyped,
    GlobalmapInfoErrorToJSON,
} from './GlobalmapInfoError.js';
import type { GlobalmapInfoOk } from './GlobalmapInfoOk.js';
import {
    instanceOfGlobalmapInfoOk,
    GlobalmapInfoOkFromJSON,
    GlobalmapInfoOkFromJSONTyped,
    GlobalmapInfoOkToJSON,
} from './GlobalmapInfoOk.js';

/**
 * @type GlobalmapInfoResponse
 * 
 * @export
 */
export type GlobalmapInfoResponse = GlobalmapInfoError | GlobalmapInfoOk;

export function GlobalmapInfoResponseFromJSON(json: any): GlobalmapInfoResponse {
    return GlobalmapInfoResponseFromJSONTyped(json, false);
}

export function GlobalmapInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapInfoResponse {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfGlobalmapInfoError(json)) {
        return GlobalmapInfoErrorFromJSONTyped(json, true);
    }
    if (instanceOfGlobalmapInfoOk(json)) {
        return GlobalmapInfoOkFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GlobalmapInfoResponseToJSON(json: any): any {
    return GlobalmapInfoResponseToJSONTyped(json, false);
}

export function GlobalmapInfoResponseToJSONTyped(value?: GlobalmapInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfGlobalmapInfoError(value)) {
        return GlobalmapInfoErrorToJSON(value as GlobalmapInfoError);
    }
    if (instanceOfGlobalmapInfoOk(value)) {
        return GlobalmapInfoOkToJSON(value as GlobalmapInfoOk);
    }

    return {};
}

