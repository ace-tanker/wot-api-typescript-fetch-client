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
import type { EncyclopediaModulesDataValueDefaultProfileEngine } from './EncyclopediaModulesDataValueDefaultProfileEngine.js';
import {
    EncyclopediaModulesDataValueDefaultProfileEngineFromJSON,
    EncyclopediaModulesDataValueDefaultProfileEngineFromJSONTyped,
    EncyclopediaModulesDataValueDefaultProfileEngineToJSON,
    EncyclopediaModulesDataValueDefaultProfileEngineToJSONTyped,
} from './EncyclopediaModulesDataValueDefaultProfileEngine.js';
import type { EncyclopediaModulesDataValueDefaultProfileTurret } from './EncyclopediaModulesDataValueDefaultProfileTurret.js';
import {
    EncyclopediaModulesDataValueDefaultProfileTurretFromJSON,
    EncyclopediaModulesDataValueDefaultProfileTurretFromJSONTyped,
    EncyclopediaModulesDataValueDefaultProfileTurretToJSON,
    EncyclopediaModulesDataValueDefaultProfileTurretToJSONTyped,
} from './EncyclopediaModulesDataValueDefaultProfileTurret.js';
import type { EncyclopediaModulesDataValueDefaultProfileSuspension } from './EncyclopediaModulesDataValueDefaultProfileSuspension.js';
import {
    EncyclopediaModulesDataValueDefaultProfileSuspensionFromJSON,
    EncyclopediaModulesDataValueDefaultProfileSuspensionFromJSONTyped,
    EncyclopediaModulesDataValueDefaultProfileSuspensionToJSON,
    EncyclopediaModulesDataValueDefaultProfileSuspensionToJSONTyped,
} from './EncyclopediaModulesDataValueDefaultProfileSuspension.js';
import type { EncyclopediaModulesDataValueDefaultProfileGun } from './EncyclopediaModulesDataValueDefaultProfileGun.js';
import {
    EncyclopediaModulesDataValueDefaultProfileGunFromJSON,
    EncyclopediaModulesDataValueDefaultProfileGunFromJSONTyped,
    EncyclopediaModulesDataValueDefaultProfileGunToJSON,
    EncyclopediaModulesDataValueDefaultProfileGunToJSONTyped,
} from './EncyclopediaModulesDataValueDefaultProfileGun.js';
import type { EncyclopediaModulesDataValueDefaultProfileRadio } from './EncyclopediaModulesDataValueDefaultProfileRadio.js';
import {
    EncyclopediaModulesDataValueDefaultProfileRadioFromJSON,
    EncyclopediaModulesDataValueDefaultProfileRadioFromJSONTyped,
    EncyclopediaModulesDataValueDefaultProfileRadioToJSON,
    EncyclopediaModulesDataValueDefaultProfileRadioToJSONTyped,
} from './EncyclopediaModulesDataValueDefaultProfileRadio.js';

/**
 * Basic technical characteristics of module.
 * @export
 * @interface EncyclopediaModulesDataValueDefaultProfile
 */
export interface EncyclopediaModulesDataValueDefaultProfile {
    /**
     * 
     * @type {EncyclopediaModulesDataValueDefaultProfileGun}
     * @memberof EncyclopediaModulesDataValueDefaultProfile
     */
    gun: EncyclopediaModulesDataValueDefaultProfileGun;
    /**
     * 
     * @type {EncyclopediaModulesDataValueDefaultProfileEngine}
     * @memberof EncyclopediaModulesDataValueDefaultProfile
     */
    engine: EncyclopediaModulesDataValueDefaultProfileEngine;
    /**
     * 
     * @type {EncyclopediaModulesDataValueDefaultProfileTurret}
     * @memberof EncyclopediaModulesDataValueDefaultProfile
     */
    turret: EncyclopediaModulesDataValueDefaultProfileTurret;
    /**
     * 
     * @type {EncyclopediaModulesDataValueDefaultProfileSuspension}
     * @memberof EncyclopediaModulesDataValueDefaultProfile
     */
    suspension: EncyclopediaModulesDataValueDefaultProfileSuspension;
    /**
     * 
     * @type {EncyclopediaModulesDataValueDefaultProfileRadio}
     * @memberof EncyclopediaModulesDataValueDefaultProfile
     */
    radio: EncyclopediaModulesDataValueDefaultProfileRadio;
}

/**
 * Check if a given object implements the EncyclopediaModulesDataValueDefaultProfile interface.
 */
export function instanceOfEncyclopediaModulesDataValueDefaultProfile(value: object): value is EncyclopediaModulesDataValueDefaultProfile {
    if (!('gun' in value) || value['gun'] === undefined) return false;
    if (!('engine' in value) || value['engine'] === undefined) return false;
    if (!('turret' in value) || value['turret'] === undefined) return false;
    if (!('suspension' in value) || value['suspension'] === undefined) return false;
    if (!('radio' in value) || value['radio'] === undefined) return false;
    return true;
}

export function EncyclopediaModulesDataValueDefaultProfileFromJSON(json: any): EncyclopediaModulesDataValueDefaultProfile {
    return EncyclopediaModulesDataValueDefaultProfileFromJSONTyped(json, false);
}

export function EncyclopediaModulesDataValueDefaultProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncyclopediaModulesDataValueDefaultProfile {
    if (json == null) {
        return json;
    }
    return {
        
        'gun': EncyclopediaModulesDataValueDefaultProfileGunFromJSON(json['gun']),
        'engine': EncyclopediaModulesDataValueDefaultProfileEngineFromJSON(json['engine']),
        'turret': EncyclopediaModulesDataValueDefaultProfileTurretFromJSON(json['turret']),
        'suspension': EncyclopediaModulesDataValueDefaultProfileSuspensionFromJSON(json['suspension']),
        'radio': EncyclopediaModulesDataValueDefaultProfileRadioFromJSON(json['radio']),
    };
}

export function EncyclopediaModulesDataValueDefaultProfileToJSON(json: any): EncyclopediaModulesDataValueDefaultProfile {
    return EncyclopediaModulesDataValueDefaultProfileToJSONTyped(json, false);
}

export function EncyclopediaModulesDataValueDefaultProfileToJSONTyped(value?: EncyclopediaModulesDataValueDefaultProfile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gun': EncyclopediaModulesDataValueDefaultProfileGunToJSON(value['gun']),
        'engine': EncyclopediaModulesDataValueDefaultProfileEngineToJSON(value['engine']),
        'turret': EncyclopediaModulesDataValueDefaultProfileTurretToJSON(value['turret']),
        'suspension': EncyclopediaModulesDataValueDefaultProfileSuspensionToJSON(value['suspension']),
        'radio': EncyclopediaModulesDataValueDefaultProfileRadioToJSON(value['radio']),
    };
}

export const EncyclopediaModulesDataValueDefaultProfilePropertyValidationAttributesMap: {
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

