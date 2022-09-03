import { emptySplitApi as api } from "./setup";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginApiResponse, LoginApiArg>({
      query: (queryArg) => ({
        url: `/users/login`,
        method: "POST",
        body: queryArg.loginUserRequest,
      }),
    }),
    createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.newUserRequest,
      }),
    }),
    getCurrentUser: build.query<
      GetCurrentUserApiResponse,
      GetCurrentUserApiArg
    >({
      query: () => ({ url: `/user` }),
    }),
    updateCurrentUser: build.mutation<
      UpdateCurrentUserApiResponse,
      UpdateCurrentUserApiArg
    >({
      query: (queryArg) => ({
        url: `/user`,
        method: "PUT",
        body: queryArg.updateUserRequest,
      }),
    }),
    getProfileByUsername: build.query<
      GetProfileByUsernameApiResponse,
      GetProfileByUsernameApiArg
    >({
      query: (queryArg) => ({ url: `/profiles/${queryArg.username}` }),
    }),
    followUserByUsername: build.mutation<
      FollowUserByUsernameApiResponse,
      FollowUserByUsernameApiArg
    >({
      query: (queryArg) => ({
        url: `/profiles/${queryArg.username}/follow`,
        method: "POST",
      }),
    }),
    unfollowUserByUsername: build.mutation<
      UnfollowUserByUsernameApiResponse,
      UnfollowUserByUsernameApiArg
    >({
      query: (queryArg) => ({
        url: `/profiles/${queryArg.username}/follow`,
        method: "DELETE",
      }),
    }),
    getArticlesFeed: build.query<
      GetArticlesFeedApiResponse,
      GetArticlesFeedApiArg
    >({
      query: (queryArg) => ({
        url: `/articles/feed`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    getArticles: build.query<GetArticlesApiResponse, GetArticlesApiArg>({
      query: (queryArg) => ({
        url: `/articles`,
        params: {
          tag: queryArg.tag,
          author: queryArg.author,
          favorited: queryArg.favorited,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    createArticle: build.mutation<
      CreateArticleApiResponse,
      CreateArticleApiArg
    >({
      query: (queryArg) => ({
        url: `/articles`,
        method: "POST",
        body: queryArg.newArticleRequest,
      }),
    }),
    getArticle: build.query<GetArticleApiResponse, GetArticleApiArg>({
      query: (queryArg) => ({ url: `/articles/${queryArg.slug}` }),
    }),
    updateArticle: build.mutation<
      UpdateArticleApiResponse,
      UpdateArticleApiArg
    >({
      query: (queryArg) => ({
        url: `/articles/${queryArg.slug}`,
        method: "PUT",
        body: queryArg.updateArticleRequest,
      }),
    }),
    deleteArticle: build.mutation<
      DeleteArticleApiResponse,
      DeleteArticleApiArg
    >({
      query: (queryArg) => ({
        url: `/articles/${queryArg.slug}`,
        method: "DELETE",
      }),
    }),
    getArticleComments: build.query<
      GetArticleCommentsApiResponse,
      GetArticleCommentsApiArg
    >({
      query: (queryArg) => ({ url: `/articles/${queryArg.slug}/comments` }),
    }),
    createArticleComment: build.mutation<
      CreateArticleCommentApiResponse,
      CreateArticleCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/articles/${queryArg.slug}/comments`,
        method: "POST",
        body: queryArg.newCommentRequest,
      }),
    }),
    deleteArticleComment: build.mutation<
      DeleteArticleCommentApiResponse,
      DeleteArticleCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/articles/${queryArg.slug}/comments/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    createArticleFavorite: build.mutation<
      CreateArticleFavoriteApiResponse,
      CreateArticleFavoriteApiArg
    >({
      query: (queryArg) => ({
        url: `/articles/${queryArg.slug}/favorite`,
        method: "POST",
      }),
    }),
    deleteArticleFavorite: build.mutation<
      DeleteArticleFavoriteApiResponse,
      DeleteArticleFavoriteApiArg
    >({
      query: (queryArg) => ({
        url: `/articles/${queryArg.slug}/favorite`,
        method: "DELETE",
      }),
    }),
    getTags: build.query<GetTagsApiResponse, GetTagsApiArg>({
      query: () => ({ url: `/tags` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type LoginApiResponse = /** status 200 OK */ UserResponse;
export type LoginApiArg = {
  /** Credentials to use */
  loginUserRequest: LoginUserRequest;
};
export type CreateUserApiResponse = /** status 201 OK */ UserResponse;
export type CreateUserApiArg = {
  /** Details of the new user to register */
  newUserRequest: NewUserRequest;
};
export type GetCurrentUserApiResponse = /** status 200 OK */ UserResponse;
export type GetCurrentUserApiArg = void;
export type UpdateCurrentUserApiResponse = /** status 200 OK */ UserResponse;
export type UpdateCurrentUserApiArg = {
  /** User details to update. At least **one** field is required. */
  updateUserRequest: UpdateUserRequest;
};
export type GetProfileByUsernameApiResponse =
  /** status 200 OK */ ProfileResponse;
export type GetProfileByUsernameApiArg = {
  /** Username of the profile to get */
  username: string;
};
export type FollowUserByUsernameApiResponse =
  /** status 200 OK */ ProfileResponse;
export type FollowUserByUsernameApiArg = {
  /** Username of the profile you want to follow */
  username: string;
};
export type UnfollowUserByUsernameApiResponse =
  /** status 200 OK */ ProfileResponse;
export type UnfollowUserByUsernameApiArg = {
  /** Username of the profile you want to unfollow */
  username: string;
};
export type GetArticlesFeedApiResponse =
  /** status 200 OK */ MultipleArticlesResponse;
export type GetArticlesFeedApiArg = {
  /** Limit number of articles returned (default is 20) */
  limit?: number;
  /** Offset/skip number of articles (default is 0) */
  offset?: number;
};
export type GetArticlesApiResponse =
  /** status 200 OK */ MultipleArticlesResponse;
export type GetArticlesApiArg = {
  /** Filter by tag */
  tag?: string;
  /** Filter by author (username) */
  author?: string;
  /** Filter by favorites of a user (username) */
  favorited?: string;
  /** Limit number of articles returned (default is 20) */
  limit?: number;
  /** Offset/skip number of articles (default is 0) */
  offset?: number;
};
export type CreateArticleApiResponse =
  /** status 201 OK */ SingleArticleResponse;
export type CreateArticleApiArg = {
  /** Article to create */
  newArticleRequest: NewArticleRequest;
};
export type GetArticleApiResponse = /** status 200 OK */ SingleArticleResponse;
export type GetArticleApiArg = {
  /** Slug of the article to get */
  slug: string;
};
export type UpdateArticleApiResponse =
  /** status 200 OK */ SingleArticleResponse;
export type UpdateArticleApiArg = {
  /** Slug of the article to update */
  slug: string;
  /** Article to update */
  updateArticleRequest: UpdateArticleRequest;
};
export type DeleteArticleApiResponse = /** status 200 OK */ string;
export type DeleteArticleApiArg = {
  /** Slug of the article to delete */
  slug: string;
};
export type GetArticleCommentsApiResponse =
  /** status 200 OK */ MultipleCommentsResponse;
export type GetArticleCommentsApiArg = {
  /** Slug of the article that you want to get comments for */
  slug: string;
};
export type CreateArticleCommentApiResponse =
  /** status 200 OK */ SingleCommentResponse;
export type CreateArticleCommentApiArg = {
  /** Slug of the article that you want to create a comment for */
  slug: string;
  /** Comment you want to create */
  newCommentRequest: NewCommentRequest;
};
export type DeleteArticleCommentApiResponse = /** status 200 OK */ string;
export type DeleteArticleCommentApiArg = {
  /** Slug of the article that you want to delete a comment for */
  slug: string;
  /** ID of the comment you want to delete */
  id: number;
};
export type CreateArticleFavoriteApiResponse =
  /** status 200 OK */ SingleArticleResponse;
export type CreateArticleFavoriteApiArg = {
  /** Slug of the article that you want to favorite */
  slug: string;
};
export type DeleteArticleFavoriteApiResponse =
  /** status 200 OK */ SingleArticleResponse;
export type DeleteArticleFavoriteApiArg = {
  /** Slug of the article that you want to unfavorite */
  slug: string;
};
export type GetTagsApiResponse = /** status 200 OK */ TagsResponse;
export type GetTagsApiArg = void;
export type User = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
};
export type UserResponse = {
  user: User;
};
export type GenericErrorModel = {
  errors: {
    body: string[];
  };
};
export type LoginUser = {
  email: string;
  password: string;
};
export type LoginUserRequest = {
  user: LoginUser;
};
export type NewUser = {
  username: string;
  email: string;
  password: string;
};
export type NewUserRequest = {
  user: NewUser;
};
export type UpdateUser = {
  email?: string;
  token?: string;
  username?: string;
  bio?: string;
  image?: string;
};
export type UpdateUserRequest = {
  user: UpdateUser;
};
export type Profile = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};
export type ProfileResponse = {
  profile: Profile;
};
export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
};
export type MultipleArticlesResponse = {
  articles: Article[];
  articlesCount: number;
};
export type SingleArticleResponse = {
  article: Article;
};
export type NewArticle = {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
};
export type NewArticleRequest = {
  article: NewArticle;
};
export type UpdateArticle = {
  title?: string;
  description?: string;
  body?: string;
};
export type UpdateArticleRequest = {
  article: UpdateArticle;
};
export type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
};
export type MultipleCommentsResponse = {
  comments: Comment[];
};
export type SingleCommentResponse = {
  comment: Comment;
};
export type NewComment = {
  body: string;
};
export type NewCommentRequest = {
  comment: NewComment;
};
export type TagsResponse = {
  tags: string[];
};
export const {
  useLoginMutation,
  useCreateUserMutation,
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
  useGetProfileByUsernameQuery,
  useFollowUserByUsernameMutation,
  useUnfollowUserByUsernameMutation,
  useGetArticlesFeedQuery,
  useGetArticlesQuery,
  useCreateArticleMutation,
  useGetArticleQuery,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useGetArticleCommentsQuery,
  useCreateArticleCommentMutation,
  useDeleteArticleCommentMutation,
  useCreateArticleFavoriteMutation,
  useDeleteArticleFavoriteMutation,
  useGetTagsQuery,
} = injectedRtkApi;
