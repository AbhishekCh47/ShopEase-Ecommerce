import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],

})
export class RatingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  rating:number;
  count:number;
  title = 'Please rate some of our products';
  recordList:any[]=[
    {'Id':1,'Framework':'/assets/img/a.jpg', 'myList':[true,true,true,true,true]},
    {'Id':2,'Framework':'/assets/img/b.jpeg', 'myList':[true,true,true,true,true]},
    {'Id':3,'Framework':'/assets/img/c.jpeg', 'myList':[true,true,true,true,true]},
    {'Id':4,'Framework':'/assets/img/d.jpeg', 'myList':[true,true,true,true,true]},


  ];
  setStarTable(record:any,data:any){
    this.rating=data+1;
    var tableList = this.recordList.find(function (obj: any) { return obj.Id === record.Id });
    for(var i=0;i<=4;i++){
      if(i<=data){
        tableList.myList[i]=false;
      }
      else{
        tableList.myList[i]=true;
      }
    }


  }





}
