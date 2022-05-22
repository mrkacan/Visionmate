import * as userTypes from './types';

export const getUsersSelector = ({ users }: {
    users: userTypes.UsersState,
}) => ({
  data: users.data,
  isLoading: users.isLoading,
  error: users.error,
});

export const getUserSelector = (id?: string, isRandom?: boolean) => ({ users }: {
    users: userTypes.UsersState,
}) => {
  if (isRandom) {
    return users.data[Math.floor(Math.random() * 6)];
  }
  return users.data.find((item) => item.id.value === id);
};
