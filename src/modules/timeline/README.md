# ngx-timeline
This is an angular 4+ component that creates a vertical timeline of events

It uses css based on css written by [Brady Wright] (http://codepen.io/phasethree/pen/NNOvrW)

## Dependencies
moment.js
Uses semantic-ui for styling of some elements

## Install
Install the module via npm:

    npm install @nodeableio/ngx-ui --save

## Usage
Import the this module into your module using forRoot()

    import { NioTimelineModule } from '@nodeableio/ngx-ui';

	@NgModule({
        imports: [NioTimelineModule]
    })
    export class AppModule {
        ...
    }

Place the timeline selector in your component's html :

	<nio-timeline></nio-timeline>

## Directives
* `items: array` the list of items to show in the timeline
* `descending: boolean` show the timeline descending (default) or ascending
* `dateformat: string`  moment format for display of date (default 'MMMM Do YYYY');
* `timeformat: string`  moment format for display of time (default 'h:mm:ss a');
* `periodTitles: boolean` show the period titles (default true)
* `removeButton: boolean` show a remove button on hover (default false)
* `editButton: boolean` show an edit button on hover (default false)
* `map: object` map item fields to the fields expected by timeline (see below)

### map
the map directive allows you to map fields from your items to the format expected by the timeline component. The timeline component expects the following fields

 - date  
 - content 
 - title 
 - subtitle 
 - subtitle2
so, for example, if your items have `dateCreated` and `description` you would pass 

    [map]="{ date: 'dateCreated', content: 'description'}"

## Events
`buttonClicked:EventEmitter<INioTimelineButtonClick>` emitted when either the edit or remove button is clicked

## Build

    yarn
    yarn build