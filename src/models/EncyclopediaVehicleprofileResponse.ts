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

import type { EncyclopediaVehicleprofileError } from './EncyclopediaVehicleprofileError.js';
import {
    instanceOfEncyclopediaVehicleprofileError,
    EncyclopediaVehicleprofileErrorFromJSON,
    EncyclopediaVehicleprofileErrorFromJSONTyped,
    EncyclopediaVehicleprofileErrorToJSON,
} from './EncyclopediaVehicleprofileError.js';
import type { EncyclopediaVehicleprofileOk } from './EncyclopediaVehicleprofileOk.js';
import {
    instanceOfEncyclopediaVehicleprofileOk,
    EncyclopediaVehicleprofileOkFromJSON,
    EncyclopediaVehicleprofileOkFromJSONTyped,
    EncyclopediaVehicleprofileOkToJSON,
} from './EncyclopediaVehicleprofileOk.js';

/**
 * @type EncyclopediaVehicleprofileResponse
 * 
 * @export
 */
export type EncyclopediaVehicleprofileResponse = EncyclopediaVehicleprofileError | EncyclopediaVehicleprofileOk;

export function EncyclopediaVehicleprofileResponseFromJSON(json: any): EncyclopediaVehicleprofileResponse {
    return EncyclopediaVehicleprofileResponseFromJSONTyped(json, false);
}

export function EncyclopediaVehicleprofileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncyclopediaVehicleprofileResponse {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfEncyclopediaVehicleprofileError(json)) {
        return EncyclopediaVehicleprofileErrorFromJSONTyped(json, true);
    }
    if (instanceOfEncyclopediaVehicleprofileOk(json)) {
        return EncyclopediaVehicleprofileOkFromJSONTyped(json, true);
    }

    return {} as any;
}

export function EncyclopediaVehicleprofileResponseToJSON(json: any): any {
    return EncyclopediaVehicleprofileResponseToJSONTyped(json, false);
}

export function EncyclopediaVehicleprofileResponseToJSONTyped(value?: EncyclopediaVehicleprofileResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfEncyclopediaVehicleprofileError(value)) {
        return EncyclopediaVehicleprofileErrorToJSON(value as EncyclopediaVehicleprofileError);
    }
    if (instanceOfEncyclopediaVehicleprofileOk(value)) {
        return EncyclopediaVehicleprofileOkToJSON(value as EncyclopediaVehicleprofileOk);
    }

    return {};
}

