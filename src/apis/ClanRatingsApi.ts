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


import * as runtime from '../runtime.js';
import type {
  ClanratingsClansResponse,
  ClanratingsDatesResponse,
  ClanratingsNeighborsResponse,
  ClanratingsTopResponse,
  ClanratingsTypesResponse,
  GetClanratingsClansDateParameter,
} from '../models/index.js';
import {
    ClanratingsClansResponseFromJSON,
    ClanratingsClansResponseToJSON,
    ClanratingsDatesResponseFromJSON,
    ClanratingsDatesResponseToJSON,
    ClanratingsNeighborsResponseFromJSON,
    ClanratingsNeighborsResponseToJSON,
    ClanratingsTopResponseFromJSON,
    ClanratingsTopResponseToJSON,
    ClanratingsTypesResponseFromJSON,
    ClanratingsTypesResponseToJSON,
    GetClanratingsClansDateParameterFromJSON,
    GetClanratingsClansDateParameterToJSON,
} from '../models/index.js';

export interface GetClanratingsClansRequest {
    clan_id: Array<number>;
    date?: GetClanratingsClansDateParameter;
    fields?: Array<string>;
}

export interface GetClanratingsDatesRequest {
    limit?: number;
}

export interface GetClanratingsNeighborsRequest {
    clan_id: number;
    rank_field: string;
    date?: GetClanratingsClansDateParameter;
    fields?: Array<string>;
    limit?: number;
}

export interface GetClanratingsTopRequest {
    rank_field: string;
    date?: GetClanratingsClansDateParameter;
    fields?: Array<string>;
    limit?: number;
    page_no?: number;
}

/**
 * ClanRatingsApi - interface
 * 
 * @export
 * @interface ClanRatingsApiInterface
 */
