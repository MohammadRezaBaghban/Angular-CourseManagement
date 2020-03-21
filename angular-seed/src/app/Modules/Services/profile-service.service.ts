import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import { Profiles } from '../profiles';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileServiceService {

    constructor() { }

    getProfiles(): Observable<Profile[]> {
        return of(Profiles);
    }
}
