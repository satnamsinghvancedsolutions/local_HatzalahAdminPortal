import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  public loginForm: FormGroup;
  public showLoader = false;
  private destroy$ = new Subject<void>();
  public errorMessage: any;
  agency: any;
  serverImage: any = {}
  public flag = {
    submitted: false
  }

  constructor(
    // private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private dialog:MatDialog,
    // private adminPanelConfigService: AdminPanelInfoGridConfigService
  ) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.initialLoad();
  }

  public initialLoad() {

    this.loginForm.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => (this.errorMessage = null));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  public login() {
    if(this.loginForm.valid){
      this.showLoader = true;
      // this.authService
      //   .login(
      //     this.loginForm.get("username")?.value,
      //     this.loginForm.get("password")?.value
      //   )
      //   .pipe(takeUntil(this.destroy$))
      //   .subscribe({
      //     next:(value: any) => {
      //       if(value.data != null){
      //         // localStorage.setItem(StorageKeyEnum.User, JSON.stringify(value.data.userInfoDto));
      //         // localStorage.setItem(StorageKeyEnum.TokenInfo, JSON.stringify(value.data.tokens));
      //         // localStorage.setItem(StorageKeyEnum.Permissions, JSON.stringify(value.data.permissions));
      //         // this.router.navigate(["/dashboard"]);
      //       }else{
      //         this.showLoader = false;
      //         this.errorMessage = value.errors[0];
      //       }
      //     },error:(err: any) => {
      //       this.showLoader = false;
      //       this.errorMessage = err.error.message;
      //     }
      //   });
    }
    else{
      this.flag.submitted = true
    }

  }
  forgorPassword(){
    this.dialog
    .open(ForgotPasswordComponent, {
      width: '600px',
      data: {
        thankYou: 'thankYou',


      },
    })
  }

  openDataVanced(){
    window.open('https://datavanced.com','_blank')
  }
}
