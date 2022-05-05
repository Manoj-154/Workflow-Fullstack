import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Cartask } from '../cartask';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-design-details',
  templateUrl: './design-details.component.html',
  styleUrls: ['./design-details.component.css']
})
export class DesignDetailsComponent implements OnInit {

  id!: number
  cartask!: Cartask
  constructor(private route: ActivatedRoute, private CarService: CarService,private Http:HttpClient
    
 ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cartask= new Cartask();
    this.CarService.getworkById(this.id).subscribe( data => {
      this.cartask = data;
    });
  }

}
