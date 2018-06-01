import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowlModule, Growl } from 'primeng/growl';
import { NioToastService } from './toast.service';
import { NioToastComponent } from './components/toast.component';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
    imports: [CommonModule, GrowlModule],

    entryComponents: [],

    providers: [NioToastService, MessageService],

    declarations: [NioToastComponent],

    exports: [NioToastComponent]
})
export class NioToastModule {}
