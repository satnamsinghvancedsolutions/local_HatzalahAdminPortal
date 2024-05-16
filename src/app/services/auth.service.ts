import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageKeyEnum } from '../core/StorageKeyEnum';
import { LoginModel, TokenInfo, UserInfo } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo$ = new BehaviorSubject<LoginModel>({data: {
    tokens : this.getTokenInfo(),
    userInfoDto:this.getUserInfo()
  }
});
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  options = { headers: this.headers };
  apiUrl=environment.apiUrl + "/api/Authorize";

  constructor(private http: HttpClient,
    public router: Router
  ) { }


  public login(username: string, password: string) {
    const data = JSON.stringify({ username, password });
    return this.http.post(`${this.apiUrl}/GetTokenByUsername`, data, this.options).pipe(
      tap((usr: any) => {
        this.userInfo$.next(usr);
      })
    );
  }

  public getUserInfo(): any{
    const userData = JSON.parse(localStorage.getItem(StorageKeyEnum.User) || null as any) as UserInfo
    if (userData) {
      return userData;
    } else {
      return null;
    }
  }

  public getTokenInfo(): any {
    const tokenData = JSON.parse(localStorage.getItem(StorageKeyEnum.TokenInfo) || null as any) as TokenInfo
    if (tokenData) {
      return tokenData;
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(StorageKeyEnum.User);
  }

  public logOut() {
    this.router.navigate(['/account/login'])
    localStorage.clear();
    localStorage.removeItem(StorageKeyEnum.User);
    localStorage.removeItem(StorageKeyEnum.TokenInfo);
  }


}
