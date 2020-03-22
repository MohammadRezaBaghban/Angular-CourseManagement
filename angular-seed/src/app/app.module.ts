import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { RoleComponent } from './Components/role/role.component';
import { UsersComponent } from './Components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProfileDetailComponent } from './Components/profile/profile-detail/profile-detail.component';
import { RoleDetailComponent } from './Components/role/role-detail/role-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RoleComponent,
    UsersComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileDetailComponent,
    RoleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
