import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserData } from '../models/userlist';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  cards: UserData[] = [];

  pageIndex: number = 0;

  loading: boolean = false;

  id: number = 0;

  card: any = null;

  error: boolean = false;

  ngOnInit() {
    this.getData();
  }

  getData(page?: number) {
    this.loading = true;

    this.apiService.APIGetUserList(page ? page : 1, this.id).subscribe(
      (res) => {
        if (res.data) {
          if (res.data.length > 0) {
            this.loading = false;
            this.error = false;
            this.card = null;
            this.cards = res.data;
            return;
          } else {
            this.loading = false;
            this.error = false;
            this.cards = [];
            this.card = res.data;
            return;
          }
        }
      },
      (err: HttpErrorResponse) => {
        this.loading = false;
        this.error = true;
        this.cards = [];
        this.card = null;
      }
    );
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    console.log('index ', this.pageIndex);
    this.getData(this.pageIndex);
  }

  nextPage(id: number) {
    this.router.navigate(['/detail', id]);
  }

  handleChangeParent(p: any) {
    console.log('parentt ', p);

    this.id = p;

    this.getData();
  }
}
