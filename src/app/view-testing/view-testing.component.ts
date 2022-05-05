import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Cartask } from '../cartask';

@Component({
  selector: 'app-view-testing',
  templateUrl: './view-testing.component.html',
  styleUrls: ['./view-testing.component.css']
})
export class ViewTestingComponent implements OnInit {

  isVisible=true
  tasks: Cartask[] =[];

  
  constructor(private carservise: CarService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.carservise.getworkList().subscribe(data => {
      this.tasks = data;
    });
  }

  testingdetails(id: number){
    this.router.navigate(['testing-details', id]);
  }

  oncomplete(){
    alert("Thank you, Launch your Cars");
  }

}
