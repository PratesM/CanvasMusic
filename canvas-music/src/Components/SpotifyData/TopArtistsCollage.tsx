import React, { useState } from 'react';

import TopArtists from "../../Interfaces/topArtists.interfaces";

interface Props {
    artistsData: TopArtists | undefined,
}

const TopArtistsCollage: React.FC<Props> = ({artistsData}) => {
    const [collageNumber, setCollageNumber] = useState(9);

    // TODO
    // Implement the dynamic canvas collage.
    return(
        <div>
            <img src={artistsData?.items[1].images[2].url}></img>
        </div>

    );
}

export default TopArtistsCollage;