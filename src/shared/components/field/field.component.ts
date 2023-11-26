import type {ControlValueAccessor} from '@angular/forms';
import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FieldType} from './field.type';

@Component({
    selector: 'app-field[fieldPlaceholder][fieldTitle][typeInput]',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FieldComponent),
            multi: true,
        },
    ],
})
export class FieldComponent implements ControlValueAccessor {
    @Input() public fieldPlaceholder: string = '';

    @Input() public fieldTitle: string = '';

    @Input() public typeInput: FieldType = FieldType.text;

    public value: string = '';

    public onChange!: (value: string) => void;

    public onTouch!: () => void;

    public writeValue(value: string): void {
        this.value = value;
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }

    public onInput(event: Event): void {
        this.value = (event.target as HTMLInputElement).value;
        this.onChange(this.value);
    }
}
