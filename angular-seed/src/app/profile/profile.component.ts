import { Component, OnInit } from '@angular/core';
import { Profile } from './Dependencies/profile';
import { ProfileServiceService } from './Dependencies/profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Array<Profile>;
  selectedProfile: Profile;

  constructor(private profileService: ProfileServiceService) {

  }

  getProfiles(): void {
    this.profileService.getProfiles().subscribe(profiles => this.profiles = profiles);
  }

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }

  onDelete(profile: Profile): void {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }

  clearSelectedProfile() {
    this.selectedProfile = null;
  }


  ngOnInit(): void {
    this.getProfiles();
  }

}
