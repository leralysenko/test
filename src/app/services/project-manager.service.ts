import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story`);
  }
}
