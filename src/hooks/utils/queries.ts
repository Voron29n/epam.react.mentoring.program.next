import { baseApiConfig } from 'utils';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type IFetchProps = {
  url: string;
  method?: HttpMethod;
  formData?: FormData | string;
  headers?: HeadersInit;
};

export const fetchReq = async ({
  url,
  method = HttpMethod.GET,
  formData,
  headers
}: IFetchProps): Promise<Response> => {
  const res = await fetch(url, {
    method,
    body: formData,
    headers
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return res;
};

enum SearchBy {
  GENRES = 'genres',
  TITLE = 'title'
}

export const generateMoviesUrl = (
  activeGenre: string,
  activeSortType: string,
  searchQuery: string
): URL => {
  const url = new URL(
    `${baseApiConfig._apiBase}movies?limit=${baseApiConfig._baseLimit}&offset=${baseApiConfig._baseOffset}`
  );
  if (activeSortType) {
    url.searchParams.append(baseApiConfig._searchParams.sortBy, activeSortType);
    url.searchParams.append(
      baseApiConfig._searchParams.sortOrder,
      baseApiConfig._baseSortOrder
    );
  }
  if (activeGenre) {
    url.searchParams.append(baseApiConfig._searchParams.filter, activeGenre);
  }
  if (searchQuery) {
    url.searchParams.append(
      baseApiConfig._searchParams.searchQuery,
      searchQuery
    );
    url.searchParams.append(
      baseApiConfig._searchParams.searchBy,
      SearchBy.TITLE
    );
  }
  return url;
};
