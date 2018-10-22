export const getErrorMessage = (error: any): string => {
    return error ? error.message || error : 'An unexpected error occurred';
};
