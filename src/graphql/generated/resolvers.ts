import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DiscoverMoviesRequest = {
  sortDir: Sort_Dir;
};

export type DiscoverMoviesResponse = {
   __typename?: 'DiscoverMoviesResponse';
  movies?: Maybe<Array<Maybe<Movie>>>;
};

export type GetMovieRequest = {
  id: Scalars['Int'];
};

export type GetMovieResponse = {
   __typename?: 'GetMovieResponse';
  movie?: Maybe<Movie>;
};

export type Movie = {
   __typename?: 'Movie';
  id: Scalars['Int'];
  backdrop_path?: Maybe<Scalars['String']>;
  imdb_id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  discoverMovies: DiscoverMoviesResponse;
  getMovie: GetMovieResponse;
  movies?: Maybe<Array<Maybe<Movie>>>;
};


export type QueryDiscoverMoviesArgs = {
  input: DiscoverMoviesRequest;
};


export type QueryGetMovieArgs = {
  input: GetMovieRequest;
};

export enum Sort_Dir {
  Asc = 'ASC',
  Desc = 'DESC'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  DiscoverMoviesRequest: DiscoverMoviesRequest,
  SORT_DIR: Sort_Dir,
  DiscoverMoviesResponse: ResolverTypeWrapper<DiscoverMoviesResponse>,
  Movie: ResolverTypeWrapper<Movie>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  GetMovieRequest: GetMovieRequest,
  GetMovieResponse: ResolverTypeWrapper<GetMovieResponse>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  DiscoverMoviesRequest: DiscoverMoviesRequest,
  SORT_DIR: Sort_Dir,
  DiscoverMoviesResponse: DiscoverMoviesResponse,
  Movie: Movie,
  Int: Scalars['Int'],
  String: Scalars['String'],
  GetMovieRequest: GetMovieRequest,
  GetMovieResponse: GetMovieResponse,
  Boolean: Scalars['Boolean'],
};

export type DiscoverMoviesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscoverMoviesResponse'] = ResolversParentTypes['DiscoverMoviesResponse']> = {
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetMovieResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetMovieResponse'] = ResolversParentTypes['GetMovieResponse']> = {
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  backdrop_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  imdb_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  discoverMovies?: Resolver<ResolversTypes['DiscoverMoviesResponse'], ParentType, ContextType, RequireFields<QueryDiscoverMoviesArgs, 'input'>>,
  getMovie?: Resolver<ResolversTypes['GetMovieResponse'], ParentType, ContextType, RequireFields<QueryGetMovieArgs, 'input'>>,
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  DiscoverMoviesResponse?: DiscoverMoviesResponseResolvers<ContextType>,
  GetMovieResponse?: GetMovieResponseResolvers<ContextType>,
  Movie?: MovieResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
