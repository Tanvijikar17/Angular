import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private router: Router) { }
  
    profile() {
      this.router.navigate(['/profile']);
    }
    home() {
      this.router.navigate(['/home']);
    }
    user(){
      this.router.navigate(['/user']);
    }
    table(){
      this.router.navigate(['/table']);
    }
}
