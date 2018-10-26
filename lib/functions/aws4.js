"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto-js");
class AWS4 {
    static parseAuthorizationHeader(authorizationHeader) {
        const authHeader = {};
        if (authorizationHeader.startsWith(`${AWS4.algorithm} `)) {
            const headerPartsRaw = authorizationHeader.split(`${AWS4.algorithm} `)[1].split(', ');
            for (const headerPartRaw of headerPartsRaw) {
                const headerPart = headerPartRaw.split('=');
                if (headerPart.length !== 2) {
                    continue;
                }
                switch (headerPart[0]) {
                    case 'Credential':
                        authHeader.credentialScopeRaw = headerPart[1];
                        const credentialScope = headerPart[1].split('/');
                        if (credentialScope.length !== 5) {
                            break;
                        }
                        authHeader.credentialScope = {
                            accessKeyId: credentialScope[0],
                            dateStamp: credentialScope[1],
                            region: credentialScope[2],
                            service: credentialScope[3],
                            action: credentialScope[4],
                        };
                        break;
                    case 'SignedHeaders':
                        authHeader.signedHeadersRaw = headerPart[1];
                        authHeader.signedHeaders = headerPart[1].split(';');
                        break;
                    case 'Signature':
                        authHeader.signature = headerPart[1];
                }
            }
        }
        return authHeader;
    }
    static createAuthorizationHeader(accessKeyId, regionName, serviceName, signedHeaders, body, date) {
        const dateStamp = AWS4.dateToDateStamp(date);
        const stringToSign = AWS4.getStringToSign(AWS4.dateToAmzDate(date), body, accessKeyId, dateStamp, regionName, serviceName);
        const signatureKey = AWS4.getSignatureKey(accessKeyId, dateStamp, regionName, serviceName);
        return AWS4.algorithm + ' '
            + 'Credential='
            + accessKeyId + '/'
            + dateStamp + '/'
            + regionName + '/'
            + serviceName + '/'
            + AWS4.actionName + ', '
            + 'SignedHeaders='
            + signedHeaders + ', '
            + 'Signature='
            + AWS4.getSignature(stringToSign, signatureKey);
    }
    static dateToDateStamp(date) {
        return date.toISOString().slice(0, 10).replace(/-/g, '');
    }
    static dateToAmzDate(date) {
        return date.toISOString().slice(0, 19).replace(/-/g, '').replace(/:/g, '') + 'Z';
    }
    static getAmzDate(arg) {
        if (arg instanceof Date) {
            return AWS4.dateToAmzDate(arg);
        }
        else if (typeof arg === 'object') {
            return (arg['x-amz-date'] || '');
        }
        else {
            return AWS4.dateToAmzDate(new Date());
        }
    }
    static validateAuthorizationHeader(authorizationHeader, xAmzDate, body, accessKeyId, regionName) {
        const authHeader = AWS4.parseAuthorizationHeader(authorizationHeader);
        if (authHeader.credentialScope) {
            const stringToSign = AWS4.getStringToSign(xAmzDate, body, accessKeyId, authHeader.credentialScope.dateStamp, regionName, authHeader.credentialScope.service);
            const signatureKey = AWS4.getSignatureKey(accessKeyId, authHeader.credentialScope.dateStamp, regionName, authHeader.credentialScope.service);
            const signature = AWS4.getSignature(stringToSign, signatureKey);
            return signature === authHeader.signature;
        }
        return false;
    }
    static getSignature(stringToSign, signatureKey) {
        return crypto.HmacSHA256(stringToSign, signatureKey).toString(crypto.enc.Hex);
    }
    static getBodyHash(body) {
        return crypto.SHA256(body).toString(crypto.enc.Hex).toLowerCase();
    }
    static getStringToSign(xAmzDate, body, accessKeyId, dateStamp, regionName, serviceName) {
        return AWS4.algorithm + '\n'
            + xAmzDate + '\n'
            + accessKeyId + '/'
            + dateStamp + '/'
            + regionName + '/'
            + serviceName + '/'
            + AWS4.actionName + '\n'
            + AWS4.getBodyHash(body);
    }
    static getSignatureKey(key, dateStamp, regionName, serviceName) {
        const dateKey = crypto.HmacSHA256(dateStamp, `AWS4${key}`);
        const regionKey = crypto.HmacSHA256(regionName, dateKey);
        const serviceKey = crypto.HmacSHA256(serviceName, regionKey);
        return crypto.HmacSHA256(AWS4.actionName, serviceKey).toString();
    }
}
AWS4.algorithm = 'AWS4-HMAC-SHA256';
AWS4.actionName = 'aws4_request';
exports.AWS4 = AWS4;
//# sourceMappingURL=aws4.js.map