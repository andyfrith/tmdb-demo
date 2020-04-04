import { logger } from './../../logger';
import { ServiceFunction } from '../../lib/service';
import { Context } from '../../context';
import { getMovie as themoviedbGetMovie } from '../../themoviedb/service';
import { Movie } from '../types';

export interface Input {
  id: number;
}

export interface Output {
  movie: Movie;
}

export const getMovie: ServiceFunction<Context, Input, Output> = async (
  ctx: Context,
  input: Input
) => {
  const { id } = input;
  const data = await themoviedbGetMovie({ id: String(id) });

  const movie = {
    id: data.movie.id,
    backdrop_path: data.movie.backdrop_path,
    imdb_id: data.movie.imdb_id,
    title: data.movie.title,
  } as Movie;
  logger.debug({ movie }, `service - getMovie(${id})`);
  return { movie };
};
