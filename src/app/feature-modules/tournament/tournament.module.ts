import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './pages/create/create.component';
import { AllComponent } from './pages/all/all.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    SharedModule
  ]
})
export class TournamentModule { }
