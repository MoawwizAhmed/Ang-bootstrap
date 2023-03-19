import { Component } from "@angular/core"
import { Subject, takeUntil } from "rxjs";
import { MessagesService } from "./messages.service";

@Component({
  templateUrl:'./message.component.html'
})
export class MessagesComponent{

  notifier : Subject<any> = new Subject<any>();
  constructor(private messagesService: MessagesService){
    this.initSubscription();
  }
  initSubscription(){
    this.messagesService.getMessage().pipe(takeUntil(this.notifier)).subscribe(msg=>{
      if(msg){
        if(msg.called != undefined){
          alert(msg.called)
        }
        if(msg.sent != undefined){
          alert(msg.sent);
        }
      }
    });
  }

  callMe(){
    this.messagesService.sendMessage({called: "You have been called by rogue knight!!"});
  }

  sendMe(){
    this.messagesService.sendMessage({sent: "You have been sent by skeleton king"});
  }

  ngOnDestroy(){
    this.notifier.next("");
    this.notifier.complete();
  }
}
