import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData, UserResponse, UsersResponse } from '../models/userlist';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URLUser: string;

  constructor(private httpClient: HttpClient) {
    this.URLUser = `https://reqres.in/api/users`;
  }

  public APIGetUserList(
    page: number,
    query?: number
  ): Observable<UsersResponse> {
    let queryParams = `?page=${page}`;

    if (query) {
      queryParams = `?page=${page}&&id=${query}`;
    }
    return this.httpClient.get<UsersResponse>(this.URLUser + queryParams);
  }

  public APIGetUser(id: number): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(this.URLUser + `/${id}`);
  }
}
