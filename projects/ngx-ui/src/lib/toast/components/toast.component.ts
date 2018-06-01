import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
    selector: 'nio-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class NioToastComponent {
    public messages: Message[] = [];

    constructor() {}

    public onClose(data) {
        if (data.message.onClose) {
            data.message.onClose();
        }
    }
}
