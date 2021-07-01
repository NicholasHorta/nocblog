import { Component, EventEmitter, Output } from '@angular/core';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() alterMenuTopic = new EventEmitter<string>()

  constructor(private menuSVC: MenuService) { }

  menuSelectHandler(selectedOpt: string) {
    this.menuSVC.menuDrawerHandler(selectedOpt)
    this.alterMenuTopic.emit(selectedOpt)
  }

}
