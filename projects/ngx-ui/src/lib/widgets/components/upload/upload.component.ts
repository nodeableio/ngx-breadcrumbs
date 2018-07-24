import { OnInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { EmitType, detach } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';
import {
    createSpinner,
    showSpinner,
    hideSpinner
} from '@syncfusion/ej2-popups';

@Component({
    selector: 'nio-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NioUploadComponent implements OnInit {
    @ViewChild('defaultupload') public uploadObj: UploaderComponent;

    @ViewChild('checkbox')
    public path: Object = {
        saveUrl: '/api/uploadbox/Save',
        removeUrl: '/api/uploadbox/Remove'
    };

    constructor() {
        this.uploadObj.autoUpload = true;
    }

    public dropElement: HTMLElement = document.getElementsByClassName(
        'control-fluid'
    )[0] as HTMLElement;

    ngOnInit() { }

    public onSuccess: EmitType<Object> = (args: any) => {
        const uploadWrapper: HTMLElement = this.uploadObj.element.closest(
            '.e-upload'
        ) as HTMLElement;
        const li: HTMLElement = uploadWrapper.querySelector(
            '[data-file-name="' + args.file.name + '"]'
        );

        if (args.operation === 'upload') {
            (li.querySelector('.e-file-delete-btn') as HTMLElement).onclick = () => {
                this.generateSpinner(uploadWrapper);
            };
            (li.querySelector('.e-file-delete-btn') as HTMLElement).onkeydown = (
                e: any
            ) => {
                if (e.keyCode === 13) {
                    this.generateSpinner(e.target.closest('.e-upload'));
                }
            };
        } else {
            hideSpinner(uploadWrapper);
            detach(uploadWrapper.querySelector('.e-spinner-pane'));
        }
    };

    public generateSpinner(targetElement: HTMLElement): void {
        createSpinner({ target: targetElement, width: '25px' });
        showSpinner(targetElement);
    }
}
