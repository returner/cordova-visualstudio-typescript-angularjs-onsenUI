module CordovaOnsen.Models {
	export class Login {
		public UserName : string = "";
        public Password: string = "";
        public grant_type: string = "password";
    }
}