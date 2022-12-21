import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserverService {

  constructor(private _http:HttpClient) {}
    // connect frontendtobackend
    apiUrl='http://localhost:3000/users/listUsers';
    //adduserurl
    addUrl='http://localhost:3000/users/addUser';
    //delteurl
    delUrl='http://localhost:3000/users/deleteUser';
    //upadeturl
    updateUrl='http://localhost:3000/users/updateUser';
    // getoneuser
    getUrl='http://localhost:3000/users';
   //getalldata
   getAllData():Observable<any>
   {

return this._http.get(`${this.apiUrl}`);
   }
   //create new user
   createUser(data:any):Observable<any>{
    console.log(data,'createapi=');
    
return this._http.post(`${this.addUrl}`,data);
   }
   //deletedata
   deleteUser(_id:any):Observable<any>{
    let ids=_id;
    return this._http.delete(`${this.delUrl}/${ids}`);
   }
//updateData
updateUser(data:any,_id:any):Observable<any>{
    let ids=_id;
  return this._http.put(`${this.updateUrl}/${ids}`,data);
 }

//getgetSingleData
getSingleData(  _id: any ):Observable<any>{
  let ids=_id;
  return this._http.get(`${this.getUrl}/${ids}`);


}
}