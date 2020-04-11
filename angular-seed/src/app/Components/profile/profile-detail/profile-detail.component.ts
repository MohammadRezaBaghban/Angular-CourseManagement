import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../../Modules/profile'
import { Observable } from 'rxjs';
import { ProfileServiceService } from '../../../Modules/Services/profile-service.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() profiles: Array<Profile>;
  @Input() selectedProfile: Profile;

  constructor(private profileService:ProfileServiceService) { }

  onDelete(profile: Profile): void {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
    this.selectedProfile = null;
  }

  clearSelectedProfile() {
    this.selectedProfile = null;
  }
  
  updateProfile(profile:Profile):void{
    this.profileService.UpdateProfile(profile).subscribe(()=>this.clearSelectedProfile());
  }

  ngOnInit(): void {
  }

}
