import * as Actions from './action';

const initialState = {
    loading: false,
    chirps: [
        {
            id: 0,
            user_id: '1',
            name: 'Tessa Brown',
            username: 'tessssa_b',
            timestamp: '2 hours ago',
            isFollowing: false,
            text: 'Saw these beautiful bluejays outside my house this morning. So cute!',
            photos: [
                '1.jpg',
                '2.jpg',
                '3.jpg'
            ],
            likes: '2,721',
            comments: '130'
        },
        
        {
            id: 1,
            user_id: '2',
            name: 'Jim Maple',
            username: 'thisisjim',
            timestamp: '8 hours',
            isFollowing: false,
            text: `Although field notes and nature journals do overlap, they sometimes serve different purposes. The goal of keeping field notes is usually to document key points
            of your bird observations for the purposes of identification, data collection, or other purposes.`,
            photos: [],
            likes: '490',
            comments: '22'
        },
        {
            id: 2,
            user_id: '2',
            name: 'Jim Maple',
            username: 'thisisjim',
            timestamp: '8 hours ago',
            isFollowing: true,
            text: 'Saw these beautiful bluejays outside my house this morning. So cute!',
            photos: [],
            likes: '15',
            comments: '79'
        },
        {
            id: 3,
            user_id: '3',
            name: 'Franz',
            username: 'Franz_9191',
            timestamp: '2 hours',
            isFollowing: false,
            text: 'Que alguien me diga que animal es este. Pensé que era un pato, veanle las patas. Mi mama tiene un zoologico en su casa. Se lo voy a llevar a ella.',
            photos: [
                '4.jpg'
            ],
            likes: '2,242,419',
            comments: '12,412'
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