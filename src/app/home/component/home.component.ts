import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: string;

  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
	this.userName = this.homeService.getUserName();
  }
}
