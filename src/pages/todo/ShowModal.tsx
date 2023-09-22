/** @jsxImportSource react */
import {useEffect}  from 'react';
import Crud from './Crud';
const MODAL_NAME= Crud.modalIdName.show;

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
                <h1 className="modal__title" id={`${MODAL_NAME}-title`}>{props.pageItem.title}
                </h1>
                <button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>
            <main className="modal__content" id={`${MODAL_NAME}-content`}>
                <hr className="my-1" />
                <div>ID: {props.pageItem.id}, <span>{props.pageItem.createdAt}</span>
                </div>
                <hr className="my-1" />
                Content:<br />
                <pre className="pre_text">{props.pageItem.content}</pre>
            </main>
            <footer className="modal__footer">
                <button className="btn-gray" onClick={()=>{closeModal()}}
                >Close</button>
            </footer>
            </div>
        </div>
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
