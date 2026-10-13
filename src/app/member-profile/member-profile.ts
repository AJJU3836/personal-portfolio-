import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TEAM, Member } from '../data/team';

@Component({
  selector: 'app-member-profile',
  imports: [RouterLink],
  templateUrl: './member-profile.html',
  styleUrl: './member-profile.css',
})
export class MemberProfileComponent implements OnInit {
  member: Member | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.member = TEAM.find(m => m.slug === slug);
    if (!this.member) this.router.navigate(['/']);
  }
}
