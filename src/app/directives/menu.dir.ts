import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector : 'menu',
  template : `
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-print-none">
  <a class="navbar-brand" href="#" routerLink = '/products'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_QXxKhMu4YV8aibluYKpbXMS-XrcvaJyOA&usqp=CAU" class="logo mr-2"/><b>OFFICE MATE</b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" routerLink = '/products'>Products <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink = '/billing'>Billing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/checkout'>Checkout</a>
      </li>      
    </ul>
    <div >
      <button class="btn btn-primary" style="margin-left: 600px;" (click)= "dashboard()">USER DEATILS</button>
      <button class="btn btn-danger" style="margin-left: 20px;" (click)= "signOut()">LOGOUT</button>
    </div>
  </div>
</nav>
  `,

  styles:[`
    .logo{
      height: 60px;
      width: auto;
    }
  `]
})


export class MenuDir{

  
constructor(
  private router: Router,
){}

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }
  
  dashboard(): void {
    this.router.navigateByUrl('/dashboard').then();
  }
}