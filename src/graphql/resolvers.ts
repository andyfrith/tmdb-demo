import { logger } from '../logger';
import MovieService from '../movie/service';
import { GraphqlContext } from './context';
import {
  DiscoverMoviesResponse,
  GetMovieResponse,
  Resolvers,
} from './generated/resolvers';
import { SORT_DIR } from '../movie/types';

export const resolvers: Resolvers<GraphqlContext> = {
  Movie: {
    id: ({ id }) => id,
    backdrop_path: ({ backdrop_path }) => backdrop_path,
    imdb_id: ({ imdb_id }) => imdb_id,
    title: ({ title }) => title,
  },
  Query: {
    getMovie: async (_, { input }, ctx) => {
      const { id } = input;
      const { movie } = await MovieService.getMovie(ctx, { id });
      logger.debug({ movie }, 'resolvers - getMovie()');
      return { movie } as GetMovieResponse;
    },
    discoverMovies: async (_, { input }, ctx) => {
      const sortDir = SORT_DIR[input.sortDir];
      const { movies } = await MovieService.listMovies(ctx, { sortDir });
      return { movies } as DiscoverMoviesResponse;
    },
    movies: async (_, __, ctx) => {
      const { movies } = await MovieService.listMovies(ctx, {});
      return movies;
    },
  },
};
