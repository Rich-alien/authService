import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ErrorMsgComponent} from './error-msg.component';

@NgModule({
    declarations: [ErrorMsgComponent],
    exports: [ErrorMsgComponent],
    imports: [CommonModule],
})
export class ErrorMsgModule {}
