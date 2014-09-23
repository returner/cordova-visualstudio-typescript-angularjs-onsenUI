module CordovaOnsen.Interfaces {
	export interface ICordovaOnsenController {
        menuTitle: string;
        authManager: CordovaOnsen.Utils.AuthManager;

        authValidate : Function;
	}
}