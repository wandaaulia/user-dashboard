import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UserData } from '../models/userlist';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  id: number = 0;

  card!: UserData;

  loading: boolean = false;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetail(this.id);
  }

  getDetail(id: number) {
    this.loading = true;

    this.apiService.APIGetUser(id).subscribe((res) => {
      if (res.data) {
        this.loading = false;
        this.card = res.data;
      } else {
        this.loading = false;
      }
    });
  }
}
