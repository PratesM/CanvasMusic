import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import axios from "axios";

import TopArtists from "../../Interfaces/topArtists.interfaces";

import TopArtistsCollage from './TopArtistsCollage';


const ALBUM_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";

const SpotifyTopArtists = () => {
    const [token, setToken] = useState('');
    const [data, setData] = useState<TopArtists>();
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            let tempToken = localStorage.getItem('access_token');

            if(tempToken != null){
                setToken(tempToken);                
            }

        }
    }, [])

    useEffect(() => {
        if (data != undefined){
            console.log(data);
            setLoadingData(false);
        }
    }, [data])

    const handleGetTopAlbums = () => {
        axios.get(ALBUM_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(response => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
            console.log("Token: " + token);
        })
    }

    if (loadingData == true){
        return(
        <Button onClick={handleGetTopAlbums} variant="outlined">Get Top Artists</Button>
        );    
    } else {
        return(
            <TopArtistsCollage artistsData={data}/>
        );    
    }

}

export default SpotifyTopArtists;