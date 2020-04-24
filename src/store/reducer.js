import * as Actions from './action';

const initialState = {
    loading: false,
    chirps: [
        {
            id: 0,
            user_id: '1',
            name: 'Tessa Brown',
            username: 'tessssa_b',
            timestamp: '2 minutes',
            isFollowing: false,
            text: 'I captured a couple of beauts this morning doing their thing. Enjoy!',
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
            timestamp: '20 minutes',
            isFollowing: false,
            text: 'If wanting another bird in the house is wrong, then I don\'t want to be right.',
            photos: [],
            likes: '490',
            comments: '22'
        },
        {
            id: 2,
            user_id: '2',
            name: 'Jim Maple',
            username: 'thisisjim',
            timestamp: '1 hour',
            isFollowing: true,
            text: 'Looking for recommendations for bird feeders that are affordable and that will work well in my yard. Please leave your suggestions!',
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
            text: 'Looking like straight out of a Pixar movie, I present you a Mandarin duck.',
            photos: [
                '4.jpg'
            ],
            likes: '2,242,419',
            comments: '12,412'
        },
        {
            id: 4,
            user_id: '2',
            name: 'Jim Maple',
            username: 'thisisjim',
            timestamp: '4 hours',
            isFollowing: false,
            text: 'What\'s your favorite bird and why?',
            photos: [],
            likes: '17',
            comments: '130'
        },
        {
            id: 5,
            user_id: '5',
            name: 'Rachel Johnstone',
            username: 'rachyrabbit',
            timestamp: '8 hours',
            isFollowing: false,
            text: `Although field notes and nature journals do overlap, they sometimes serve different purposes. The goal of keeping field notes is usually to document key points of your bird observations for the purpose of identification, data collection, or other purposes.
            Size, distinctive markings, habitual movements, unusual postures, voice and flight behavior (all of which are critical in credibly documentary bird sightings) are typically...`,
            photos: [],
            likes: '58',
            comments: '4'
        },
        {
            id: 6,
            user_id: '4',
            name: 'Ricky',
            username: 'rick_hanz',
            timestamp: '2 days',
            isFollowing: false,
            text: 'Love bird watching because of these sweet views. Saw some great birds too today. Anyone else?',
            photos: [
                '5.jpg'
            ],
            likes: '185',
            comments: '18'
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