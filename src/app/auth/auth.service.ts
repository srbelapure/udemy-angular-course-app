import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

//these fields can be obatined from documentation firebase
export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    kind: string;
    registered?: boolean; // for login request
}

@Injectable({
    providedIn: 'root'
})
/**
 * Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning
 * 
 * 
 * I was getting this error, so go to preferences->settings->experimentalDecoratoes-> tick the checkbox and save
 */
export class AuthService {

    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer:any;

    constructor(private http: HttpClient,
        private router:Router) { }

    signUp(email: string, password: string) {
        //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] --> here API KEY is firebase API KEY
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6Kvfr7IBIZQ_htIwiDOVnJoZsUeYl4gs',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(responseData => {
                this.handleAuthentication(
                    responseData.email,
                    responseData.localId,
                    responseData.idToken,
                    +responseData.expiresIn
                )
            })
        )
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6Kvfr7IBIZQ_htIwiDOVnJoZsUeYl4gs',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(responseData => {
                this.handleAuthentication(
                    responseData.email,
                    responseData.localId,
                    responseData.idToken,
                    +responseData.expiresIn
                )
            })
        )
    }

    autoLogin(){
        const userData:{
            email:string;
            id:string;
            _token:string;
            _tokenExpirationDate:string
        } = JSON.parse(localStorage.getItem('userData'))
        if(!userData){
            return;
        }

        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate))

        if(loadedUser.token){
            this.user.next(loadedUser)
            const expirationDuration =
            new Date(userData._tokenExpirationDate).getTime() - 
            new Date().getTime();

            this.autoLogout(expirationDuration)
        }
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth'])
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer)
        }
        this.tokenExpirationTimer= null;
    }

    autoLogout(expirationDuration:number){
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout()
        }, expirationDuration);
    }

    private handleAuthentication(
        email: string,
        userId: string,
        token: string,
        expiresIn: number
    ) {
        const expirationDate = new Date(
            new Date().getTime() + +expiresIn * 1000
        )
        const user = new User(
            email,
            userId,
            token,
            expirationDate
        )
        this.user.next(user)
        this.autoLogout(expiresIn*1000)
        localStorage.setItem('userData',JSON.stringify(user))

    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured'
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage)
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = "This email exists already"
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is incorrect'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = "This email does not exist"
                break;
        }
        return throwError(errorMessage)
    }
}