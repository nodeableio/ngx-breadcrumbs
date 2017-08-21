    const content = 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.';
    
        this.timeline = [
          {
            titlex: 'Event Title',
            date: new Date(2016, 3, 12),
            content
          },
    
          {
            titlex: 'Event Title',
            date: new Date(2016, 3, 23),
            content
          },
    
          {
            titlex: 'Event Title',
            date: new Date(2016, 4, 23),
            content
          },
    
          {
            titlex: 'Event Title',
            date: new Date(2016, 4, 23),
            content
          },
    
          {
            titlex: 'Event Title',
            date: new Date(2016, 4, 26),
            content
          }
        ]

<nio-timeline [items]="timeline" [map]="{title: 'titlex'}"></nio-timeline>