import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { NioBreadcrumbsService } from './breadcrumbs.service';
/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
@Component({
    selector: 'nio-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})

export class NioBreadcrumbComponent implements OnInit, OnChanges {
    @Input() prefix:       string  = '';

    public _urls: string[] = new Array();
    public _routerSubscription: any;

    constructor(
        private router: Router,
        private breadcrumbService: NioBreadcrumbsService
    ) {
        this._routerSubscription = this.router.events.subscribe((navigationEnd: NavigationEnd) => {
            if (navigationEnd instanceof NavigationEnd) {
                this._urls.length = 0; //Fastest way to clear out array
                this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
            }
        });
    }

    ngOnInit(): void {
        if (this.prefix.length > 0) {
            this._urls.unshift(this.prefix);
        }
    }

    ngOnChanges(changes: any): void {
        if (!this._urls) {
            return;
        }

        this._urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    }

    generateBreadcrumbTrail(url: string): void {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this._urls.unshift(url);
        }

        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        } else if (this.prefix.length > 0) {
            this._urls.unshift(this.prefix);
        }
    }

    navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    friendlyName(url: string): string {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    }

    ngOnDestroy(): void {
        this._routerSubscription.unsubscribe();
    }

}