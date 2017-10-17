import { post } from './api';
export class ProClient {
    constructor(email, password) {
        this.apiToken = "none";
        this.user = null;
        post('/login', {
            email: email,
            password: password,
            source: 'api'
        }).then((res) => {
            this.apiToken = res.data.token;
            this.user = res.data.user;
            console.log("Logged in user:", this.user.name);
        }, (err) => {
            console.error("ERROR INSTANTIATING CLIENT:", err.error.message || "Unknown");
        });
    }
}
