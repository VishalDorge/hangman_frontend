import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  baseUrl: string;
  token: string;
  constructor() {
    this.baseUrl = "http://localhost:3000";
    this.token = localStorage.getItem("token") as string;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    
    const requiredHeaders = new HttpHeaders()
    .set("Content-type", "application/json")
    .set("authorization",  `Bearer ${this.token}`);
    
    request = request.clone({
      url: this.baseUrl + request.url,
      body: JSON.stringify(request.body),
      headers: requiredHeaders
    })

    console.log(request.url);
    return next.handle(request);
  }
}
