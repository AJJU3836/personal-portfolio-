import { Component } from '@angular/core';
import { TEAM, Member } from '../data/team';
import { MemberCardComponent } from '../member-card/member-card';

@Component({
  selector: 'app-team',
  imports: [MemberCardComponent],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class TeamComponent {
  team: Member[] = TEAM;
}
