import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreadcrumbsService } from '../services/breadcrumbs.service';
/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
@Component({
  selector: 'nio-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public prefix = '';

  public urls: string[] = [];
  public routerSubscription: any;

  constructor(
    private _router: Router,
    private _breadcrumbService: BreadcrumbsService
  ) {
    this.routerSubscription = this._router.events.subscribe(
      (navigationEnd: NavigationEnd) => {
        if (navigationEnd instanceof NavigationEnd) {
          this.urls.length = 0; // Fastest way to clear out array
          this.generateBreadcrumbTrail(
            navigationEnd.urlAfterRedirects
              ? navigationEnd.urlAfterRedirects
              : navigationEnd.url
          );
        }
      }
    );
  }

  public ngOnInit(): void {
    if (this.prefix.length > 0) {
      this.urls.unshift(this.prefix);
    }
  }

  public ngOnChanges(changes: any): void {
    if (!this.urls) {
      return;
    }

    this.urls.length = 0;
    this.generateBreadcrumbTrail(this._router.url);
  }

  public generateBreadcrumbTrail(url: string): void {
    if (!this._breadcrumbService.isRouteHidden(url)) {
      // Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
      this.urls.unshift(url);
    }

    if (url.lastIndexOf('/') > 0) {
      // Find last '/' and add everything before it as a parent route
      this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/')));
    } else if (this.prefix.length > 0) {
      this.urls.unshift(this.prefix);
    }
  }

  public navigateTo(url: string): void {
    this._router.navigateByUrl(url);
  }

  public friendlyName(url: string): string {
    return !url ? '' : this._breadcrumbService.getFriendlyNameForRoute(url);
  }

  public ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
