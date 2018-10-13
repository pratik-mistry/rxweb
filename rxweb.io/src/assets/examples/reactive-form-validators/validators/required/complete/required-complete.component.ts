import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators 
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-required-complete-validator',
    templateUrl: './required-complete.component.html'
})
export class RequiredCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.formGroup({
										firstName:['',RxwebValidators.required()], 
													middleName:['',RxwebValidators.required({conditionalExpression:(x,y) =>{ return  x.firstName == "John" } })], 
													lastName:['',RxwebValidators.required({conditionalExpression:x => x.firstName == "John" })], 
													userName:['',RxwebValidators.required({message:'Username cannot be blank.' })], 
								});
    }
}