import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../tournament.service';
import { ITournament, TournamentResponse } from '../../tournament.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit{

  tournamentList: ITournament[] = [];
  sortOrder: string = "asc";
  constructor(private tournamentService: TournamentService){}

  ngOnInit(): void {
    const observable = this.tournamentService.get("/tournament")
    this.fetchData(observable);
    console.log(this.tournamentList);
  }

  fetchData = (observable: Observable<TournamentResponse>) => {
    observable.subscribe(response => {
      if(response.data) this.tournamentList = response.data;
    }, (error: any) => console.log("Unable to fetch tournaments"));
  }

  getSortedBy = (field: string) => {
    const observable = this.tournamentService.get(`/tournament?sortBy=${field}&sortOrder=${this.sortOrder}`);
    this.sortOrder = "desc";
    this.fetchData(observable);
    console.log(this.tournamentList)
  }

}
