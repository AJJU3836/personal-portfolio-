import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Member } from '../data/team';

@Component({
  selector: 'app-member-card',
  imports: [RouterLink],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',
})
export class MemberCardComponent {
  @Input() member!: Member;
}
