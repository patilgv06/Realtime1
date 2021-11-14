import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ComponentComponent } from './Components/component/component.component';
import { TablesComponent } from './Components/tables/tables.component';
import { AboutComponent } from './Components/about/about.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComponentComponent,
    TablesComponent,
    AboutComponent,
    SettingsComponent,
    SignupComponent,
    LoginComponent,
    FormsComponent,

  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
