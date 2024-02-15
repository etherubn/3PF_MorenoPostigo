import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Validator{
    static validEmail(control:AbstractControl):ValidationErrors|null{
        return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(control.value.trim())
            ? null
            : {
                "invalidEmail":true
            } 
    }
}
