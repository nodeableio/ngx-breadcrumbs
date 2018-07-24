import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NioUploadComponent } from './upload.component';

describe('UploadComponent', () => {
    let component: NioUploadComponent;
    let fixture: ComponentFixture<NioUploadComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NioUploadComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NioUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
