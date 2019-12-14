import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patent } from './patent';
import { tap, map } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PatentsService {
  private patentsUrl = 'http://127.0.0.1:8000/patents/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) { }


    getPatents(): Observable<Patent[]> {
      return this.http.get<Patent[]>(this.patentsUrl).pipe(
        map(patents => patents),
        tap( _ => this.log(`fetched heros`))
      );
    }

    // getLanguages(): Promise<Patent[]> {
    //   return this.http.get(this.patentsUrl)
    //       .toPromise()
    //       .then(response => response.json() as Patent[])
    // }

    private log(message: string) {
      this.messageService.add(`PatentService: ${message}`);
    }

}
