import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './components/list/list.component';
import { SetTokenComponent } from './components/set-token/set-token.component';

const routes: Routes = [
  { path: '', redirectTo: '/show', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'set-token', component: SetTokenComponent },
  { path: 'show', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
