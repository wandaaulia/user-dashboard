import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  componentName!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.firstChild?.data.subscribe((data) => {
      this.componentName = data['name'];
    });
  }
}
