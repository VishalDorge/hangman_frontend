import { Injectable } from '@angular/core';
import { ICredentials, IUser, UserResponse, localStorageDataType } from './auth.types';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  populateLocalStorage = (data: localStorageDataType) => {
    for(let key in data){
      localStorage.setItem(key, data[key])
    }
  }

  register = (userData: IUser) => this.httpService.post<UserResponse>(userData, "/auth/register-player");

  login = (loginCredentials: ICredentials) => this.httpService.post<UserResponse>(loginCredentials, "/auth/login");

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }
}
