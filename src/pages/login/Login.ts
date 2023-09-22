import LibConfig from '../../lib/LibConfig';
import LibCookie from '../../lib/LibCookie';
import HttpCommon from '../../lib/HttpCommon'
//
const Login = {
    /**
     *
     * @param
     *
     * @return
     */   
    login : async function() : Promise<any>
    {
        try{
            let ret = false;
            const password = document.querySelector<HTMLInputElement>('#password');
            const email = document.querySelector<HTMLInputElement>('#email');
            let passwordValue = "";
            if(password) { passwordValue = password?.value; }
            let postItem = {
                "name": "a1",
                "email": email?.value,
                "api_key": import.meta.env.PUBLIC_API_KEY,
                "password": passwordValue,
            }
//            console.log("passwordValue=", passwordValue);
            const json = await HttpCommon.server_post(postItem, "/users/get");
            //console.log(json);
            if (json.ret !==  LibConfig.OK_CODE) {
                console.error("Error,json.ret <> OK");
                alert("Error");
                return;
            }
            const user = json.data;
            console.log("Success, auth");
            const key = LibConfig.COOKIE_KEY_AUTH;  
            await LibCookie.set_cookie(key, user.id);
            location.href = '/';
            return ret;
        } catch (e) {
            console.error(e);
            throw new Error('Error , login');
        }
    },  
    /**
     * startProc
     * @param
     *
     * @return
     */   
    startProc: function(): void 
    {
        try{
            console.log("#startProc: Login");
            //btn
            const button: any = document.querySelector('#btn_login');
            button.addEventListener('click', () => {
                this.login();
            });    
        } catch (e) {
            console.error(e);
        }    
    } 
}
//
Login.startProc();

export default Login;
