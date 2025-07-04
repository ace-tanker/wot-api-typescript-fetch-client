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
 * Personal Reserve image
 * @export
 * @interface EncyclopediaBoostersDataValueImages
 */
export interface EncyclopediaBoostersDataValueImages {
    /**
     * URL to large image
     * @type {string}
     * @memberof EncyclopediaBoostersDataValueImages
     */
    large: string;
    /**
     * URL to small image
     * @type {string}
     * @memberof EncyclopediaBoostersDataValueImages
     */
    small: string;
}

/**
 * Check if a given object implements the EncyclopediaBoostersDataValueImages interface.
 */
export function instanceOfEncyclopediaBoostersDataValueImages(value: object): value is EncyclopediaBoostersDataValueImages {
    if (!('large' in value) || value['large'] === undefined) return false;
    if (!('small' in value) || value['small'] === undefined) return false;
    return true;
}

export function EncyclopediaBoostersDataValueImagesFromJSON(json: any): EncyclopediaBoostersDataValueImages {
    return EncyclopediaBoostersDataValueImagesFromJSONTyped(json, false);
}

export function EncyclopediaBoostersDataValueImagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncyclopediaBoostersDataValueImages {
    if (json == null) {
        return json;
    }
    return {
        
        'large': json['large'],
        'small': json['small'],
    };
}

export function EncyclopediaBoostersDataValueImagesToJSON(json: any): EncyclopediaBoostersDataValueImages {
    return EncyclopediaBoostersDataValueImagesToJSONTyped(json, false);
}

export function EncyclopediaBoostersDataValueImagesToJSONTyped(value?: EncyclopediaBoostersDataValueImages | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'large': value['large'],
        'small': value['small'],
    };
}

export const EncyclopediaBoostersDataValueImagesPropertyValidationAttributesMap: {
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

