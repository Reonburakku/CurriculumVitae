import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: ':lang/home',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: 'es/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'es/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule],
})
export class AppRoutingModule { }
