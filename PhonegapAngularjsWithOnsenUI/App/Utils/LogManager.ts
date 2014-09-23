module CordovaOnsen.Utils {
    export class LogManager {
        static write(msg: string, param1?: any) {
            if (param1) {
                console.log(msg + " : " , param1);
                return;
            } 
            console.log(msg);
        }

        
    }
} 