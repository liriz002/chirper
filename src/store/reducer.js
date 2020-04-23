import * as Actions from './action';

const initialState = {
    loading: false,
    chirps: [
        {
            user_id: '1',
            name: 'Tessa Brown',
            username: 'tessssa_b',
            timestamp: '2 hours ago',
            isFollowing: false,
            text: 'Saw these beautiful bluejays outside my house this morning. So cute!',
            pictures: [
                
            ],
            likes: '2,721',
            comments: '130'
        },
    ]
};

const globalProps = ( state = initialState, action ) => {
    switch( action.type ) {
        case Actions.UPDATE_IS_LOADING:
            console.log('is loading reducer');
            return { ...state, isLoading: action.isLoading };
        default:
            return state;
    }
};

export default globalProps;