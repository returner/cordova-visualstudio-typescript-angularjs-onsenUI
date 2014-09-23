module CordovaOnsen.Controllers {
    export class RegisterCtrl extends CordovaOnsenControllerBase {
        public registerInfo: CordovaOnsen.Models.RegisterBinding;

        constructor(private $scope: CordovaOnsen.Interfaces.ICordovaOnsenScope, private $rootScope: CordovaOnsen.Interfaces.ICordovaOnsenRootScope, private $location: ng.ILocationService, private $http: ng.IHttpService, private $compile: ng.ICompileService) {
            super();
            this.$scope.vm = this;
            this.menuTitle = "회원가입";

            this.registerInfo = new CordovaOnsen.Models.RegisterBinding();
            this.registerInfo.Code = "TE";
        }

        public register() {
            this.logWrite("login Info : ", this.registerInfo);
        }
    }
} 