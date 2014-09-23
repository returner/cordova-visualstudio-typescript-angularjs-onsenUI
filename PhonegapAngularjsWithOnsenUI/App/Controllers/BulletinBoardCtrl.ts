module CordovaOnsen.Controllers {
    export class BulletinBoardCtrl extends CordovaOnsenControllerBase  {
        constructor(private $scope: CordovaOnsen.Interfaces.ICordovaOnsenScope, private $rootScope: CordovaOnsen.Interfaces.ICordovaOnsenRootScope, private $location: ng.ILocationService, private $http: ng.IHttpService, private $compile: ng.ICompileService) {
            super();
            this.logWrite ("BulletinBoardCtrl into");
            
            this.$scope.vm = this;
            this.menuTitle = "상황판";
            this.authValidate(this.$rootScope);
        }
	}
}