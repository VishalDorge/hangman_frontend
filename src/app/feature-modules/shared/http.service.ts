import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  post<T>(data: any, endpoint: string){
    return this.http.post<T>(endpoint, data)
  }

  get<T>(endpoint: string){
    return this.http.get<T>(endpoint);
  }
}
