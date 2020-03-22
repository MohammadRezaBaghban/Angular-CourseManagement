import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { RoleComponent } from './Components/role/role.component';
import { UsersComponent } from './Components/users/users.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProfileDetailComponent } from './Components/profile/profile-detail/profile-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'roles', component: RoleComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'detail/:id', component: ProfileDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }