import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./presentation/components/navbar/navbar.component";
import { FooterComponent } from "./presentation/components/footer/footer.component";
import { LoginComponent } from './presentation/pages/login/login.component';
import { RegisterComponent } from './presentation/pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from '@presentation/components/toast/toast.component';
import { ToastService } from './data/services/toast/Toast.service';
import { CatalogComponent } from "./presentation/pages/catalog/catalog.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [ToastService],
    imports: [CommonModule, RouterOutlet, RegisterComponent, LoginComponent, CatalogComponent, NavbarComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  
  
  constructor() {
    
  }

  ngOnInit(): void {

  }
  
}
