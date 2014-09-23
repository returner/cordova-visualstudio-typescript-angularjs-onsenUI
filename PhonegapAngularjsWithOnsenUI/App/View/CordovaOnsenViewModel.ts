module CordovaOnsen.View {
	export class MainController {
		constructor() {
			var ngApp = angular.module("CordovaOnsen", ['onsen.directives','ngResource']);
			
            ngApp.controller("BulletinBoardCtrl", ["$scope","$rootScope", "$location", "$http", "$compile", CordovaOnsen.Controllers.BulletinBoardCtrl]);
            ngApp.controller("DeliveryPlanManagerCtrl", ["$scope", "$rootScope", "$location", "$http", "$compile", CordovaOnsen.Controllers.DeliveryPlanManagerCtrl]);
            ngApp.controller("NetworkTestCtrl", ["$scope", "$rootScope", "$location", "$http", "$compile", CordovaOnsen.Controllers.NetworkTestCtrl]);
            ngApp.controller("LoginCtrl", ["$scope", "$rootScope", "$location", "$http", "$compile", CordovaOnsen.Controllers.LoginCtrl]);
            ngApp.controller("RegisterCtrl", ["$scope", "$rootScope", "$location", "$http", "$compile", CordovaOnsen.Controllers.RegisterCtrl]);

		}
	}
}

 document.addEventListener('deviceready', function () {
            // Sample code for Status Bar handling depending on preferences
            // StatusBar.overlaysWebView(false);                                 defaults to true
            // StatusBar.backgroundColorByHexString("#C9C9C9");                  defaults to black
            // StatusBar.styleDefault();                                         dark text on lighter bg
			console.log("device ready");
			
        })

new CordovaOnsen.View.MainController();


toastr.options = {
    closeButton: false,
    debug: false,
    positionClass: "toast-top-full-width",
    showDuration: 300,
    hideDuration: 600,
    timeOut: 1000,
    extendedTimeOut: 1000,
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};