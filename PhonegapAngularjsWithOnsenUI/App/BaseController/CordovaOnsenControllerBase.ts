module CordovaOnsen.Controllers {
    export class CordovaOnsenControllerBase implements CordovaOnsen.Interfaces.ICordovaOnsenController {
        public menuTitle: string;
        public authManager: CordovaOnsen.Utils.AuthManager;

        constructor() {
            this.logWrite("CordovaOnsenControllerBase into");

            this.menuTitle = "";
            this.authManager = new CordovaOnsen.Utils.AuthManager();
            
        }

        public logWrite(msg: string, param1?: any) {
            CordovaOnsen.Utils.LogManager.write(msg, param1);
        }

        public authValidate(rootScope: CordovaOnsen.Interfaces.ICordovaOnsenRootScope) {
            this.logWrite("authValidate into");
            
            this.logWrite("authValidate isLogin", this.authManager.isLogin());
            if (!this.authManager.isLogin()) {
                this.logWrite ("authValidate isLogin success");
                rootScope.route.setMainPage("Views/Pages/Login.html");
            }
        }
    }
}