import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
taskslist: any[] = []
  constructor( private _taskslist: HttpService) { }

  ngOnInit(): void {
    console.log("Before loading tasks: ", this.taskslist);
    let observable = this._taskslist.getTasks();


    observable.subscribe(
       (data:any) =>{
         console.log("esto es data: "+data)
      this.taskslist = data

    },
    (error:any) =>{
      console.log("Something wet wrong ",error);
    })
    // console.log("After loading the tasks: ", this.taskslist);
  }

}
