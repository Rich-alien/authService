import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FieldComponent} from './field.component';

@NgModule({
    declarations: [FieldComponent],
    exports: [FieldComponent],
    imports: [CommonModule],
})
export class FieldModule {}
