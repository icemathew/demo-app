export interface User {
  login: string;
  pass: string;
}

export const UserInitialState: User = {
  login: null,
  pass: null
};
