import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly TOKEN_KEY = 'auth_token';
    login(email: string, password: string): boolean {
        if (email === 'admin@test.com' && password === '123456') {
            localStorage.setItem(this.TOKEN_KEY, 'usuario autenticado');
            return true;
        }
        return false;
    }
    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }
    isAuthenticated(): boolean {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem(this.TOKEN_KEY) !== null;
        }
        return false;
    }
}
