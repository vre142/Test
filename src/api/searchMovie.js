import {get} from './api';


export function movieSearch(title){
    return get('',{
        t : title,
        
    })
}