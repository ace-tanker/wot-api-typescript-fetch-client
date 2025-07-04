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
 * Season not found
 * @export
 * @interface GlobalmapSeasonsErrorErrorOneOf
 */
export interface GlobalmapSeasonsErrorErrorOneOf {
    /**
     * 
     * @type {number}
     * @memberof GlobalmapSeasonsErrorErrorOneOf
     */
    code: GlobalmapSeasonsErrorErrorOneOfCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalmapSeasonsErrorErrorOneOf
     */
    message: GlobalmapSeasonsErrorErrorOneOfMessageEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalmapSeasonsErrorErrorOneOf
     */
    field: string | null;
    /**
     * 
     * @type {string}
     * @memberof GlobalmapSeasonsErrorErrorOneOf
     */
    value: string | null;
}

/**
* @export
* @enum {string}
*/
export enum GlobalmapSeasonsErrorErrorOneOfCodeEnum {
    NUMBER_404 = 404
}
/**
* @export
* @enum {string}
*/
export enum GlobalmapSeasonsErrorErrorOneOfMessageEnum {
    SeasonNotFound = 'SEASON_NOT_FOUND'
}


/**
 * Check if a given object implements the GlobalmapSeasonsErrorErrorOneOf interface.
 */
export function instanceOfGlobalmapSeasonsErrorErrorOneOf(value: object): value is GlobalmapSeasonsErrorErrorOneOf {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('field' in value) || value['field'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function GlobalmapSeasonsErrorErrorOneOfFromJSON(json: any): GlobalmapSeasonsErrorErrorOneOf {
    return GlobalmapSeasonsErrorErrorOneOfFromJSONTyped(json, false);
}

export function GlobalmapSeasonsErrorErrorOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalmapSeasonsErrorErrorOneOf {
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

export function GlobalmapSeasonsErrorErrorOneOfToJSON(json: any): GlobalmapSeasonsErrorErrorOneOf {
    return GlobalmapSeasonsErrorErrorOneOfToJSONTyped(json, false);
}

export function GlobalmapSeasonsErrorErrorOneOfToJSONTyped(value?: GlobalmapSeasonsErrorErrorOneOf | null, ignoreDiscriminator: boolean = false): any {
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

export const GlobalmapSeasonsErrorErrorOneOfPropertyValidationAttributesMap: {
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

