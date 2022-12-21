import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ApiserverService} from '../apiserver.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  constructor(private service:ApiserverService, private router:ActivatedRoute){}
  errormsg:any;
  successmsg:any;
  getparamid:any;
  ngOnInit(): void {
      this.getparamid=this.router.snapshot.paramMap.get('_id');
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,"res=>");
      this.userForm.patchValue({
       firstNamee:res.firstNamee,
       lastNamee:res.lastNamee,
       gender:res.gender,
       phone:res.phone,
       email:res.email,
       password:res.password,
      });

});

}
  userForm=new FormGroup({
    "firstNamee":new FormControl('',Validators.required),
    "lastNamee":new FormControl('',Validators.required),
    "email":new FormControl('',Validators.required),
    "phone":new FormControl('',Validators.required),
    "password":new FormControl('',Validators.required),
    "gender":new FormControl('',Validators.required)
      
  });
  
  userSubmit()
      {
        if(this.userForm.valid){
          console.log(this.userForm.value);
          this.service.createUser(this.userForm.value).subscribe((res)=>{
          console.log(res,"res=>");
          this.userForm.reset();
        
         } );
        }
        else{
         this.errormsg='all filed is required';
        
        }
        
      }
  
//updateUser
updateUser(){
  console.log(this.userForm.value,'updatedform');
  if(this.userForm.valid){
this.service.updateUser(this.userForm.value,this.getparamid).subscribe((res)=>{
console.log(res,'resupdated');

});
  }
 
  
}

}
