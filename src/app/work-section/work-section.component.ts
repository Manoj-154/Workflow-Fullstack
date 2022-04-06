import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {

  worksection=true;
  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.worksection=false
  }

}
