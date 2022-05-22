export const GET_USERS_API = () => {
  // TODO: Use from env file
  const REQUEST_URL = 'https://randomuser.me/api/';

  return fetch(`${REQUEST_URL}?results=200`).then((response) => response.json());
};

export type GetUsersApiRequest = {
    limit: number;
    skip: number;
}
