export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING';

export function updateIsLoading( isLoading ) {
    return {
        type: UPDATE_IS_LOADING,
        isLoading: isLoading
    };
}