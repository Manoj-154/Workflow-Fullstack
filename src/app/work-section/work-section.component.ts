import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {

  isVisible=true

  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.isVisible=false
  }

}
