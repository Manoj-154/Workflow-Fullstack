import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  isVisible=true

  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.isVisible=false
  }
  onsubmit(){
    alert("Complete your Task");
  }
  oncomplete(){
    alert("Thank you,go for Manufacture");
  }

}
