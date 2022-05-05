import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Cartask } from '../cartask';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators, Form} from '@angular/forms';



@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  isdesign=true
  public designwork!:FormGroup
  changeView(){
    this.isdesign=false
  }
task: Cartask = new Cartask();
constructor(private carservice: CarService,
  private router: Router, private http:HttpClient,private Fb:FormBuilder ) { }

ngOnInit(): void {
  this.designwork=this.Fb.group({
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
  this.router.navigate(['/view-design']);
}

onSubmit(){
  this.http.post<any>("http://localhost:8080/addWork",this.designwork.value).subscribe(res=>{
    this.router.navigate(["/view-design"])
    
    },err=>{console.log(err)}
    
  )
  console.log(this.task);
  this.saveEmployee();
}
}
