import {combineReducers} from 'redux'
import posts from './posts'
export default combineReducers({
    posts : posts //Considering both key and value r same we can also write it only as posts
})