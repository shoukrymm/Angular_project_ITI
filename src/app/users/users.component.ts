import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../sharedClassesAndFiles/IUsers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList:IUser[];
  errorMsg:any;
  constructor(private userService:UserService) {
    this.usersList=[]
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((UserData)=>{
      this.usersList=UserData;
    }, (error)=>{
      this.errorMsg = error
    })
  }

}
