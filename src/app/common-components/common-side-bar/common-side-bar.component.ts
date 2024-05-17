import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-common-side-bar',
  templateUrl: './common-side-bar.component.html',
  styleUrls: ['./common-side-bar.component.scss']
})
export class CommonSideBarComponent implements OnInit{
  menuRoutes: any = [
     { name: 'Important Numbers',icon: 'assets/images/sprite-icons.svg#dashboard-icon', route: '/important-numbers'},
     { name: 'Hospital',class: 'fas fa-blender-phone', route: '/hospital'}
  ]

 constructor(private authService:AuthService){
   //this.permissions =  this.authService.userInfo$.value.data.permissions;
 }

   ngOnInit(): void {
   }
}
