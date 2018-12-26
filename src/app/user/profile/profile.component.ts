import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Object;

  constructor(private route: ActivatedRoute) {
    this.profile = this.route.snapshot.data['profile'];
  }

  ngOnInit() {
  }

}
