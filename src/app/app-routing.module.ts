import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./feature-modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "tournament",
    loadChildren: () => import("./feature-modules/tournament/tournament.module").then(m => m.TournamentModule)
  },
  {
    path: "**",
    redirectTo: "/auth"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
