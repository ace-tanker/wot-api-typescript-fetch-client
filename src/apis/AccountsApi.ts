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
  AccountAchievementsResponse,
  AccountInfoResponse,
  AccountListResponse,
  AccountTanksResponse,
} from '../models/index.js';
import {
    AccountAchievementsResponseFromJSON,
    AccountAchievementsResponseToJSON,
    AccountInfoResponseFromJSON,
    AccountInfoResponseToJSON,
    AccountListResponseFromJSON,
    AccountListResponseToJSON,
    AccountTanksResponseFromJSON,
    AccountTanksResponseToJSON,
} from '../models/index.js';

export interface GetAccountAchievementsRequest {
    account_id: Array<number>;
    fields?: Array<string>;
}

export interface GetAccountInfoRequest {
    account_id: Array<number>;
    access_token?: string;
    extra?: Array<GetAccountInfoExtraEnum>;
    fields?: Array<string>;
}

export interface GetAccountListRequest {
    search: string;
    fields?: Array<string>;
    limit?: number;
    type?: GetAccountListTypeEnum;
}

export interface GetAccountTanksRequest {
    account_id: Array<number>;
    access_token?: string;
    fields?: Array<string>;
    tank_id?: Array<number>;
}

/**
 * AccountsApi - interface
 * 
 * @export
 * @interface AccountsApiInterface
 */
