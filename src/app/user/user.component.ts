import { Component } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private dataService: DataService, private router: Router) {}


  hide = true;
  FirstName!: string;
  LastName!: string;
  Contact!: string;
  Department!: string;
  Salary!: string;

  ngOnInit() {
  }
  
  addUser(){
    if(this.FirstName && this.LastName && this.Department && this.Contact){
      const data = {
        firstName: this.FirstName,
        lastName: this.LastName, 
        contact: this.Contact, 
        department: this.Department,
        salary: this.Salary
      }

      this.dataService.addUser(data).subscribe(
        () => {
          console.log('Add User Successfully');
          this.router.navigate(['/home']);
        },
        (error) =>{
          console.error("error While UPdateing User!", error)
        }
      )
    }
  }

}
