import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Cartask } from '../cartask';
import { HttpClient } from '@angular/common/http';
import { FormsModule,FormBuilder,Validators, Form, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.css']
})
export class ManufactureComponent implements OnInit {

ismanufacture=true
public manufacturework!:FormGroup
changeView(){
  this.ismanufacture=false
}
task: Cartask = new Cartask();
constructor(private carservice: CarService,
private router: Router,private http:HttpClient,private Fb:FormBuilder ) { }

ngOnInit(): void {
  this.manufacturework=this.Fb.group({
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
this.router.navigate(['/view-manufacturing']);
}

onSubmit(){

  this.http.post<any>("http://localhost:8080/addWork",this.manufacturework.value).subscribe(res=>{
    this.router.navigate(["/view-manufacture"])
  },err=>{console.log(err)}

  )

console.log(this.task);
this.saveEmployee();
}

oncomplete(){
  alert("Thank you,Go for testing Phase");
}

}
