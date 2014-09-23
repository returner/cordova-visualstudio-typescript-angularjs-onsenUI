module CordovaOnsen.Models {
    export class RegisterBinding {
        public DomainId: string = "";
        public Role: number = 1;
        public UserName: string = "";
        public Password: string = "";
        public ConfirmPassword: string = "";
        public Code: string = "";
        public IsValidUserName: boolean = false;
        
    }
}