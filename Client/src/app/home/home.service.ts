import {Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 



@Injectable()
export class HomeService {


//   showGames : Game[];

  constructor(private http: HttpClient) { }

  games: string[]; 

  getGames(gn:string)
  {
    this.http.get('http://localhost:54095/api/tblGames?gn='+gn).subscribe(  
        data => {  
         this.games = data as string []; 
        }  
      );
  }




}