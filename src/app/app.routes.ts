import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { TeamComponent } from './team/team';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';
import { MemberProfileComponent } from './member-profile/member-profile';

export const routes: Routes = [
  { path: '',               component: HomeComponent },
  { path: 'team',           component: TeamComponent },
  { path: 'projects',       component: ProjectsComponent },
  { path: 'contact',        component: ContactComponent },
  { path: 'member/:slug',   component: MemberProfileComponent },
  { path: '**',             redirectTo: '' },
];
