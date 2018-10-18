import * as crypto from 'crypto-js';
var AWS4 = (function () {
    function AWS4() {
    }
    AWS4.parseAuthorizationHeader = function (authorizationHeader) {
        var authHeader = {};
        if (authorizationHeader.startsWith(AWS4.algorithm + " ")) {
            var headerPartsRaw = authorizationHeader.split(AWS4.algorithm + " ")[1].split(', ');
            for (var _i = 0, headerPartsRaw_1 = headerPartsRaw; _i < headerPartsRaw_1.length; _i++) {
                var headerPartRaw = headerPartsRaw_1[_i];
                var headerPart = headerPartRaw.split('=');
                if (headerPart.length !== 2) {
                    continue;
                }
                switch (headerPart[0]) {
                    case 'Credential':
                        authHeader.credentialScopeRaw = headerPart[1];
                        var credentialScope = headerPart[1].split('/');
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
    };
    AWS4.createAuthorizationHeader = function (accessKeyId, regionName, serviceName, signedHeaders, body) {
        var date = new Date();
        var dateStamp = AWS4.dateToDateStamp(date);
        var stringToSign = AWS4.getStringToSign(AWS4.dateToAmzDate(date), body, accessKeyId, dateStamp, regionName, serviceName);
        var signatureKey = AWS4.getSignatureKey(accessKeyId, dateStamp, regionName, serviceName);
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
    };
    AWS4.dateToDateStamp = function (date) {
        return date.toISOString().slice(0, 10).replace(/-/g, '');
    };
    AWS4.dateToAmzDate = function (date) {
        return date.toISOString().slice(0, 19).replace(/-/g, '').replace(/:/g, '') + 'Z';
    };
    AWS4.getAmzDate = function (arg) {
        if (arg instanceof Date) {
            return AWS4.dateToAmzDate(arg);
        }
        else if (typeof arg === 'object') {
            return (arg['x-amz-date'] || '');
        }
        else {
            return AWS4.dateToAmzDate(new Date());
        }
    };
    AWS4.validateAuthorizationHeader = function (authorizationHeader, xAmzDate, body, accessKeyId, regionName) {
        var authHeader = AWS4.parseAuthorizationHeader(authorizationHeader);
        if (authHeader.credentialScope) {
            var stringToSign = AWS4.getStringToSign(xAmzDate, body, accessKeyId, authHeader.credentialScope.dateStamp, regionName, authHeader.credentialScope.service);
            var signatureKey = AWS4.getSignatureKey(accessKeyId, authHeader.credentialScope.dateStamp, regionName, authHeader.credentialScope.service);
            var signature = AWS4.getSignature(stringToSign, signatureKey);
            return signature === authHeader.signature;
        }
        return false;
    };
    AWS4.getSignature = function (stringToSign, signatureKey) {
        return crypto.HmacSHA256(stringToSign, signatureKey).toString(crypto.enc.Hex);
    };
    AWS4.getBodyHash = function (body) {
        return crypto.SHA256(body).toString(crypto.enc.Hex).toLowerCase();
    };
    AWS4.getStringToSign = function (xAmzDate, body, accessKeyId, dateStamp, regionName, serviceName) {
        return AWS4.algorithm + '\n'
            + xAmzDate + '\n'
            + accessKeyId + '/'
            + dateStamp + '/'
            + regionName + '/'
            + serviceName + '/'
            + AWS4.actionName + '\n'
            + AWS4.getBodyHash(body);
    };
    AWS4.getSignatureKey = function (key, dateStamp, regionName, serviceName) {
        var dateKey = crypto.HmacSHA256(dateStamp, "AWS4" + key);
        var regionKey = crypto.HmacSHA256(regionName, dateKey);
        var serviceKey = crypto.HmacSHA256(serviceName, regionKey);
        return crypto.HmacSHA256(AWS4.actionName, serviceKey).toString();
    };
    AWS4.algorithm = 'AWS4-HMAC-SHA256';
    AWS4.actionName = 'aws4_request';
    return AWS4;
}());
export { AWS4 };
//# sourceMappingURL=aws4.js.map