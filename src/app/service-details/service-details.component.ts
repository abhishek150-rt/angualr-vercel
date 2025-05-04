import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { services } from '../static/services';
import { CommonModule } from '@angular/common';


interface service {
  id: number;
  name: string;
  src: string;
  price: number | null;
  description: string;
  brief: string;
}


@Component({
  selector: 'app-service-details',
  imports: [CommonModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent {
  constructor(private route: ActivatedRoute) { }
  selectedService: service | null =null
  ngOnInit(): void {
    this.route.params.subscribe((params) => {

      if (params['id']) {
        this.selectedService = services.find(val => val.id == params['id']) || null
        console.log(this.selectedService)
      }
    });
  }
}
