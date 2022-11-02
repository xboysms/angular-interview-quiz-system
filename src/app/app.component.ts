import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-UI-Interview-14';
  showHeader: boolean = false;
  showSidebar: boolean = false;
  @ViewChild('rightContent', {static: false}) rightContent: ElementRef = {} as ElementRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
  }

  dashboardElementHeight: number = 0;
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }

  switchNav(event: boolean) {
    this.showSidebar = !this.showSidebar;
  }
}
