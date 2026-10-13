import { Component } from '@angular/core';
import { TEAM, Member } from '../data/team';
import { MemberCardComponent } from '../member-card/member-card';

@Component({
  selector: 'app-home',
  imports: [MemberCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  team: Member[] = TEAM;
}
