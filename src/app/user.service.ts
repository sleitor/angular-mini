import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
      .map(response => response.json())
      .map(response => response.results)
      .map(users => {
        return users.map(u => {
          return {
            name: u.name.first + ' ' + u.name.last,
            location: u.location.state + ' ' + u.location.city + ' ' + u.location.street,
            picture: u.picture.large
          };
        });
      });
  }
}
