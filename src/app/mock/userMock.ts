export interface User {
  email: string;
  password: string;
}

export const userMock: User[] = [
  { email: "john@gmail.com", password: "123" },
  { email: "doe@gmail.com", password: "456" },
];
