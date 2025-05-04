import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../static/services';


interface service {
  id: number;
  name: string;
  src: string;
  price: number | null;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})

export class ServicesComponent {
  services: service[] | [] = services;
}
