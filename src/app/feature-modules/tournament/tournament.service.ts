import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { TournamentResponse } from './tournament.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private httpService: HttpService, private http: HttpClient) {}

  get = (endpoint: string) => this.httpService.get<TournamentResponse>(endpoint);
}
