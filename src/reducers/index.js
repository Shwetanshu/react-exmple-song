import {combineReducers} from 'redux';

//List of Songs
const songReducers = () => {
    return [
        {title: 'Humien tumse pyaar kitana', duration: '4:05'},
        {title: 'Ishq hai Suhana', duration: '3:55'},
        {title: 'Hum hai rahi pyaar ke', duration: '4:50'},
        {title: 'Hadd kar di aapne', duration: '2:37'},
    ]
}

//Selected Songs
const selectedSongReducers = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
};


export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducers
});