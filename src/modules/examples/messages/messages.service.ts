import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesService{
  private messages:Subject<any> = new Subject<any>;

  sendMessage(msg: any){
    this.messages.next(msg);
    this.clearMessage();
  }
  clearMessage(){
    this.messages.next("")
  };
  getMessage(){
    return this.messages.asObservable();
  }

}
