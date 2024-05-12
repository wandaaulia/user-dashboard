import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserData } from '../models/userlist';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  cards: UserData[] = [];

  pageIndex = 0;

  ngOnInit() {
    this.getData(1);
  }

  getData(a: number) {
    this.apiService.APIGetUserList(a).subscribe((res) => {
      if (res.data.length > 0) {
        this.cards = res.data;
      } else {
        this.cards = [];
      }

      return;
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    console.log('index ', this.pageIndex);
    this.getData(this.pageIndex);
  }

  nextPage(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
