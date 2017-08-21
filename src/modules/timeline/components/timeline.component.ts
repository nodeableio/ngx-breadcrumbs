import { Component, ViewChild, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import moment from 'moment-es6';

export interface NioTimeLineItemInterface {
    date: Date;
    time?: string;
    title?: string;
    subtitle?: string;
    subtitle2?: string;
    content?: string;
    displayDate?: string;
    payload?: any;
    class?: string;
    id?: number;
};

export interface INioTimelineButtonClick {
    action: string;
    item: NioTimeLineItemInterface;
}

@Component({
    selector: 'nio-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})

export class NioTimelineComponent implements OnChanges {
    @Input() items:any = [];
    @Input() descending = true;
    @Input() dateformat = 'MMMM Do YYYY';
    @Input() timeformat = 'h:mm:ss a';
    @Input() periodTitles = true;
    @Input() removeButton = false;
    @Input() editButton = false;
    @Input() map:any;

    @Output() buttonClicked = new EventEmitter<INioTimelineButtonClick>();

    displayItems: NioTimeLineItemInterface[] = [];

    ngOnChanges() {

        if (!!this.items) {
            this.map = Object.assign({ date: 'date', content: 'content', title: 'title', subtitle: 'subtitle', subtitle2: 'subtitle2' }, this.map);

            this.displayItems = [];

            const periods = new Set();

            this.items.forEach((item: any, index: number) => {
                const date = moment(item[this.map.date]).toDate();

                let newItem: NioTimeLineItemInterface = {
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

    onEditClick(item: NioTimeLineItemInterface) {
        this.buttonClicked.emit({ action: 'edit', item: item.payload });
    }

    onRemoveClick(item: NioTimeLineItemInterface) {
        this.buttonClicked.emit({ action: 'remove', item: item.payload });
    }

}
