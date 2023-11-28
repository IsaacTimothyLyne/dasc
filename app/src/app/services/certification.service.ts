import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CertificationService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://https://cors-anywhere.herokuapp.com/corsdemo/https://songstats.p.rapidapi.com/tracks/stats?source=all&isrc={REPLACETHIS}&with_playlists=true&with_charts=true&with_videos=true&with_links=true';

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '785b386cc3msha7f1f891157a5e8p1c6690jsn058bb7feab20',
    'X-RapidAPI-Host': 'songstats.p.rapidapi.com'
  });
  
  fetchCertification(isrc: string): Observable<any> {
    const newUrl = this.apiUrl.replace('{REPLACETHIS}', isrc);
    const requestOptions = {
      headers: this.headers,
      mode: 'cors', // Add this line
    };
    return this.http.get(newUrl, requestOptions);
  }
}
