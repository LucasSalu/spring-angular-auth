import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent {

  isAdmin:boolean = false;

  constructor(private route:Router){

  }
  ngOnInit() {
    this.isAdmin = 'admin' == localStorage.getItem('role')
  }

  logout(){
    localStorage.setItem('token','');
    localStorage.setItem('username','');
    localStorage.setItem('id','');
    this.route.navigate(['/login']);
  }
}
