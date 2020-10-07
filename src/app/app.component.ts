import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PizzaApp';
  notificationCount = 3;
  navigationMenu = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      icon:'assessment'
    },
    {
      name: 'Task & Assignment',
      path: 'task',
      icon:'assignment'
    },
    {
      name: 'Stock',
      path: 'stock',
      icon:'done_all'
    },
    {
      name: 'Sales',
      path: 'sales',
      icon:'credit_card'
    },
    {
      name: 'Purchase',
      path: 'purchase',
      icon:'account_balance_wallet'
    }
  ]
  constructor(private router: Router) {

  }
  navigateTo(path) {
    this.router.navigateByUrl(path);
  }
}
