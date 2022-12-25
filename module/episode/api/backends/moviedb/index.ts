import { EpisodesBackend } from "..";
import { getFromApi } from "../../../../../common/api/config";
import {
  Episode,
  FetchEpisodeProps,
  FetchEpisodesProps,
  Member,
} from "../../../types/episode.interface";
import {
  CrewMember,
  EpisodeApiResponse,
  EpisodesApiResponse,
  Guest,
} from "./schema";

export default class MovieDBEpisodesBackend implements EpisodesBackend {
  async formatCrew(crew: CrewMember[]): Promise<Member[]> {
    const imagePathUrl = "http://image.tmdb.org/t/p/w500";

    const formatedCrew: Member[] = await Promise.all(
      crew.map((member) => ({
        job: member.job,
        id: member.id,
        image: member.profile_path ? imagePathUrl + member.profile_path : null,
        name: member.name,
      }))
    );

    return formatedCrew;
  }

  async formatedGuest(guests: Guest[]): Promise<Member[]> {
    const imagePathUrl = "http://image.tmdb.org/t/p/w500";

    const formatedGuests: Member[] = await Promise.all(
      guests.map((guest) => ({
        job: "Actor",
        id: guest.id,
        image: guest.profile_path ? imagePathUrl + guest.profile_path : null,
        name: guest.name,
        character: guest.character,
      }))
    );

    return formatedGuests;
  }

  async formatSeason(episode: EpisodeApiResponse): Promise<Episode> {
    const imagePathUrl = "http://image.tmdb.org/t/p/w500";

    return {
      id: episode.id,
      image: episode.still_path ? imagePathUrl + episode.still_path : null,
      title: episode.name,
      episodeNumber: episode.episode_number,
      overview: episode.overview,
      runtime: episode.runtime,
      crew: await this.formatCrew(episode.crew),
      guest_stars: await this.formatedGuest(episode.guest_stars),
    };
  }

  async fetchEpisodes({
    movieId,
    seasonNumber,
  }: FetchEpisodesProps): Promise<Episode[]> {
    const data: EpisodesApiResponse = await getFromApi(
      `tv/${movieId}/season/${seasonNumber}`
    );

    const formatedSeasons: Episode[] = await Promise.all(
      data.episodes.map((episode) => this.formatSeason(episode))
    );

    return formatedSeasons;
  }

  async fetchEpisode({
    episodeNumber,
    movieId,
    seasonNumber,
  }: FetchEpisodeProps): Promise<Episode> {
    const data: EpisodeApiResponse = await getFromApi(
      `tv/${movieId}/season/${seasonNumber}/episode/${episodeNumber}`
    );

    const formatedEpisode: Episode = await this.formatSeason(data);

    return formatedEpisode;
  }
}
