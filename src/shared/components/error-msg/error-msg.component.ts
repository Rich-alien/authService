import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ErrorMsg, ErrorMsgList} from './error-msg';

@Component({
    selector: 'app-error-msg[message]',
    templateUrl: './error-msg.component.html',
    styleUrls: ['./error-msg.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMsgComponent {
    @Input() message!: ErrorMsg;

    public readonly errorMsgList: typeof ErrorMsgList = ErrorMsgList
}
