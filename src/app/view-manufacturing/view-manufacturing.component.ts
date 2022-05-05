import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Cartask } from '../cartask';

@Component({
  selector: 'app-view-manufacturing',
  templateUrl: './view-manufacturing.component.html',
  styleUrls: ['./view-manufacturing.component.css']
})
export class ViewManufacturingComponent implements OnInit {

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

  manufactureDetails(id: number){
    this.router.navigate(['manufacturing-details', id]);
  }

  oncomplete(){
    alert("Thank you,Goto next Workflow");
  }

  InPprogress(){
    alert("Complete the workflow to proceed");
  }

  // updatework(id: number){
  //   this.router.navigate(['update-work', id]);
  // }

  // deletework(id: number){
  //   this.carservise.deletework(id).subscribe( data => {
  //     console.log(data);
  //     this.getEmployees();
  //   })
  // }
}
