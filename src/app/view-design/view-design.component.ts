import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Cartask } from '../cartask';

@Component({
  selector: 'app-view-design',
  templateUrl: './view-design.component.html',
  styleUrls: ['./view-design.component.css']
})
export class ViewDesignComponent implements OnInit {

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

  designdetails(id: number){
    this.router.navigate(['design-details', id]);
  }

  oncomplete(){
    alert("Thank you,Goto Next workflow");
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
