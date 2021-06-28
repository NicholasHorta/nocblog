import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() zxc = new EventEmitter<string>()

  constructor(private menuSVC: MenuService) { }

  ngOnInit(): void {
  }

  menuSelectHandler(selectedOpt: string){
    this.zxc.emit(selectedOpt)
  }

}
