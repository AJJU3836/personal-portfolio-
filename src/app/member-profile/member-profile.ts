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
  nextMember: Member | undefined;
  prevMember: Member | undefined;
  currentIndex = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.currentIndex = TEAM.findIndex(m => m.slug === slug);
      if (this.currentIndex === -1) {
        this.router.navigate(['/']);
        return;
      }
      this.member    = TEAM[this.currentIndex];
      this.prevMember = this.currentIndex > 0              ? TEAM[this.currentIndex - 1] : undefined;
      this.nextMember = this.currentIndex < TEAM.length - 1 ? TEAM[this.currentIndex + 1] : undefined;
    });
  }
}
