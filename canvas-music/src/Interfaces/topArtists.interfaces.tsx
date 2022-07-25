export default interface TopArtists {
    items: Array<Artist>;
}

interface Artist {
    genres: Array<string>,
    images: Array<Images>,
    name: string,
    popularity: number,
    type: string
}

interface Images {
    height: number,
    url: string,
}

