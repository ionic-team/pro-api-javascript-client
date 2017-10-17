import { ApiResponse, post } from './api';

export interface ProUser {
  email: string;
  id: number;
  name: string;
  orgs: any;
  teams: any;
}

export class ProClient {
  apiToken: string = "none";
  user: ProUser = null;

  constructor(email: string, password: string) {
    post('/login', {
      email: email,
      password: password,
      source: 'api'
    }).then((res: ApiResponse) => {
      this.apiToken = res.data.token;
      this.user = res.data.user;
      console.log("Logged in user:", this.user.name);
    }, (err: ApiResponse) => {
      console.error("ERROR INSTANTIATING CLIENT:", err.error.message || "Unknown");
    })
  }
}