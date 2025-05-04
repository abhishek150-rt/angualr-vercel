import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgIf, NgStyle],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count: number = 0
  name: string | null = null
  showCounter: boolean = true
  color: string = "red"

  handleCounter(event: Event, mode: string) {

    if (mode === "minus") {
      if (this.count > 0) {
        this.count--
      }
    }
    else if (mode === "add") {
      this.count++
    }
    else {
      this.count = 0
    }
  }

  handleInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.name = val
  }
  handleToggle() {
    this.showCounter = !this.showCounter

  }

  ngOnInit() {
    setTimeout(() => {
      this.count = 100; // UI won't update
    }, 2000);
  }

}
