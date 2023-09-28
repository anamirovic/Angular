
export interface User{
    id: number;
    profilePicture: string;
    username: string;
    email: string;
    password: string;
    role: Role;
};

export interface RegisterUser{
    username: string;
    email: string;
    password: string;
};

export interface LoginUser {
    user: User,
    accessToken: string
}

export enum Role {
    User = 'user',
    Admin = 'admin',
  }