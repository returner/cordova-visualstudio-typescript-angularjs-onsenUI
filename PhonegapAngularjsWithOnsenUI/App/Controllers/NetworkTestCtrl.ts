module CordovaOnsen.Controllers {
    export class NetworkTestCtrl extends CordovaOnsenControllerBase {
        constructor(private $scope: CordovaOnsen.Interfaces.ICordovaOnsenScope, private $rootScope: CordovaOnsen.Interfaces.ICordovaOnsenRootScope, private $location: ng.ILocationService, private $http: ng.IHttpService, private $compile: ng.ICompileService) {
            super();
            this.$scope.vm = this;

            this.menuTitle = "통신 테스트";

        }
    }
} 