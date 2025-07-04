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

import type { GlobalmapEventaccountinfoError } from './GlobalmapEventaccountinfoError.js';
import {
    instanceOfGlobalmapEventaccountinfoError,
    GlobalmapEventaccountinfoErrorFromJSON,
    GlobalmapEventaccountinfoErrorFromJSONTyped,
    GlobalmapEventaccountinfoErrorToJSON,
} from './GlobalmapEventaccountinfoError.js';
import type { GlobalmapEventaccountinfoOk } from './GlobalmapEventaccountinfoOk.js';
import {
    instanceOfGlobalmapEventaccountinfoOk,
    GlobalmapEventaccountinfoOkFromJSON,
    GlobalmapEventaccountinfoOkFromJSONTyped,
    GlobalmapEventaccountinfoOkToJSON,
} from './GlobalmapEventaccountinfoOk.js';

/**
 * @type GlobalmapEventaccountinfoResponse
 * 
 * @export
 */
export type GlobalmapEventaccountinfoResponse = GlobalmapEventaccountinfoError | GlobalmapEventaccountinfoOk;

export function GlobalmapEventaccountinfoResponseFromJSON(json: any): GlobalmapEventaccountinfoResponse {
    return GlobalmapEventaccountinfoResponseFromJSONTyped(json, false);
}

export function GlobalmapEventaccountinfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapEventaccountinfoResponse {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfGlobalmapEventaccountinfoError(json)) {
        return GlobalmapEventaccountinfoErrorFromJSONTyped(json, true);
    }
    if (instanceOfGlobalmapEventaccountinfoOk(json)) {
        return GlobalmapEventaccountinfoOkFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GlobalmapEventaccountinfoResponseToJSON(json: any): any {
    return GlobalmapEventaccountinfoResponseToJSONTyped(json, false);
}

export function GlobalmapEventaccountinfoResponseToJSONTyped(value?: GlobalmapEventaccountinfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfGlobalmapEventaccountinfoError(value)) {
        return GlobalmapEventaccountinfoErrorToJSON(value as GlobalmapEventaccountinfoError);
    }
    if (instanceOfGlobalmapEventaccountinfoOk(value)) {
        return GlobalmapEventaccountinfoOkToJSON(value as GlobalmapEventaccountinfoOk);
    }

    return {};
}

