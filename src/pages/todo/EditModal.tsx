/** @jsxImportSource react */
import {useEffect}  from 'react';
import Crud from './Crud';
import CrudEdit from './CrudEdit';
import CrudIndex from './CrudIndex';
import AlertSuccess from '../common/AlertSuccess'

const MODAL_NAME= Crud.modalIdName.edit;
const SYSTEM_NAME = import.meta.env.PUBLIC_SYSTEM_NAME;
const ALERT_ERROR_ID = "alert_error_id_1";
const ALERT_SUCCESS_ID = "alert_success_edit_id_1";
let SUCCESS_MESSAGE_1 = "OK, Save";
//
function Page(props: any) {
console.log(props);
    useEffect(() => {
        (async () => {
            //
            //@ts-ignore
            MicroModal.init({
                disableScroll: true,
                awaitOpenAnimation: true,
                awaitCloseAnimation: true
            });
        })()

    }, []);
    /**
     *
     * @param
     *
     * @return
     */
    const updateTodo = async function() {
        try{
            //SUCCESS_MESSAGE_1 = "OK, Save";
            const result = await CrudEdit.updateItem(Number(props.pageItem.id), ALERT_ERROR_ID);
            if(result) {
                console.log("OK, updateTodo");
                CrudIndex.displayAlert(ALERT_SUCCESS_ID)
                //@ts-ignore
//                MicroModal.close(MODAL_NAME);
                setTimeout(function(){ location.reload();
                }, 3000)
            }
        } catch (e) {
            console.error(e);
        } 
    }    
    //
    const closeModal = function () {
        //@ts-ignore
        MicroModal.close(MODAL_NAME);
    }
    //
    return (
    <div className="modal micromodal-slide" id={MODAL_NAME} aria-hidden="true">
        <div className="modal__overlay" tabIndex={-1} data-micromodal-close>
            <div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
            <header className="modal__header">
                <h1 className="modal__title" id={`${MODAL_NAME}-title`}>{SYSTEM_NAME}
                </h1>
                <button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>
            <main className="modal__content" id={`${MODAL_NAME}-content`}>
                <hr className="my-0" />
                <span>ID: {props.pageItem.id}, </span>
                <span>{props.pageItem.createdAt}</span>
                <hr className="my-1" />
                <div className="col-sm-12">
                    <label className="text-2xl font-bold">Title:</label>
                    <input type="text" id="update_title" name="title"
                    className="input_text" placeholder="title" required defaultValue= {props.pageItem.title}
                    />                    
                </div>
                <div className="col-sm-12">
                    <label className="text-2xl font-bold">Content:</label>
                    <textarea id="update_content" name="content"
                    className="input_textarea h-32"
                    placeholder="" required defaultValue={props.pageItem.content}
                    ></textarea>                    
                </div>
            </main>
            <footer className="modal__footer text-end">
                <button className="btn-blue mx-2" onClick={()=>{updateTodo()}}
                >Save</button>
                <button className="btn-gray" onClick={()=>{closeModal()}}
                >Close</button>
            </footer>
            </div>
        </div>
        {/* alert */}
        <AlertSuccess idName={ALERT_SUCCESS_ID} message={SUCCESS_MESSAGE_1} /> 
        <style>{`
        #${MODAL_NAME}-content { min-height: 400px; }
        #${MODAL_NAME} .modal__container .text_input_w180 { width: 180px;}     
        #${MODAL_NAME} .modal__container {
            min-width: 800px;
            min-height: 600px;
        }
        #${MODAL_NAME} .pre_text {
            border: 1px solid #000;
            background: #eee;
            padding: 10px;
            font-family: BlinkMacSystemFont,"Segoe UI",Roboto;
            font-size: 1rem;
        }  
        `}</style>         
    </div>
    );
}
//
export default Page;
/*
<button className="modal__btn modal__btn-primary" onClick={()=>{closeModal()}}
*/