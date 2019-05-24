import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
import { HomeService } from '../home/home.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private httpService: HttpClient,
    private homeService : HomeService) { }

  gName: string;

  ngOnInit() {

    this.gName = localStorage.getItem("gName");
    this.homeService.getGames(this.gName);

  }



}
