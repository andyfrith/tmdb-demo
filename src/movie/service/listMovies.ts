import { logger } from './../../logger';
import { ServiceFunction } from '../../lib/service';
import { Context } from '../../context';
import { discoverMovies } from '../../themoviedb/service';
import { Movie, SORT_DIR } from '../types';

export interface Input {
  sortDir?: SORT_DIR;
}

export interface Output {
  movies: Movie[];
}

export const listMovies: ServiceFunction<Context, Input, Output> = async (
  ctx: Context,
  input: Input
) => {
  const { sortDir } = input;
  const movies = (
    await discoverMovies({
      sortBy: 'popularity',
      direction: sortDir === SORT_DIR.ASC ? 'asc' : 'desc',
    })
  ).movies;
  logger.debug({ movies }, 'service - listMovies()');
  return { movies };
};
