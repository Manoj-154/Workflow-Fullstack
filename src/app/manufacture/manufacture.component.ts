import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.css']
})
export class ManufactureComponent implements OnInit {

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
  alert("Thank you,Go for Assembling Phase");
}
}
