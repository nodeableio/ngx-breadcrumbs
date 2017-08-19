export const html = `
<div class="ui nio breadcrumb">
    <span *ngFor="let url of _urls; let last = last" class="section" [ngClass]="{'active': last}">
        <a class="nio breadcrumb path" *ngIf="!last && url == prefix" (click)="navigateTo('/')">{{url}}</a>
        <a class="nio breadcrumb path" *ngIf="!last && url != prefix" (click)="navigateTo(url)">{{friendlyName(url)}}</a>

        <span *ngIf="last" class="nio breadcrumb last path">{{friendlyName(url)}}</span>
        <span *ngIf="last && url == prefix" class="nio breadcrumb last path" >{{friendlyName('/')}}</span>

        <div *ngIf="!last" class="divider">/</div>
    </span>
</div>
`;
