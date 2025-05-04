import { Component, effect, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  x = 20;
  y: WritableSignal<number> = signal(20);
  title: string | null = null;

  user: WritableSignal<{ id: number; name: string }> = signal({
    id: 1,
    name: 'Abhishek',
  });

  constructor(private route: Router) {
    effect(() => {
      console.log(this.x);
      // console.log(this.y())
    });
  }

  generateTitle(message: string) {
    this.title = message;
    return this.title;
  }

  handleIncrement() {
    this.x = this.x + 1;
    // this.y.set(this.y() + 1)
    this.y.update((val) => val + 1);
  }

  handleProfileCheck() {
    this.route.navigate(['profile'], {
      queryParams: { name: 'Abhishek Singh Negi' },
    });
  }
}
