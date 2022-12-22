export interface Episode {
  image: string;
  title: string;
  episodeNumber: number;
  id: number;
  overview: string | null;
  runtime: number;
}

export interface FetchEpisodesProps {
  movieId: number;
  seasonNumber: number;
}
