export default class AuthResponse {

    public email: string;
    public token: string;
    
    constructor(data: any) {
        this.email = data.email;
        this.token = data.token;
    }
}