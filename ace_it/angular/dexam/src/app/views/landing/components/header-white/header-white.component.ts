import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Inject,
  Input
} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW_PROVIDERS, WINDOW } from "../../helpers/window.helpers";


@Component({
  selector: 'app-header-white',
  templateUrl: './header-white.component.html',
  styleUrls: ['./header-white.component.scss']
})
export class HeaderWhiteComponent implements OnInit {

  isFixed;
  public isCollapsed = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    if (offset > 10) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  buyEgret() {
    this.window.open(
      "https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi"
    );
  }

}
