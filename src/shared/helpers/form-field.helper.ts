import {AbstractControl} from '@angular/forms';

export class FormFieldHelper {
	public static getFormField<
		InputType extends AbstractControl,
		OutputType extends AbstractControl,
		K extends keyof T,
		T,
	>(group: InputType, key: K): OutputType {
		return group.get(key as string) as OutputType;
	}
}
