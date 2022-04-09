import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  isVisible=true

  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.isVisible=false
  }

  onsubmit(){
    alert("complete your task");
  }

  oncomplete(){
    alert("Thank you, go for Design");
  }

}
