export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // Remove after finished developing...
    token: 'BQCbVpxdzqXdYPbG0dXVKg-cv1Xa2H139lvoGxMWdeSiW2gPnBZTH3-M9T02aUTa_cVCXHFLUvic56xtVjBr2C2kcfslKFGy28FqO7s3HmP1o3X_4tmomYmJTawhC8yUb7B0FxiQB7ayQuM8e96WBH1dfqbyvCFmKPgNbYrCOrG2hTma'
};


const reducer = (state, action) => {
    console.log(action);


    // Action -> type, [payload]


    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
}


export default reducer;
