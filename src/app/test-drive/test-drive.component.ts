import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.css']
})
export class TestDriveComponent implements OnInit {

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
    alert("Thank you,Go for  Launching a Car");
  }

}