export interface ClanRatingsApiInterface {
    /**
     * Method returns clan ratings by specified IDs.
     * @summary Clan ratings
     * @param {Array<number>} clan_id Clan IDs.
     * @param {GetClanratingsClansDateParameter} [date] Ratings calculation date. Date in UNIX timestamp or ISO 8601 format. E.g.: 1376542800 or 2013-08-15T00:00:00
     * @param {Array<string>} [fields] Response field. Embedded fields are separated with dots. To exclude a field, use “-” in front of its name. In case the parameter is not defined, the method returns all fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClanRatingsApiInterface
     */
    getClanratingsClansRaw(requestParameters: GetClanratingsClansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsClansResponse>>;

    /**
     * Method returns clan ratings by specified IDs.
     * Clan ratings
     */
    getClanratingsClans(requestParameters: GetClanratingsClansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsClansResponse>;

    /**
     * Method returns dates with available rating data.
     * @summary Dates with available ratings
     * @param {number} [limit] Number of returned entries.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClanRatingsApiInterface
     */
    getClanratingsDatesRaw(requestParameters: GetClanratingsDatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsDatesResponse>>;

    /**
     * Method returns dates with available rating data.
     * Dates with available ratings
     */
    getClanratingsDates(requestParameters: GetClanratingsDatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsDatesResponse>;

    /**
     * Method returns list of adjacent positions in specified clan rating.
     * @summary Adjacent positions in clan rating
     * @param {number} clan_id Clan ID
     * @param {string} rank_field Rating category
     * @param {GetClanratingsClansDateParameter} [date] Ratings calculation date. Date in UNIX timestamp or ISO 8601 format. E.g.: 1376542800 or 2013-08-15T00:00:00
     * @param {Array<string>} [fields] Response field. Embedded fields are separated with dots. To exclude a field, use “-” in front of its name. In case the parameter is not defined, the method returns all fields.
     * @param {number} [limit] Number of returned entries.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClanRatingsApiInterface
     */
    getClanratingsNeighborsRaw(requestParameters: GetClanratingsNeighborsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsNeighborsResponse>>;

    /**
     * Method returns list of adjacent positions in specified clan rating.
     * Adjacent positions in clan rating
     */
    getClanratingsNeighbors(requestParameters: GetClanratingsNeighborsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsNeighborsResponse>;

    /**
     * Method returns the list of top clans by specified parameters.
     * @summary Top Clans
     * @param {string} rank_field Rating category
     * @param {GetClanratingsClansDateParameter} [date] Ratings calculation date. Date in UNIX timestamp or ISO 8601 format. E.g.: 1376542800 or 2013-08-15T00:00:00
     * @param {Array<string>} [fields] Response field. Embedded fields are separated with dots. To exclude a field, use “-” in front of its name. In case the parameter is not defined, the method returns all fields.
     * @param {number} [limit] Number of returned entries.
     * @param {number} [page_no] Page number.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClanRatingsApiInterface
     */
    getClanratingsTopRaw(requestParameters: GetClanratingsTopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsTopResponse>>;

    /**
     * Method returns the list of top clans by specified parameters.
     * Top Clans
     */
    getClanratingsTop(requestParameters: GetClanratingsTopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsTopResponse>;

    /**
     * Method returns details on ratings types and categories.
     * @summary Types of ratings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClanRatingsApiInterface
     */
    getClanratingsTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsTypesResponse>>;

    /**
     * Method returns details on ratings types and categories.
     * Types of ratings
     */
    getClanratingsTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsTypesResponse>;

}

/**
 * 
 */
export class ClanRatingsApi extends runtime.BaseAPI implements ClanRatingsApiInterface {

    /**
     * Method returns clan ratings by specified IDs.
     * Clan ratings
     */
    async getClanratingsClansRaw(requestParameters: GetClanratingsClansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsClansResponse>> {
        if (requestParameters['clan_id'] == null) {
            throw new runtime.RequiredError(
                'clan_id',
                'Required parameter "clan_id" was null or undefined when calling getClanratingsClans().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['clan_id'] != null) {
            queryParameters['clan_id'] = requestParameters['clan_id']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['date'] != null) {
            queryParameters['date'] = requestParameters['date'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/clanratings/clans/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClanratingsClansResponseFromJSON(jsonValue));
    }

    /**
     * Method returns clan ratings by specified IDs.
     * Clan ratings
     */
    async getClanratingsClans(requestParameters: GetClanratingsClansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsClansResponse> {
        const response = await this.getClanratingsClansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Method returns dates with available rating data.
     * Dates with available ratings
     */
    async getClanratingsDatesRaw(requestParameters: GetClanratingsDatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsDatesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/clanratings/dates/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClanratingsDatesResponseFromJSON(jsonValue));
    }

    /**
     * Method returns dates with available rating data.
     * Dates with available ratings
     */
    async getClanratingsDates(requestParameters: GetClanratingsDatesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsDatesResponse> {
        const response = await this.getClanratingsDatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Method returns list of adjacent positions in specified clan rating.
     * Adjacent positions in clan rating
     */
    async getClanratingsNeighborsRaw(requestParameters: GetClanratingsNeighborsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsNeighborsResponse>> {
        if (requestParameters['clan_id'] == null) {
            throw new runtime.RequiredError(
                'clan_id',
                'Required parameter "clan_id" was null or undefined when calling getClanratingsNeighbors().'
            );
        }

        if (requestParameters['rank_field'] == null) {
            throw new runtime.RequiredError(
                'rank_field',
                'Required parameter "rank_field" was null or undefined when calling getClanratingsNeighbors().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['clan_id'] != null) {
            queryParameters['clan_id'] = requestParameters['clan_id'];
        }

        if (requestParameters['rank_field'] != null) {
            queryParameters['rank_field'] = requestParameters['rank_field'];
        }

        if (requestParameters['date'] != null) {
            queryParameters['date'] = requestParameters['date'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/clanratings/neighbors/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClanratingsNeighborsResponseFromJSON(jsonValue));
    }

    /**
     * Method returns list of adjacent positions in specified clan rating.
     * Adjacent positions in clan rating
     */
    async getClanratingsNeighbors(requestParameters: GetClanratingsNeighborsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsNeighborsResponse> {
        const response = await this.getClanratingsNeighborsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Method returns the list of top clans by specified parameters.
     * Top Clans
     */
    async getClanratingsTopRaw(requestParameters: GetClanratingsTopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsTopResponse>> {
        if (requestParameters['rank_field'] == null) {
            throw new runtime.RequiredError(
                'rank_field',
                'Required parameter "rank_field" was null or undefined when calling getClanratingsTop().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['rank_field'] != null) {
            queryParameters['rank_field'] = requestParameters['rank_field'];
        }

        if (requestParameters['date'] != null) {
            queryParameters['date'] = requestParameters['date'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['page_no'] != null) {
            queryParameters['page_no'] = requestParameters['page_no'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/clanratings/top/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClanratingsTopResponseFromJSON(jsonValue));
    }

    /**
     * Method returns the list of top clans by specified parameters.
     * Top Clans
     */
    async getClanratingsTop(requestParameters: GetClanratingsTopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsTopResponse> {
        const response = await this.getClanratingsTopRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Method returns details on ratings types and categories.
     * Types of ratings
     */
    async getClanratingsTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClanratingsTypesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/clanratings/types/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClanratingsTypesResponseFromJSON(jsonValue));
    }

    /**
     * Method returns details on ratings types and categories.
     * Types of ratings
     */
    async getClanratingsTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClanratingsTypesResponse> {
        const response = await this.getClanratingsTypesRaw(initOverrides);
        return await response.value();
    }

}
