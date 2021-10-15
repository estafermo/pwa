import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { interval } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UpdateService {

    constructor(public updates: SwUpdate) {
      updates.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
      });
      updates.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
      });
      if (updates.isEnabled) {
        console.log("constructor");
        interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate() // 6000 //6 * 60 * 60
          .then(() => console.log('checking for updates')));
      }
    }
  
    public checkForUpdates(): void {
      console.log("method");
      this.updates.available.subscribe(event => this.promptUser());
    }
  
    private promptUser(): void {
      console.log('updating to new version');
      this.updates.activateUpdate().then(() => document.location.reload()); 
    }
}