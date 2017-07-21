import { Injectable } from '@angular/core';
import { Person } from '../../shared/_models/person.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PeopleService {
  private url = 'http://localhost:8090/rest/people';

  constructor(
    private http: Http
  ) {}


  all(): Promise<Person[]>{
	let headers = new Headers();
	headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
    headers.append("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
	headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	let options = new RequestOptions({ headers: headers });
	
    return this.http.get(this.url,options)
        .toPromise()
        .then(response => {return <Person[]> response.json()});
  }

}

