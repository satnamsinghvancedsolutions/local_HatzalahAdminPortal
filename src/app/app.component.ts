import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HatzalahAdminPortal';
  isHeaderVisable = false;
  parentRouteName = '';
  constructor(
    private location: Location,
    public router: Router
  ){
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.parentRouteName = event.snapshot.url.length
          ? event.snapshot.url[0].path
          : "empty";
        if (
          this.parentRouteName === "account" ||
          this.parentRouteName === "login"
        ) {
          this.isHeaderVisable = false;
        } else {
          this.isHeaderVisable = true;
        }
      }
    });
    if (this.location.path() === '/' || this.location.path() === '') {
      this.router.navigate(["/account/login"]);
    }
  }
}
