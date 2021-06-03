import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }

  private limite = '24';

  private link = 'https://api.giphy.com/v1/gifs/search';

  private api_key = 'R7Us3vUA7Q70lKfrQThJUxqvPGbphERa';

  getGifs(pics: any) {
    let link = `${this.link}?api_key=${this.api_key}&q=${pics}&limit=${this.limite}`;
    return this.http.get(link);
  }
}