import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { RouterModule, Routes, Router } from '@angular/router';
import { stringify } from 'querystring';
import { HomeService } from './home.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private homeService : HomeService) { }

  games: string[]; 
 
  gName: string;

  
  ngOnInit() {


    this.homeService.getGames(this.gName);
  }



  onClickMe() {
    
    this.gName = ((document.getElementById("name") as HTMLInputElement).value);

    localStorage.setItem("gName",this.gName);
    this.homeService.getGames(this.gName);

    if(this.gName == '')
    {
      alert("No available results match your search,please try again");
    } 
    else{
      this.router.navigate(['results']);

    }
  
  }

}
