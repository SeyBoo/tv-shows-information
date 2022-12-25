export interface Member {
  job: string;
  id: number;
  name: string;
  image: string | null;
  character?: string;
}

export interface Episode {
  image: string | null;
  title: string;
  episodeNumber: number;
  id: number;
  overview: string;
  runtime: number | null;
  crew: Member[];
  guest_stars: Member[];
}

export interface FetchEpisodesProps {
  movieId: number;
  seasonNumber: number;
}

export interface FetchEpisodeProps {
  movieId: number;
  seasonNumber: number;
  episodeNumber: number;
}
