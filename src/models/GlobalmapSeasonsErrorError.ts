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

import type { AccountListErrorErrorOneOf3 } from './AccountListErrorErrorOneOf3.js';
import {
    instanceOfAccountListErrorErrorOneOf3,
    AccountListErrorErrorOneOf3FromJSON,
    AccountListErrorErrorOneOf3FromJSONTyped,
    AccountListErrorErrorOneOf3ToJSON,
} from './AccountListErrorErrorOneOf3.js';
import type { GlobalmapSeasonsErrorErrorOneOf } from './GlobalmapSeasonsErrorErrorOneOf.js';
import {
    instanceOfGlobalmapSeasonsErrorErrorOneOf,
    GlobalmapSeasonsErrorErrorOneOfFromJSON,
    GlobalmapSeasonsErrorErrorOneOfFromJSONTyped,
    GlobalmapSeasonsErrorErrorOneOfToJSON,
} from './GlobalmapSeasonsErrorErrorOneOf.js';

/**
 * @type GlobalmapSeasonsErrorError
 * 
 * @export
 */
export type GlobalmapSeasonsErrorError = AccountListErrorErrorOneOf3 | GlobalmapSeasonsErrorErrorOneOf;

export function GlobalmapSeasonsErrorErrorFromJSON(json: any): GlobalmapSeasonsErrorError {
    return GlobalmapSeasonsErrorErrorFromJSONTyped(json, false);
}

export function GlobalmapSeasonsErrorErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapSeasonsErrorError {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfAccountListErrorErrorOneOf3(json)) {
        return AccountListErrorErrorOneOf3FromJSONTyped(json, true);
    }
    if (instanceOfGlobalmapSeasonsErrorErrorOneOf(json)) {
        return GlobalmapSeasonsErrorErrorOneOfFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GlobalmapSeasonsErrorErrorToJSON(json: any): any {
    return GlobalmapSeasonsErrorErrorToJSONTyped(json, false);
}

export function GlobalmapSeasonsErrorErrorToJSONTyped(value?: GlobalmapSeasonsErrorError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfAccountListErrorErrorOneOf3(value)) {
        return AccountListErrorErrorOneOf3ToJSON(value as AccountListErrorErrorOneOf3);
    }
    if (instanceOfGlobalmapSeasonsErrorErrorOneOf(value)) {
        return GlobalmapSeasonsErrorErrorOneOfToJSON(value as GlobalmapSeasonsErrorErrorOneOf);
    }

    return {};
}

