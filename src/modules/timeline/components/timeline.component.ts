import { Component, ViewChild, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import moment from 'moment-es6';

export interface INioTimeLineItemInterface {
    date:Date;
    time?:string;
    title?:string;
    subtitle?:string;
    subtitle2?:string;
    content?:string;
    displayDate?:string;
    payload?:any;
    class?:string;
    id?:number;
}

export interface INioTimelineButtonClick {
    action:string;
    item:INioTimeLineItemInterface;
}

@Component({
    selector: 'nio-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})

export class NioTimelineComponent implements OnChanges {
    @Input()  public items:any = [];
    @Input()  public descending:boolean = true;
    @Input()  public dateformat:string = 'MMMM Do YYYY';
    @Input()  public timeformat:string = 'h:mm:ss a';
    @Input()  public periodTitles:boolean = true;
    @Input()  public removeButton:boolean = false;
    @Input()  public editButton:boolean = false;
    @Input()  public map:any;

    @Output() public buttonClicked:EventEmitter<INioTimelineButtonClick> = new EventEmitter<INioTimelineButtonClick>();

    public displayItems:INioTimeLineItemInterface[] = [];

    public ngOnChanges():void {

        if (!!this.items) {
            this.map = { date: 'date', content: 'content', title: 'title', subtitle: 'subtitle', subtitle2: 'subtitle2', ...this.map };

            this.displayItems = [];

            const periods = new Set();

            this.items.forEach((item:any, index:number) => {
                const date = moment(item[this.map.date]).toDate();

                let newItem:INioTimeLineItemInterface = {
                    date,
                    time: moment(date).format(this.timeformat),
                    title: item[this.map.title],
                    subtitle: item[this.map.subtitle],
                    subtitle2: item[this.map.subtitle2],
                    content: item[this.map.content],
                    id: index,
                    payload: item,
                    displayDate: moment(date).format(this.dateformat)
                };

                this.displayItems.push(newItem);

                const period = moment(newItem.date).format('MMMM YYYY');

                if (!periods.has(period)) {
                    periods.add(period);

                    const periodDate = moment(date)[this.descending ? 'endOf' : 'startOf']('month');

                    newItem = {
                        class: 'nio-timeline-period',
                        title: period,
                        date: periodDate.toDate(),
                        content: ''
                    };

                    this.displayItems.push(newItem);
                }
            });

            if (this.descending) {
                this.displayItems.sort((a, b) => a.date > b.date ? -1 : 1);
            } else {
                this.displayItems.sort((a, b) => a.date < b.date ? -1 : 1);
            }

        }
    }

    public onEditClick(item:INioTimeLineItemInterface):void {
        this.buttonClicked.emit({ action: 'edit', item: item.payload });
    }

    public onRemoveClick(item:INioTimeLineItemInterface):void {
        this.buttonClicked.emit({ action: 'remove', item: item.payload });
    }

}
