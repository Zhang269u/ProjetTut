export class SignInData{
    private email: string;
    private psw: string;

    constructor(email: string, psw: string){
        this.email = email;
        this.psw = psw;
    }

    getEmail(): string{
    return this.email;
    }
    getPsw(): string{
        return this.psw;
    }
}
