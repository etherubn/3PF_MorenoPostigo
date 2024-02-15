import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { MockProvider } from "ng-mocks";
import { AuthService } from "../../service/auth.service";
import { SharedModule } from "src/app/shared/shared.module";
import { Validators } from "@angular/forms";
import { Validator } from "src/app/shared/Validator/validator";

describe("LoginComponent", () => {
    let component: LoginComponent

    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                declarations: [LoginComponent],
                imports: [SharedModule],
                providers: [MockProvider(AuthService)]


            }
        )

        component = TestBed.createComponent(LoginComponent).componentInstance
    })

    it("El loginComponent debe instanciarse correctamente", () => {
        expect(component).toBeTruthy()
    })

    it("La contraseña deben ser controles requeridos", () => {
        expect(component.formulario.get("password")?.hasValidator(Validators.required)).toBeTrue()
    }
    )

    it("El formualrio es invalido debe marcarse todo como touched",()=>{
        component.formulario.patchValue({
            email:"",
            password:""
        })

        expect(component.formulario.invalid).toBeTrue()

        const spyOnMarlAllAsTouched = spyOn(
            component.formulario,"markAllAsTouched"
        )

        component.onUser()
        expect(spyOnMarlAllAsTouched).toHaveBeenCalled()
    })
    
})