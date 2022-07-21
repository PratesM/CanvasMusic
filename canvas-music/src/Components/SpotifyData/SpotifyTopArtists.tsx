import React, {useEffect, useState} from "react";
import axios from "axios";

const ALBUM_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";

const SpotifyTopArtists = () => {
    const [token, setToken] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            let tempToken = localStorage.getItem('access_token');

            if(tempToken != null){
                setToken(tempToken);                
            }

        }
    }, [])

    const handleGetTopAlbums = () => {
        axios.get(ALBUM_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(response => {
            setData(response.data);
            console.log(data);
        }).catch((error) => {
            console.log(error);
            console.log("Token: " + token);
        })
    }

    return(
        <button onClick={handleGetTopAlbums}>Get Top Artists</button>
    );
}

export default SpotifyTopArtists;