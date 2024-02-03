import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.css']
})
export class DialogueBoxComponent implements OnInit{
  constructor(private dataService: DataService, private router: Router, public dialogRef: MatDialogRef<DialogueBoxComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.employee = data.employee;
    this.id = this.employee.ID;
  }

  hide = true;
  FirstName!: string;
  LastName!: string;
  Contact!: string;
  Department!: string;
  Salary!: string;
  employee: any;
  id: string;

  ngOnInit() {
    if(this.id){
      this.dataService.getLoggedInUserData(this.id).subscribe(
        (data) =>{
          this.FirstName = data.fetchresult[0].FirstName;
          this.LastName = data.fetchresult[0].LastName;
          this.Contact = data.fetchresult[0].Contact;
          this.Department = data.fetchresult[0].Department;
        },
        (error) =>{
  
        },
      );
    }
  }
  
  editUser(){
    if(this.FirstName && this.LastName && this.Department && this.Contact){
      const data = {
        firstName: this.FirstName,
        lastName: this.LastName, 
        contact: this.Contact, 
        department: this.Department,
        salary: this.Salary
      }

      this.dataService.editUser(this.id, data).subscribe(
        () => {
          console.log('Add User Successfully');
          this.dialogRef.close();
          this.router.navigate(['/home']);
        },
        (error) =>{
          console.error("error While UPdateing User!", error)
        }
      )
    }
  }
}