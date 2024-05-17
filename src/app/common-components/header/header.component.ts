import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  private destroy$ = new Subject<void>();
  menuSidePanelData: any;
  @ViewChild('menuSideNav') public menuSideNav: MatSidenav;
  tokenInfo: any;

  constructor(private sideNavService: SidenavService,
    private authService: AuthService,
    private router: Router,
  ){
    this.sideNavService.sidenavData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if(res?.Menu){
          this.menuSidePanelData = res.Menu;
        }else{
          this.menuSidePanelData = null;
        }
      });

      this.router.events.subscribe(event => {
        this.sideNavService.close();
     });
  }

  ngOnInit(): void {
    this.tokenInfo = this.authService.userInfo$.value.data.tokens;
  }

  openMenuSidebar(){
    this.sideNavService.setSidenav(this.menuSideNav);
    if (this.tokenInfo.userID) {
      var itemId=this.tokenInfo.userID;
        this.sideNavService.openSidePanel({Menu: itemId});
    }
  }

  close(): void {
    this.sideNavService.close();
  }

}
