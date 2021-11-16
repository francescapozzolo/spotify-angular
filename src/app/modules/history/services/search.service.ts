import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  searchTracks$(term: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks?src=${term}`).pipe(
      map((dataRaw: any) => dataRaw.data)
    )
  }
}
