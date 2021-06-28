import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private menuSVC: MenuService) { }

  menuSub: Subscription

  ngOnInit(): void {
  }

  menuSelectHandler(selectedOpt: string){
    this.menuSVC.currentMenuOptionHandler(selectedOpt)
  }

}
