import { ArtistModel } from "./artist.model";

export interface TrackModel {
    _id: string | number,
    name: string,
    album: string,
    cover: string,
    artist?: ArtistModel,
    url: string
}