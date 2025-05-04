import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  userName: string | null = null;
 

  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
    // this.userName = this.route.snapshot.paramMap.get('name');
    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'];
    });
  }
}
