export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING';

export function updateIsLoading( isLoading ) {
    return {
        action: UPDATE_IS_LOADING,
        isLoading: isLoading
    };
}