import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent implements OnInit {

  isVisible=true

  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.isVisible = false
  }

}
