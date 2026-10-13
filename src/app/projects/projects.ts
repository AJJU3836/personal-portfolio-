import { Component } from '@angular/core';
import { TEAM, Member } from '../data/team';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  team: Member[] = TEAM;
}
