import { Component } from '@angular/core'

@Component({
    selector:'events-list',
    template:`
    <div>
       <h2> Here is Events-List</h2>
    </div>
    <hr>
    <event-thumbnail [event]="events"  (eventMsg) = "HandledEvent($event)"></event-thumbnail>
    `
})

export class EventListComponent{
    events={
        id:1,
        name:'RK',
        price:64,
        Location:'Mumbai'
    }

    HandledEvent(data){
        console.log("Received = " + data);
    }
}