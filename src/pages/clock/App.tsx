import {useState, useEffect}  from 'react';
import moment from 'moment';
let mTimeoutId: any = 0;
let mTimeStr: string = ""; // HH:MM:SSSS
//
function Page () {
    const [updatetime, setUpdatetime] = useState<string>("");
    //
    const updateTimestap = function() {
        const dt = new Date().toString();        
        setUpdatetime(dt);
    }
    /**
    * timer_func
    * @param
    *
    * @return
    */  
    const timer_func = async function(){
        const now = moment();
//        mTimeStr = now.format("YYYY-MM-DD HH:mm:ss");
        mTimeStr = now.format("HH:mm:ss");
        updateTimestap();
//console.log("sNow=", mTimeStr);
        timeout_next();
    };    
    //
    function timeout_next(){
        mTimeoutId = setTimeout(timer_func, 1000 );
    }    
    //
    useEffect(() => {
        (async () => {
            timeout_next();
        })()
    }, []);
//console.log(updatetime);
    //
    return (
    <div className="pt-4 pb-8">
        <h3 className="text-4xl font-bold">Clock</h3>
        <span className="d-none">{updatetime}</span>
        <hr className="mb-8" />
        <div className="">
            <h3 className="text-6xl font-bold  text-center">{mTimeStr}</h3>
        </div>
        
    </div>    
    );
}
export default Page;

/*
*/