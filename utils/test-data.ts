import users from '../test-data/users.json';

export function getValidUser() {
  const timestamp = Date.now();

  return {
    ...users,
    email: `rahul${timestamp}@test.com`
  };
}