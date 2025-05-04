import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, RequestBody, User } from '../interface/user';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    
  ) {}

  getAllUsers() {
    this.loadingService.show()
    const url = 'https://dummyjson.com/users';

    return this.http.get<ApiResponse>(url);
  }

  addNewUser(data: RequestBody): Observable<User> {
    this.loadingService.show()
    const url = 'https://dummyjson.com/users/add';
    return this.http.post<User>(url, data);
  }
}
