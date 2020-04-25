export default class AuthForm {

    private email: string;
    private password: string;
    
    constructor(data: any) {
        this.email = data.email;
        this.password = data.password;
    }
}