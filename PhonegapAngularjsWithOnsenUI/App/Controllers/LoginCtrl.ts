module CordovaOnsen.Controllers {
    export class LoginCtrl extends CordovaOnsenControllerBase {
        public loginInfo: CordovaOnsen.Models.Login;

        constructor(private $scope: CordovaOnsen.Interfaces.ICordovaOnsenScope, private $rootScope: CordovaOnsen.Interfaces.ICordovaOnsenRootScope, private $location: ng.ILocationService, private $http: ng.IHttpService, private $compile: ng.ICompileService) {
            super();
            this.logWrite("LoginCtrl constructor into");
            this.$scope.vm = this;
            this.menuTitle = "로그인";

            this.loginInfo = new CordovaOnsen.Models.Login();
        }

        public login() {
            this.logWrite("login Info : ", this.loginInfo);
            if (typeof (this.loginInfo.UserName) == "undefined" || this.loginInfo.UserName == "") {
                this.logWrite("이메일 형식이 잘못되었습니다");
                toastr.error("이메일 형식이 잘못되었습니다", "안내");
            }

        }
    }
} 