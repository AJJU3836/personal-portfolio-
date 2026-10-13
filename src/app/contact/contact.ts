import { Component } from '@angular/core';
import { TEAM, Member } from '../data/team';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  team: Member[] = TEAM;
}
