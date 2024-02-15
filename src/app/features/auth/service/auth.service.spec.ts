import { TestBed } from "@angular/core/testing"
import { AuthService } from "./auth.service"


describe("Pruebas del authService",()=>{
    let authService:AuthService 
    

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[AuthService]
        })

        authService = TestBed.inject(AuthService)
        
    })

    it("Authservice debe instanciarse correctamente",()=>{
        expect(authService).toBeTruthy()
    })

    // it("Al hacer login el usuario debe tener valor",()=>{
    //     const MOCK_RESPONSE:User[] = [
    //         {
    //             id:23,
    //             email:"mock@gmail.com",
    //             firstName:"MOCKNAME",
    //             lastName:"MOCKLASTNAME",
    //             password:"password",
    //             token:"sfdgfgh6575675edfcg"
    //         }
    //     ] 

    //     authService.login({email:"mock@gmail.com",password:"pasword"}).subscribe({
    //         next:(user)=>{
    //             expect(authService.user).toBeTruthy()
    //         }
    //     })
        
        
        
    //     httpController.expectOne({
    //         url:"https://localhost:3000/users?email=mock@gmail.com&password=password",
    //         method:"GET",
    //     }).flush(MOCK_RESPONSE)


    // })
})