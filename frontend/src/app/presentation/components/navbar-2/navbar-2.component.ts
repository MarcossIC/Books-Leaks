import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationExtras,
  Router,
  RouterLink,
} from '@angular/router';
import { BookDetail } from 'app/data/models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar-2',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar-2.component.html',
  styleUrl: './navbar-2.component.css',
})
export class Navbar2Component implements OnInit {
  protected searchTerm: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  search(): void {
    if (this.searchTerm !== '') {
      const shopIsActive = this.activatedRoute.snapshot.routeConfig?.path;

      if (shopIsActive) {
           this.router.navigate([], {
             queryParams: { search: this.searchTerm },
             queryParamsHandling: 'merge',
           });
      } else {
           this.router.navigate(['/shop'], {
             queryParams: { search: this.searchTerm },
           });
      }

    }
  }
}
