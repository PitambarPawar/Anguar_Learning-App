import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:`
    <div class=hover>
        <div class=test>Name: {{event.name}}</div>
        <div class=test>Price: $ {{event.price}}</div>
        <div class=test>Location: {{event.Location}}</div>
    </div>
    <button class="btn btn-primary" (click)="handleClickEvent()">Click Me!!</button>
    `
})

export class EventThumbnailComponent{
    @Input() event:any;
    @Output() eventMsg= new EventEmitter();

    handleClickEvent(){
        this.eventMsg.emit(this.event.name);
    }
}