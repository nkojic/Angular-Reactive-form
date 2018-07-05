import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ProveraTextPoljaValidators{
    static nemaX(control: AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') != -1){
            return { nemaSpace: true}
        }
        return null;
    }

    static regExp(control:AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') != -1){
            return { nemaSpace: true}
        }
        return null;
    }
}
////poziva se kao ProveraTextPoljaValidators.nemaX
