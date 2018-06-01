import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';

export interface IToast {
    severity?: string;
    title?: string;
    message: string;
    onClose?: Function;
    timeout?: number;
}

@Injectable()
export class NioToastService {
    constructor(private _toastyService: MessageService) {}

    private displayToast(options: IToast) {
        const toastOptions = {
            ...{ severity: options.severity },
            ...{
                summary: options.title,
                detail: options.message,
                onClose: options.onClose
            }
        };

        this._toastyService.add(toastOptions);
    }

    public success(options: IToast) {
        this.displayToast({ ...options, severity: 'success' });
    }

    public info(options: IToast) {
        this.displayToast({ ...options, severity: 'info' });
    }

    public warn(options: IToast) {
        this.displayToast({ ...options, severity: 'warn' });
    }

    public error(options: IToast) {
        this.displayToast({ ...options, severity: 'error' });
    }
}
