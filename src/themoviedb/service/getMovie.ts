import axios from 'axios';
import { logger } from './../../logger';
import { ENV } from '../../env';
import { Movie } from '../types';

export interface Input {
  id: string;
}

export interface Output {
  movie: Movie;
}

export async function getMovie(input: Input): Promise<Output> {
  const { id } = input;
  try {
    const url: string = `${ENV.MOVIEDB_URL}/movie/${id}?api_key=${ENV.MOVIEDB_API_KEY}`;
    logger.debug({ url }, `themoviedb service - getMovie(${id})`);
    return await axios
      .get(url, {
        headers: {},
      })
      .then((res) => {
        return res.data;
      });
  } catch (err) {
    console.log(err);
  }
}
