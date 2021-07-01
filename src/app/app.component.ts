import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuTopic: string = 'html-css';

  alterMenuRequest(rxTopic: string){
    this.menuTopic = rxTopic;
  }

}
