export class MenuService {

    menuIsExpandedOut: boolean = false;
    currentMenuItem: string;

    menuDrawerHandler(selectedOpt: string) {
        return this.currentMenuItem = selectedOpt;
    }    
}