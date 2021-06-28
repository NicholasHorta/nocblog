import { Component, OnInit, ViewChild } from '@angular/core';
import content from '../json/content.json';
import { MenuService } from '../services/menu.service';

@Component({
    selector: 'app-global-topics',
    templateUrl: './global-topics.component.html',
    styleUrls: ['./global-topics.component.css']
})

export class GlobalTopicsComponent implements OnInit {

    @ViewChild('menuToggleBtn') menuToggleBtn;

    constructor(private menuSVC: MenuService){}

    htmlCssTopics = content[0];
    javascriptTopics = content[1];
    angularTopics = content[2];
    reactTopics = content[3];
    golangTopics = content[4];
    currentMenuOption: string;

    ngOnInit(){
        this.currentMenuOption = this.menuSVC.currentMenuOption;
    }

    toggleMenuHandler(){
        this.menuToggleBtn.nativeElement.classList.toggle('toggleBtnDrawer');
        this.menuToggleBtn.nativeElement.nextSibling.classList.toggle('toggleMenuDrawer');
        console.log(this.currentMenuOption);
    }
}