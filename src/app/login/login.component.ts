import { Component, effect, signal, WritableSignal } from '@angular/core';
import { ButtonComponent } from "./button/button.component";
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  

  username = signal("Abhishek")
  email: WritableSignal<string | null> = signal(null)
  constructor() {
    effect(() => {
      // if (this.username() === "Mohit") {
      //   alert("Hello Mohit")
      // }
      // else {
      //   alert(`Hello ${this.username()}`)
      // }
      console.log("email", this.email())
    })
  }
  changeVal() {
    this.username.update((val) => val = "Mohit")
  }
  handleInput(event: Event) {

  }
}
