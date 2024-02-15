import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable, map, of, tap } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { environment } from 'src/environments/environment';

interface LoginData {
  email:null | string,
  password: null | string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User | null = null

  constructor(private router:Router,private http:HttpClient) { }

  private setAuthUser(mockUser:User){
    this.user = mockUser
    localStorage.setItem("token","dsfsfdsgfgdfr")
  }

  login(authUser:LoginData):Observable<User[]>{
    // const MOCK_USER= {
    //   id:1,
    //   firstName:"Raul",
    //   lastName:"Moreno",
    //   email:"rmp@gmail.com",
    //   password:"12345678"
    // }

    // if(authUser.email=== MOCK_USER.email && authUser.password===MOCK_USER.password){
    //   this.setAuthUser(MOCK_USER)
    //   this.router.navigateByUrl("/dashboard/alumnos/listaAlumnos")
    //   return
    // }

    // this.router.navigateByUrl("/auth")

    return this.http.get<User[]>(`${environment.URI}/users?email=${authUser.email}&password=${authUser.password}`).pipe(
      tap((resp)=>{
        if(resp[0]){
          this.setAuthUser(resp[0])
          this.router.navigateByUrl("/dashboard/alumnos/listaAlumnos")
          return
        }
        this.router.navigateByUrl("/auth")
      })
    )
  }

  logout():void{
    this.user=null
    localStorage.removeItem("token")
    this.router.navigateByUrl("/auth")
  }

  verificarToken() {
    // return of(localStorage.getItem("token")).pipe(
    //   map(data => {
    //     if(!data){
    //       return false
    //     }
    //     return true
    //   })
    // )
    return this.http.get<User[]>(`${environment.URI}/users?token=${localStorage.getItem("token")}`).pipe(
      map((data)=>{
        if(data.length){
          this.setAuthUser(data[0])
          return true
        }
        this.user = null
        localStorage.removeItem("token")
        return false

      })
    )
    
  }
}
