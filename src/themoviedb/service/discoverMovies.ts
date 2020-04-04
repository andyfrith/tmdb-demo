import axios from 'axios';
import { logger } from './../../logger';
import { ENV } from '../../env';
import { Movie } from '../types';

export interface Input {
  sortBy: string;
  direction: string;
}

export interface Output {
  movies: Movie[];
}

export async function discoverMovies(input: Input): Promise<Output> {
  const { sortBy, direction } = input;

  try {
    const url: string = `${ENV.MOVIEDB_URL}/discover/movie?sort_by=${sortBy}.${direction}&api_key=${ENV.MOVIEDB_API_KEY}`;
    logger.debug({ url }, `themoviedb service - discoverMovies()`);
    return await axios
      .get(url, {
        headers: {},
      })
      .then((res) => {
        return { movies: res.data && res.data['results'] };
      });
  } catch (err) {
    console.log(err);
  }
}
