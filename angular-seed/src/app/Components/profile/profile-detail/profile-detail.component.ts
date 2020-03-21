import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../../Modules/profile'
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() profiles: Array<Profile>;
  @Input() selectedProfile: Profile;

  constructor() { }

  onDelete(profile: Profile): void {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }

  clearSelectedProfile() {
    this.selectedProfile = null;
  }

  ngOnInit(): void {
  }

}
