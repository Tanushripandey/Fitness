import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss'],
})
export class StarterPage implements OnInit {

  constructor(public router: Router) { 
  }

  ngOnInit() {
  }
  starter() 
  {
    this.router.navigate(['/login']);
  
}
}
