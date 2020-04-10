import { Injectable } from '@angular/core';
import { Profile, ProfileInterface} from '../profile';
import { Profiles } from '../Mock_Objects/mock-profiles';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map,tap } from "rxjs/operators";
import { User } from '../user';

@Injectable({
    providedIn: 'root'
})
export class ProfileServiceService {


//URL to web API
private profileURI = "https://aimchatbot.herokuapp.com:443/profile";

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



    constructor(private http:HttpClient) { }

    getProfiles(): Observable<Profile[]> {

        return this.http.get<ProfileInterface[]>(this.profileURI).pipe(
            tap(_ => console.log('fetched profiles')),
            catchError(this.handleError<Profile[]>('getProfiles', [])),
            map( response => {
              let profiles: Profile[] = [];
              response.forEach(element => {
                let newProfile: Profile = new Profile(element.id,element.name,element.des,new User(null,null,element.owner,null,null));
                profiles.push(newProfile);
              })
              return profiles;
            })
          );
        return of(Profiles);
    }

    // PUT role on the server
    public UpdateProfile(profile: Profile): Observable<any> {
    const url = `${this.profileURI}/${profile.profileId}`;
    let updatedProfile : ProfileInterface;
  
    updatedProfile = {
        id : profile.profileId,
        name : profile.profileName,
        des : profile.profileDescription,
        owner : profile.profileOwner.first_name+profile.profileOwner.last_name
        };

    return this.http.put(url, updatedProfile, this.httpOptions)
    .pipe(
      tap(_ => console.log(`updated profile id=${profile.profileId}`)),
      catchError(this.handleError<any>('UpdateProfile'))
    );
  }

/**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
