import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  qwe: string = 'html-css';

  cxz(q: string){
    this.qwe = q
  }

}
