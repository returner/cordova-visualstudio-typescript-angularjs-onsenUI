
module CordovaOnsen.Utils {
    export class WebHttpTransfer {
        private loginManager: CordovaOnsen.Utils.AuthManager;
        constructor(private $http: ng.IHttpService) {
            $.support.cors = true;
            this.loginManager = new CordovaOnsen.Utils.AuthManager();
        }

        private postTransfer(isShowLoadingBar: boolean, isUseAuth : boolean, url: string, sendData: any, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var token = this.loginManager.getAuthToken();
            if (isUseAuth) {
                if (token == null) {
                    var param = encodeURIComponent(window.location.href);
                    var authUrl = "/cashview/web/#/Login/?callback=" + param;
                    window.location.href = authUrl;
                }
            }
            
            this.$http.post(url, sendData, {
                headers: {
                    Authorization: token
                }
            }).success((data, status, headers, config) => {
                    if (successCallbackFn) {
                        successCallbackFn(data);
                    }
                }).error((data, status, headers, config) => {
                    

                    if (status == 401) {
                        var param = encodeURIComponent(window.location.href);
                        var authUrl = "/authorization/home/login/?callback=" + param;
                        window.location.href = authUrl;

                    }

                    if (errorCallbackFn) {
                        errorCallbackFn(data);
                    }
                })
                .then(() => {
                    
                });
        }

        private loginTransfer(isShowLoadingBar: boolean, url: string, sendData: any, successCallbackFn?: Function, errorCallbackFn?: Function) {
            $.ajax({
                url: url,
                type: "Post",
                dataType: "json",
                data: {
                    grant_type: "password",
                    username: sendData.UserName,
                    password: sendData.Password
                },
                    contentType: "application/x-www-form-urlencoded",
                    success: function (menus) {
                        if (successCallbackFn) {
                            successCallbackFn(menus);
                        }

                    },
                    error: function (msg, status) {
                        
                        if (errorCallbackFn) {
                            errorCallbackFn(msg, status);
                        }
                    },
                    complete: function () {
                        
                    }
                });
        }

        private getTransfer(isShowLoadingBar: boolean, isUseAuth: boolean, url: string, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var token = this.loginManager.getAuthToken();
            if (isUseAuth) {
                if (token == null) {
                    var param = encodeURIComponent(window.location.href);
                    var authUrl = "/cashview/web/#/Login/?callback=" + param;
                    window.location.href = authUrl;
                }
            }
            
            this.$http.get(url, {
                headers: {
                    Authorization: token
                }
            }).success((data, status, headers, config) => {
                    if (successCallbackFn) {
                        successCallbackFn(data);
                    }
                }).error((data, status, headers, config) => {
                    
                    if (status == 401) {
                        var param = encodeURIComponent(window.location.href);
                        var authUrl = "/cashview/web/login/?callback=" + param;
                        window.location.href = authUrl;

                    }
                    if (errorCallbackFn) {
                        errorCallbackFn(data);
                    }
                }).then(() => {
                    
                });
        }

        public registerUser(data: CordovaOnsen.Models.RegisterBinding, successCallbackFn?: Function, errorCallbackFn?: Function) {
            //회원가입
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("account/register");
            this.postTransfer(true,false, url, data, successCallbackFn, errorCallbackFn);
        }

        public login(data: CordovaOnsen.Models.Login, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("account/login");
            this.loginTransfer(true, url, data, successCallbackFn, errorCallbackFn);
        }

        public logOff(data: CordovaOnsen.Models.CommonRemove, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("account/logout");
            this.postTransfer(true, true, url, data, successCallbackFn, errorCallbackFn);
        }

        public saveAccount(data: CordovaOnsen.Models.RegisterBinding, successCallbackFn?: Function, errorCallbackFn?: Function) {
            // 추가 사용자 저장
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("account/registuser");
            this.postTransfer(true, true, url, data, successCallbackFn, errorCallbackFn);
        }
        public modifyAccount(data: CordovaOnsen.Models.RegisterBinding, successCallbackFn?: Function, errorCallbackFn?: Function) {
            // 추가 사용자 수정
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("account/registuser");
            this.postTransfer(true, true, url, data, successCallbackFn, errorCallbackFn);
        }

        public changePassword(data: CordovaOnsen.Models.ChangePassword, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("account/changepassword");
            this.postTransfer(true, true, url, data, successCallbackFn, errorCallbackFn);
        }

        public getOwnerInfo(successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("companyUser?$filter=enTecalogUserRole+eq+0");
            this.getTransfer(true, true, url, successCallbackFn, errorCallbackFn);
        }

        public setUserPeriod(data: CordovaOnsen.Models.UserPeriod, successCallbackFn?: Function, errorCallbackFn?: Function) {
            var url = CordovaOnsen.Utils.HostManager.buildHostUrl("companyuser/period");
            this.postTransfer(true, true, url, data, successCallbackFn, errorCallbackFn);
        }
    }
}