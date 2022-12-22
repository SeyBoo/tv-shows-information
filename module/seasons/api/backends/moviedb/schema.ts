interface CreateBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Network {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

interface Compagnies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface SeasonReponse {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface MovieDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  created_by: CreateBy[];
  episode_run_time: [];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  name: string;
  next_episode_to_air: Episode | null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Compagnies[];
  production_countries: ProductionCountries[];
  seasons: SeasonReponse[];
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
