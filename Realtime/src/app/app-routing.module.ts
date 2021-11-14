import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ComponentComponent } from './Components/component/component.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { TablesComponent } from './Components/tables/tables.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'component', component: ComponentComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'tables', component: TablesComponent },
{path:'forms',component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
