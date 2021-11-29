import { FormGroup } from '@angular/forms';
export function usuarioSenhaiguaisValidator(formGroup: FormGroup){
    const username = formGroup.get('userName')?.value ?? ''; //ou um valor ou string
    const password = formGroup.get('password')?.value ?? '';

    if(username.trim() + password.trim()){
        return username !== password ? null : {senhaigualUsuario: true};
    } else{
        return null;
    }
}