export interface IUserProfile {
    email: string;
    is_active: boolean;
    is_superuser: boolean;
    full_name: string;
    id: number;
}

export interface IUserProfileUpdate {
    email?: string;
    full_name?: string;
    password?: string;
    is_active?: boolean;
    is_superuser?: boolean;
}

export interface IUserProfileCreate {
    email: string;
    full_name?: string;
    password?: string;
    is_active?: boolean;
    is_superuser?: boolean;
}

export interface Comment {
    content: string;
    date: string;
}

export interface ICommentCreate {
   userId: number;
   content: string;
   createdAt: string;
}

export interface ICommentUpdate {
    userId: number;
    content: string;
    updateAt: string;
}

export interface ICommentDelete {
    commentId: number;
    comment: string;
}

export interface UserError {
    loginError: string;
    registrationError: string;
    tokenError: string;
}


export interface Login {
   username: string;
   password: string;
}

export interface Register {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    phonenumber: number;
    address: string;
}

export interface LoginResponse {

}

export interface LoginError {

}

export interface IPasswordRecovery {
    email: string;
}

export interface IResetPassword {
    password: string;
    token: string
}


