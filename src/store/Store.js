import { configureStore } from '@reduxjs/toolkit';
import HamburgerSlice from './HamburgerSlice'
import homeVideos from './homeVideos';

const store= configureStore({
    reducer:{
        menubar: HamburgerSlice,
        videoData: homeVideos
    }
});

export default store; 