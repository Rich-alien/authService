import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ButtonType} from './button.type';

@Component({
    selector: 'app-button[title][type]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() public title: string = '';

    @Input() public type: ButtonType = ButtonType.white;

    public readonly typesButton: typeof ButtonType = ButtonType
}
