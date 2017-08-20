## this is a work in progress and is not ready for use 

# ngx-breadcrumbs
This is an angular 4+ component that creates a breadcrumbs trail. It hooks into the angular router, and dynamically builds up a breadcrumbs trail

It is mainly based on the [ng2-breadcrumb project] (https://github.com/gmostert/ng2-breadcrumb ) , with changes for semantic ui and a new build system

It interprets the browser URL of a navigate request, in the same way the component router does to match a path to a specific component, to build up a hierarchy of available parent/child routes for that destination.

So given a navigation request to a url '/comp1/comp2/comp3', a breadcrumb trail with 3 levels will be generated. Each level includes all the elements from the previous level along with the next child. Thus the above url request will result in the following 3 levels being generated: '/comp1', '/comp1/comp2', '/comp1/comp2/comp3'.

Theres a breadcrumbService that allows you to add friendly names for each of your app's available routes. This friendly name will show up in the breadcrumb trail for each matching level, otherwise it will show the last url fragment.

## Dependencies
Optionally uses semantic-ui for styling of some elements

## Install
Install the module via npm:

    npm install @nodeableio/ngx-breadcrumbs --save

## Usage
Import the this module into your module using forRoot()

    import { NioBreadcrumbsModule } from '@nodeableio/ngx-breadcrumbs';

	@NgModule({
        imports: [NioBreadcrumbsModule.forRoot()]
    })
    export class AppModule {
        ...
    }

Inject the NioBreadcrumbsService into your component to map your routes

    export class AppComponent {
        constructor(private _breadcrumbService: NioBreadcrumbsService) {
        }
    }

Place the breadcrumb selector in your component's html where you added your router-outlet:

	<nio-breadcrumbs></nio-breadcrumbs>
	<router-outlet></router-outlet>

## Directives
`prefix: string` to have a static prefix as the first breadcrumb which routes to the base root when clicked.

	<nio-breadcrumbs prefix="App Title"></nio-breadcrumbs>
    
## NioBreadcrumbsService
Add friendly names for each of your app's routes (paths). Can also specify regular expressions to match routes and assign a friendly name.

    NioBreadcrumbsService.addFriendlyNameForRoute('/home', 'Home Sweet Home');
    NioBreadcrumbsService.addFriendlyNameForRoute('/home/users', 'All users');
    NioBreadcrumbsService.addFriendlyNameForRouteRegex('/home/users/[0-9]/info', 'Information');
    
Specify a callback function that will supply a name for a specific route or regex. 
This is intended to be used when a route contains path params. It allows you display a specific name for the given id contained in the route url.
    
    NioBreadcrumbsService.addCallbackForRoute('/home/users/1', this.getNameForUser);
    NioBreadcrumbsService.addCallbackForRouteRegex('^/home/users/[0-9]$', this.getNameForUser);
    
    getNameForUser(id:string):string {
        return 'specific name for user with id';
    }
    
Hide certain routes (paths) from the breadcrumb trail using an exact url or regex.
    
    NioBreadcrumbsService.hideRoute('/home/secret');
    NioBreadcrumbsService.hideRouteRegex('^/home/secret/[a-zA-Z]');

## Build

    npm install
    npm build