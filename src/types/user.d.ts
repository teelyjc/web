export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Users = User[];

export type UserSignUpRequest = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type UserSignInRequest = {
  email: string;
  password: string;
};
