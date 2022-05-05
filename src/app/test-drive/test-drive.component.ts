import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Cartask } from '../cartask';

@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.css']
})
export class TestDriveComponent implements OnInit {

  public testingwork!:FormGroup
isdesign=true

changeView(){
  this.isdesign=false
}
task: Cartask = new Cartask();
constructor(private carservice: CarService,
private router: Router , private http:HttpClient,private Fb:FormBuilder ) { }

ngOnInit(): void {
  this.testingwork=this.Fb.group({
  Work:['',Validators.required]    
  })
}

saveEmployee(){
this.carservice.creatework(this.task).subscribe( data =>{
  console.log(data);
  this.goToEmployeeList();
},
error => console.log(error));
}

goToEmployeeList(){
this.router.navigate(['/view-testing']);
}

onSubmit(){
console.log(this.task);
this.saveEmployee();
}


oncomplete(){
  alert("Thank you,Go for  Launching a Car");
}
}
