export interface WaitForOptions {
    context: any;
    prop: any;
    requiredValue?: any;
    iterationsInterval?: number;
    maxIterations?: number;
}
export declare const waitFor: (options: WaitForOptions) => Promise<null>;
