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

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log('id ', this.id);
    this.getDetail(this.id);
  }

  getDetail(id: number) {
    this.apiService.APIGetUser(id).subscribe((res) => {
      if (res.data) {
        this.card = res.data;
      }
    });
  }
}
