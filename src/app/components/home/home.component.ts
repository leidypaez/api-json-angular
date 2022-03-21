import { Component, OnInit } from '@angular/core';
import listOfCompany from '../../../assets/json/api-company.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  company:any = listOfCompany;

  constructor() {
  }

  ngOnInit(): void {
  }

}