export interface AccountsApiInterface {
    /**
     * Method returns players\' achievement details.  Achievement properties define the **achievements** field values:   * 1-4 for Mastery Badges and Stage Achievements (type: \"class\");  * maximum value of Achievement series (type: \"series\");  * number of achievements earned from sections: Battle Hero, Epic Achievements, Group Achievements, Special Achievements, etc. (type: \"repeatable, single, custom\"). 
     * @summary Player\'s achievements
     * @param {Array<number>} account_id Player account ID.
     * @param {Array<string>} [fields] Response field. Embedded fields are separated with dots. To exclude a field, use “-” in front of its name. In case the parameter is not defined, the method returns all fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getAccountAchievementsRaw(requestParameters: GetAccountAchievementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountAchievementsResponse>>;

    /**
     * Method returns players\' achievement details.  Achievement properties define the **achievements** field values:   * 1-4 for Mastery Badges and Stage Achievements (type: \"class\");  * maximum value of Achievement series (type: \"series\");  * number of achievements earned from sections: Battle Hero, Epic Achievements, Group Achievements, Special Achievements, etc. (type: \"repeatable, single, custom\"). 
     * Player\'s achievements
     */
    getAccountAchievements(requestParameters: GetAccountAchievementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountAchievementsResponse>;

    /**
     * Method returns player details.
     * @summary Player personal data
     * @param {Array<number>} account_id Player account ID.
     * @param {string} [access_token] [Access token](https://developers.wargaming.net/documentation/guide/principles/#access_token) for the private data of a user\&#39;s account; can be received via the authorization method; valid within a stated time period
     * @param {Array<'private.boosters' | 'private.garage' | 'private.grouped_contacts' | 'private.personal_missions' | 'private.rented' | 'statistics.epic' | 'statistics.fallout' | 'statistics.globalmap_absolute' | 'statistics.globalmap_champion' | 'statistics.globalmap_middle' | 'statistics.random' | 'statistics.ranked_10x10' | 'statistics.ranked_15x15' | 'statistics.ranked_battles' | 'statistics.ranked_battles_current' | 'statistics.ranked_battles_previous' | 'statistics.ranked_season_1' | 'statistics.ranked_season_2' | 'statistics.ranked_season_3'>} [extra] Extra fields that will be added to the response.
     * @param {Array<string>} [fields] Response field. Embedded fields are separated with dots. To exclude a field, use “-” in front of its name. In case the parameter is not defined, the method returns all fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getAccountInfoRaw(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountInfoResponse>>;

    /**
     * Method returns player details.
     * Player personal data
     */
    getAccountInfo(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountInfoResponse>;

    /**
     * Method returns partial list of players. The list is filtered by initial characters of user name and sorted alphabetically.
     * @summary Players
     * @param {string} search Player name search string. Parameter \&quot;type\&quot; defines minimum length and type of search. Using the exact search type, you can enter several names, separated with commas. Maximum length: 24.
     * @param {Array<string>} [fields] Response field. Embedded fields are separated with dots. To exclude a field, use “-” in front of its name. In case the parameter is not defined, the method returns all fields.
     * @param {number} [limit] Number of returned entries.
     * @param {'startswith' | 'exact'} [type] Search type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getAccountListRaw(requestParameters: GetAccountListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountListResponse>>;

    /**
     * Method returns partial list of players. The list is filtered by initial characters of user name and sorted alphabetically.
     * Players
     */
    getAccountList(requestParameters: GetAccountListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountListResponse>;

    /**
     * Method returns details on player\'s vehicles.
     * @summary Player\'s vehicles
     * @param {Array<number>} account_id Player account ID.
     * @param {string} [access_token] [Access token](https://developers.wargaming.net/documentation/guide/principles/#access_token) for the private data of a user\&#39;s account; can be received via the authorization method; valid within a stated time period
     * @param {Array<string>} [fields] Response field. Embedded fields are separated with dots. To exclude a field, use “-” in front of its name. In case the parameter is not defined, the method returns all fields.
     * @param {Array<number>} [tank_id] Player\&#39;s vehicle ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getAccountTanksRaw(requestParameters: GetAccountTanksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountTanksResponse>>;

    /**
     * Method returns details on player\'s vehicles.
     * Player\'s vehicles
     */
    getAccountTanks(requestParameters: GetAccountTanksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountTanksResponse>;

}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI implements AccountsApiInterface {

    /**
     * Method returns players\' achievement details.  Achievement properties define the **achievements** field values:   * 1-4 for Mastery Badges and Stage Achievements (type: \"class\");  * maximum value of Achievement series (type: \"series\");  * number of achievements earned from sections: Battle Hero, Epic Achievements, Group Achievements, Special Achievements, etc. (type: \"repeatable, single, custom\"). 
     * Player\'s achievements
     */
    async getAccountAchievementsRaw(requestParameters: GetAccountAchievementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountAchievementsResponse>> {
        if (requestParameters['account_id'] == null) {
            throw new runtime.RequiredError(
                'account_id',
                'Required parameter "account_id" was null or undefined when calling getAccountAchievements().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['account_id'] != null) {
            queryParameters['account_id'] = requestParameters['account_id']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/account/achievements/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountAchievementsResponseFromJSON(jsonValue));
    }

    /**
     * Method returns players\' achievement details.  Achievement properties define the **achievements** field values:   * 1-4 for Mastery Badges and Stage Achievements (type: \"class\");  * maximum value of Achievement series (type: \"series\");  * number of achievements earned from sections: Battle Hero, Epic Achievements, Group Achievements, Special Achievements, etc. (type: \"repeatable, single, custom\"). 
     * Player\'s achievements
     */
    async getAccountAchievements(requestParameters: GetAccountAchievementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountAchievementsResponse> {
        const response = await this.getAccountAchievementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Method returns player details.
     * Player personal data
     */
    async getAccountInfoRaw(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountInfoResponse>> {
        if (requestParameters['account_id'] == null) {
            throw new runtime.RequiredError(
                'account_id',
                'Required parameter "account_id" was null or undefined when calling getAccountInfo().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['account_id'] != null) {
            queryParameters['account_id'] = requestParameters['account_id']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['access_token'] != null) {
            queryParameters['access_token'] = requestParameters['access_token'];
        }

        if (requestParameters['extra'] != null) {
            queryParameters['extra'] = requestParameters['extra']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/account/info/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountInfoResponseFromJSON(jsonValue));
    }

    /**
     * Method returns player details.
     * Player personal data
     */
    async getAccountInfo(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountInfoResponse> {
        const response = await this.getAccountInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Method returns partial list of players. The list is filtered by initial characters of user name and sorted alphabetically.
     * Players
     */
    async getAccountListRaw(requestParameters: GetAccountListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountListResponse>> {
        if (requestParameters['search'] == null) {
            throw new runtime.RequiredError(
                'search',
                'Required parameter "search" was null or undefined when calling getAccountList().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/account/list/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountListResponseFromJSON(jsonValue));
    }

    /**
     * Method returns partial list of players. The list is filtered by initial characters of user name and sorted alphabetically.
     * Players
     */
    async getAccountList(requestParameters: GetAccountListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountListResponse> {
        const response = await this.getAccountListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Method returns details on player\'s vehicles.
     * Player\'s vehicles
     */
    async getAccountTanksRaw(requestParameters: GetAccountTanksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountTanksResponse>> {
        if (requestParameters['account_id'] == null) {
            throw new runtime.RequiredError(
                'account_id',
                'Required parameter "account_id" was null or undefined when calling getAccountTanks().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['account_id'] != null) {
            queryParameters['account_id'] = requestParameters['account_id']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['access_token'] != null) {
            queryParameters['access_token'] = requestParameters['access_token'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['tank_id'] != null) {
            queryParameters['tank_id'] = requestParameters['tank_id']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["application_id"] = await this.configuration.apiKey("application_id"); // application_id authentication
        }


        let urlPath = `/account/tanks/`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountTanksResponseFromJSON(jsonValue));
    }

    /**
     * Method returns details on player\'s vehicles.
     * Player\'s vehicles
     */
    async getAccountTanks(requestParameters: GetAccountTanksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountTanksResponse> {
        const response = await this.getAccountTanksRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
  * @export
  * @enum {string}
  */
export enum GetAccountInfoExtraEnum {
    PrivateBoosters = 'private.boosters',
    PrivateGarage = 'private.garage',
    PrivateGroupedContacts = 'private.grouped_contacts',
    PrivatePersonalMissions = 'private.personal_missions',
    PrivateRented = 'private.rented',
    StatisticsEpic = 'statistics.epic',
    StatisticsFallout = 'statistics.fallout',
    StatisticsGlobalmapAbsolute = 'statistics.globalmap_absolute',
    StatisticsGlobalmapChampion = 'statistics.globalmap_champion',
    StatisticsGlobalmapMiddle = 'statistics.globalmap_middle',
    StatisticsRandom = 'statistics.random',
    StatisticsRanked10x10 = 'statistics.ranked_10x10',
    StatisticsRanked15x15 = 'statistics.ranked_15x15',
    StatisticsRankedBattles = 'statistics.ranked_battles',
    StatisticsRankedBattlesCurrent = 'statistics.ranked_battles_current',
    StatisticsRankedBattlesPrevious = 'statistics.ranked_battles_previous',
    StatisticsRankedSeason1 = 'statistics.ranked_season_1',
    StatisticsRankedSeason2 = 'statistics.ranked_season_2',
    StatisticsRankedSeason3 = 'statistics.ranked_season_3'
}
/**
  * @export
  * @enum {string}
  */
export enum GetAccountListTypeEnum {
    Startswith = 'startswith',
    Exact = 'exact'
}
