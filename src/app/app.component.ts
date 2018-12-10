import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  // Explicit 
  private myTitle: string;
  private titleColor: string;
  private myNumber;

  constructor(){}

  ngOnInit(): void {
    
   this.myTitle = 'Came Countting';
   this.titleColor = '#FF0000';
   this.myNumber = 0;
   console.log('app start');

  }

  // Controller For Click
  myCountButton(){

    console.log('You Click Button');
    this.myNumber += 1;

  }


}// Main Class
