/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../models/login.ts" />
/// <reference path="../../scripts/typings/jstorage/jstorage.d.ts" />
/// <reference path="../models/logininfo.ts" />
module CordovaOnsen.Utils {
    export class AuthManager {
        
        public getRememberIsUserName():boolean {
            var rememberuserName = <boolean>($.jStorage.get("CASHVIEW_REMEMBER_USERNAME"));
            if (rememberuserName) {
                return rememberuserName;
            }
            return false;
        }

        public setRememberIsUserName(isRemember : boolean) {
            $.jStorage.set("CASHVIEW_REMEMBER_USERNAME", isRemember);
        }

        public isLogin() : boolean {
            var loginInfo = this.getLoginInfo();
            if (loginInfo == null) {
                return false;
            }
            return true;
        }
        public setRememberUserName(userName: string) {
            $.jStorage.set("CASHVIEW_LOGIN_USERNAME", userName);
        }
        public getRememberUserName(): string {
            return <string>$.jStorage.get("CASHVIEW_LOGIN_USERNAME");
        }
        public setLoginInfo(loginInfo: CordovaOnsen.Models.LoginInfo) {
            $.jStorage.set("CASHVIEW_LOGIN_INFO", loginInfo);
        }

        public getLoginInfo(): CordovaOnsen.Models.LoginInfo {
            return <CordovaOnsen.Models.LoginInfo>$.jStorage.get("CASHVIEW_LOGIN_INFO");
        }

        public getAuthToken() {
            var loginInfo = this.getLoginInfo();

            if (loginInfo) {
                return loginInfo.TokenType + " " + loginInfo.AccessToken;
            }

            return null;
        }

        public removeInfo() {
            $.jStorage.deleteKey("CASHVIEW_LOGIN_INFO");
        }

        public getDomainId() : string {
            var loginInfo = this.getLoginInfo();
            return loginInfo.DomainId;
        }
    }

    
}