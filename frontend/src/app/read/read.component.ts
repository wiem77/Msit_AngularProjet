import { Component, OnInit } from '@angular/core';
import {ApiserverService} from '../apiserver.service'
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent  implements OnInit{
  constructor(private service:ApiserverService){}
  readData:any;
  successmsg:any;
  ngOnInit(): void {
    this.getAllData();
  }
  deleteID(id:any){
console.log(id,'deletedid=>');
this.service.deleteUser(id).subscribe((res)=>{
console.log(res,'deletres==>');
this.successmsg=res.msg;
 this.getAllData();
});

  }
  //getuser
getAllData(){
  this.service.getAllData().subscribe((res)=>{
    console.log(res,"res=>");
    this.readData= res.user;
   });
}

}
