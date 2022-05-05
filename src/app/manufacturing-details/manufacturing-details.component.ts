import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Cartask } from '../cartask';

@Component({
  selector: 'app-manufacturing-details',
  templateUrl: './manufacturing-details.component.html',
  styleUrls: ['./manufacturing-details.component.css']
})
export class ManufacturingDetailsComponent implements OnInit {

  id!: number
  cartask!: Cartask
  constructor(private route: ActivatedRoute, private CarService: CarService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cartask= new Cartask();
    this.CarService.getworkById(this.id).subscribe( data => {
      this.cartask = data;
    });
  }

}
