//
let pageItem: any[] = [];
//
function Page (props: any) {
console.log(props.idName);
    //
    return (
    <div className="alert_error_wrap">
        <div className="custom-alert d-none" id={props.idName} >
            <div className="alert-info" role="alert">
                <h4 className="text-3xl font-bold">Success</h4>
                <hr className="my-1" />
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" 
                    className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>                
                    <span>{props.message}
                    </span><br />
                    <hr className="my-1" />
                    <div className="ms-1 mt-2">※ このメッセージは、自動非表示になります
                    </div>
                </div>
            </div>
        </div>
        <style>{`
        .alert_error_wrap .custom-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
        }
        `}</style>
    </div>
    );
}
export default Page;
