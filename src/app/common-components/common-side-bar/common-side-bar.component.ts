import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-common-side-bar',
  templateUrl: './common-side-bar.component.html',
  styleUrls: ['./common-side-bar.component.scss']
})
export class CommonSideBarComponent implements OnInit{
  menuRoutes: any = [
     { name: 'Dashboard',icon: 'assets/images/sprite-icons.svg#dashboard-icon', route: '/dashboard', permission:''},
     { name: 'Call History',class: 'fas fa-blender-phone', route: '/call-history',permission:'Permissions.MenuCallHistory.View'},
     { name: 'Members',class: 'fas fa-hands-helping', route: '/members',permission:'Permissions.MenuMembers.View'},
     { name: 'Shift Schedule',class: 'fas fa-calendar', route: '/shift-schedule',permission:'Permissions.MenuShiftSchedules.View'},
     { name: 'Contact',class: 'fas fa-phone', route: '/contact',permission:'Permissions.MenuContacts.View'},
     { name: 'RBAC',class: 'fas fa-user-plus', route: '/rbac',permission:'Permissions.MenuRBAC.View'},
     { name: 'Admin Panel',class: 'fas fa-user-cog', route: '/admin-panel',permission:'Permissions.MenuAdminPanel.View'},
     { name: 'Reports',class: 'fa-solid fa-chart-column', route: '/report',permission:'Permissions.MenuReports.View'},
     { name: 'Admin Report',class:'fas fa-sign-in-alt', route: '/admin-report',permission:'Permissions.MenuUserLogins.View'},
  ]

 constructor(private authService:AuthService){
   //this.permissions =  this.authService.userInfo$.value.data.permissions;
 }

   ngOnInit(): void {
   }
}
