export interface Data {
    [key: string]: any;
}

export interface AWS4AuthHeader {
    credentialScopeRaw?: string;
    credentialScope?: {
        accessKeyId: string;
        dateStamp: string;
        region: string;
        service: string;
        action: string;
    };
    signedHeadersRaw?: string;
    signedHeaders?: string[];
    signature?: string;
}

export interface WaitForOptions {
    context: any;
    prop: any;
    requiredValue?: any;
    iterationsInterval?: number;
    maxIterations?: number;
}
