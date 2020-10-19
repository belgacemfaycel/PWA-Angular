export interface LoginResponse {
    accessToken: string;
    id: string;
    fullName: string;
    birthday: Date;
    email: string;
    password: string;
    isActive: boolean;
}
