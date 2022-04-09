import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assembling',
  templateUrl: './assembling.component.html',
  styleUrls: ['./assembling.component.css']
})
export class AssemblingComponent implements OnInit {

  isVisible=true

  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.isVisible=false
  }
  onsubmit(){
    alert("Complete your task");
  }
  oncomplete(){
    alert("Thank you, Go for Testing of car");
  }

}
