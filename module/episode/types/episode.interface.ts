export interface Episode {
  image: string | null;
  title: string;
  episodeNumber: number;
  id: number;
  overview: string;
  runtime: number | null;
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
