import React, { useEffect } from 'react';

import SpotifyTopAlbums from './Components/SpotifyData/SpotifyTopArtists';

const SPACE_DELIM = "%20";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000"

const SCOPES = ["user-top-read"];
const SCOPES_URL = SCOPES.join(SPACE_DELIM);

const getSpotifyAuthReturn = (hash:string) => {
    const stringHashtag = hash.substring(1);
    const paramsInUrl = stringHashtag.split("&");
    // Fix that cast of 'any'
    const paramsSplit = paramsInUrl.reduce((accumulater:any, currentValue) => {
        const[key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});

    return paramsSplit;
}

const WebApp = () => {
    useEffect(() => {
        if(window.location.hash){
            const {access_token, expire_time, token_type} = getSpotifyAuthReturn(window.location.hash);
            console.log(access_token);
        
            localStorage.clear();
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("expire_time", expire_time);
            localStorage.setItem("tokenType", token_type);
        }

    })

    const handleLogin = () => {
        window.location.href = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL}&response_type=token&show_dialog=true`;
    }
    return(
        <div>
            <button onClick={handleLogin}>Spotify Login</button>
            <SpotifyTopAlbums></SpotifyTopAlbums>
        </div>
    );
}

export default WebApp;