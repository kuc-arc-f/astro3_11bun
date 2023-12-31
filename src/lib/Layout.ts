
import LibConfig from './LibConfig';
import LibCookie from './LibCookie';
//
const Layout = {
    /**
     *
     * @param key: any
     *
     * @return
     */  
    startProc : async function() : Promise<any>
    {
        //console.log("#Layout.startProc");
        let ret = false;
        const parsedUrl = new URL(window.location.href);
        if(
            !(parsedUrl.pathname === '/login' ||
            parsedUrl.pathname === '/clock' ||
            parsedUrl.pathname === '/basic_login' ||
            parsedUrl.pathname === '/user/create'
            )
        )
        {
            const key = LibConfig.COOKIE_KEY_AUTH;
console.log("pathname=", parsedUrl.pathname);
console.log("key=", key);
            const auth = LibCookie.get_cookie(key);
            if(typeof auth === "undefined" || auth === null)
            {
                location.href = '/login';
            }
            console.log(key, auth);
        }
        return ret;
    }
}
Layout.startProc();

export default Layout;
