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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RoleComponent,
    UsersComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileDetailComponent,
    RoleDetailComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMultiSelectModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
