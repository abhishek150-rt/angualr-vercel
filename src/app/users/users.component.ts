import { afterRender, Component, ViewChild } from '@angular/core';
import { DetailsComponent } from './details/details.component';

import { UserService } from '../api/user.service';
import { ApiResponse, User } from '../interface/user';
import { LoadingService } from '../api/loading.service';
import { MessageService } from '../api/message.service';

@Component({
  selector: 'app-users',
  imports: [DetailsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: User[] = [];

  constructor(
    private UserService: UserService,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((data: ApiResponse) => {
      this.loadingService.hide();
      if (data.users.length > 0) {
        this.users = data.users;
        this.messageService.showMessage('Success', 'success');
      } else {
        this.messageService.showMessage('Failed to fetch users', 'error');
      }
    });
  }

  handleClick(id: number) {
    if (id) {
      const user = this.users.find((val) => val.id === id);
      if (user) {
        alert(`Hello Mr. ${user.firstName}`);
      }
    }
  }
  handleAddUser() {
    debugger;
    let payload = {
      firstName: 'Abhishek',
      lastName: 'Negi',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
      age: 28,
      email: 'abhisheknegi968@gmail.com',
    };
    this.UserService.addNewUser(payload).subscribe((data: User) => {
      this.loadingService.hide()
      if (data && data.id) {
        this.messageService.showMessage('Added Successfully', 'success');
      } else {
        this.messageService.showMessage('Failed to add user', 'error');
      }
    });
  }
}
