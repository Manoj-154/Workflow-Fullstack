import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {

  constructor() { }

isVisible=true

  ngOnInit(): void {
    
  }

  changeView(){
    this.isVisible=false
  }
}
