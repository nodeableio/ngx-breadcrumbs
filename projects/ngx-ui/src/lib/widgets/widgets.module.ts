import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NioDividerComponent } from './components/index';
import { NioUploadComponent } from './components/upload/upload.component';
import { UploaderModule } from '@syncfusion/ej2-ng-inputs';

@NgModule({
    imports: [CommonModule, UploaderModule],
    declarations: [NioDividerComponent, NioUploadComponent],
    exports: [NioDividerComponent, NioUploadComponent]
})
export class NioWidgetsModule {}
