"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Avatar SDK
 * Heygen Streaming Avatar
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@heygen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSessionRequestToJSON = exports.NewSessionRequestFromJSONTyped = exports.NewSessionRequestFromJSON = exports.instanceOfNewSessionRequest = exports.NewSessionRequestQualityEnum = void 0;
var NewSessionRequestVoice_1 = require("./NewSessionRequestVoice");
/**
 * @export
 */
exports.NewSessionRequestQualityEnum = {
    Low: 'low',
    Medium: 'medium',
    High: 'high'
};
/**
 * Check if a given object implements the NewSessionRequest interface.
 */
function instanceOfNewSessionRequest(value) {
    return true;
}
exports.instanceOfNewSessionRequest = instanceOfNewSessionRequest;
function NewSessionRequestFromJSON(json) {
    return NewSessionRequestFromJSONTyped(json, false);
}
exports.NewSessionRequestFromJSON = NewSessionRequestFromJSON;
function NewSessionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'quality': json['quality'] == null ? undefined : json['quality'],
        'avatarName': json['avatar_name'] == null ? undefined : json['avatar_name'],
        'voice': json['voice'] == null ? undefined : (0, NewSessionRequestVoice_1.NewSessionRequestVoiceFromJSON)(json['voice']),
    };
}
exports.NewSessionRequestFromJSONTyped = NewSessionRequestFromJSONTyped;
function NewSessionRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'quality': value['quality'],
        'avatar_name': value['avatarName'],
        'voice': (0, NewSessionRequestVoice_1.NewSessionRequestVoiceToJSON)(value['voice']),
    };
}
exports.NewSessionRequestToJSON = NewSessionRequestToJSON;
