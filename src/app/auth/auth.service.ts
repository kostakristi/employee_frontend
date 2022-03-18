import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResData, loginModel, signupModel, User } from "./auth.model";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    api_url: string = 'http://localhost:8000/';
    user = new BehaviorSubject<User>(null);
    constructor(private http: HttpClient, private router: Router) { }

    signup(account: signupModel) {
        return this.http.post<AuthResData>(this.api_url + 'signup/', account).pipe(catchError(this.handleError), tap((res) => {
            console.log(res);
        }))
    }
    login(account: loginModel) {
        return this.http.post<AuthResData>(this.api_url + 'login/', account).pipe(catchError(this.handleError), tap((res) => {
            this.handleAuth(res);
        }))
    }
    autoLogin() {
        const userData: AuthResData = JSON.parse(localStorage.getItem('user'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(userData.user_id, userData.email, userData.username, userData.name, userData.token);
        this.user.next(loadedUser);
        return;
    }
    logout() {
        this.user.next(null);
        localStorage.removeItem('user');
        this.router.navigate(['/auth'])
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured';
        if (!error.error) {
            throwError(errorMessage);
        }
        if (error.error.non_field_errors) {
            errorMessage = error.error.non_field_errors[0]
        }
        if (error.error.email) {
            errorMessage = error.error.email[0]
        }
        if (error.error.username) {
            errorMessage = error.error.username[0]
        }
        return throwError(errorMessage);
    }

    private handleAuth(res: AuthResData) {
        const user = new User(res.user_id, res.email, res.username, res.name, res.token);
        this.user.next(user);
        localStorage.setItem('user', JSON.stringify(user));
    }
}