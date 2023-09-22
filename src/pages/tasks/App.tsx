import {useState, useEffect}  from 'react';
import HttpCommon from '../../lib/HttpCommon';
import AlertError from '../common/AlertError'
import AlertSuccess from '../common/AlertSuccess'
import Crud from './Crud';
import CrudIndex from './CrudIndex';
import ShowModal from './ShowModal';
import EditModal from './EditModal';
//
const ALERT_ERROS_ID = "alert_error_id_1";
const ALERT_SUCCESS_ID = "alert_success_id_1";
const ERROS_MESSAGE_1 = "Title, input";
let SUCCESS_MESSAGE_1 = "OK, Save";
//
//
let pageItem: any[] = [];
let todoItem: any = {};
let pageId = 0;
//
function Page () {
    const [updatetime, setUpdatetime] = useState<string>("");
    //
    const updateTimestap = function() {
        const dt = new Date().toString();
        setUpdatetime(dt);
    }
    //
    useEffect(() => {
        (async () => {
            getList();
        })()

    }, []);
    /**
     *
     * @param
     *
     * @return
     */
    const getList = async function() {
        try{
            const d = await CrudIndex.getList()
            pageItem = d;
            updateTimestap();
        } catch (e) {
            console.error(e);
        } 
    }
    /**
     *
     * @param
     *
     * @return
     */
    const createTodo = async function() {
        try{
            SUCCESS_MESSAGE_1 = "OK, Save";
            const result = await CrudIndex.addItem(ALERT_ERROS_ID);
            if(result) {
                getList();
                CrudIndex.displayAlert(ALERT_SUCCESS_ID)
            }
        } catch (e) {
            console.error(e);
        } 
    }
    /**
     *
     * @param
     *
     * @return
     */
    const todoDelete = async function(id: number) {
        try{
            SUCCESS_MESSAGE_1 = "OK, Delete";
            const result = await CrudIndex.delete(id);
            if(result) {
                CrudIndex.displayAlert(ALERT_SUCCESS_ID)
                getList();
            }
        } catch (e) {
            console.error(e);
        } 
    }
    /**
     *
     * @param
     *
     * @return
     */    
    const openShow = async function (id: number) {
        try{
            pageId = id;
            const postItem: any = {
                "id": Number(id)
            };    
            const json = await HttpCommon.server_post(postItem, "/tasks/get");
console.log(json.data);
            todoItem = json.data;
            updateTimestap();            
            //@ts-ignore
            MicroModal.show(Crud.modalIdName.show);
        } catch (e) {
          console.error(e);
        }
    }   
    /**
     *
     * @param
     *
     * @return
     */     
    const openEdit = async function (id: number) {
        try{
            pageId = id;
            const postItem: any = {
                "id": Number(id)
            };    
            const json = await HttpCommon.server_post(postItem, "/tasks/get");
console.log(json.data);
            todoItem = json.data;
            updateTimestap();            
            //@ts-ignore
            MicroModal.show(Crud.modalIdName.edit);
        } catch (e) {
          console.error(e);
        }
    }         
console.log(updatetime);
    //
    return (
    <div className="pt-4 pb-8">
        <h3 className="text-4xl font-bold">Tasks</h3>
        <span className="d-none">{updatetime}</span>
        <hr className="my-1" />
        <div className="col-sm-12">
            <div className="mb-2">
                <label className="text-2xl block text-gray-700 font-bold mb-2">Title</label>
                <input type="text" id="title" name="title"
                className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="John Doe" required
                />
            </div>            
            <div className="mb-2">
                <label  className="text-2xl block text-gray-700 font-bold mb-2">Content</label>
                <textarea id="content" name="content"
                className="border border-gray-400 rounded-md px-3 py-2 w-full h-16 resize-none focus:outline-none focus:border-blue-500"
                 placeholder="" required
                ></textarea>
            </div>

            <button onClick={()=>createTodo()} className="btn-purple ms-2" 
                >Create</button>        
            </div>
        <hr className="my-1" />
        {pageItem.map((item: any ,index: number) => {
        return (
        <div key={index}>
            <h3 className="text-3xl font-bold">{item.title}</h3>
            <span>ID: {item.id}, {item.createdAt}</span>
            <button onClick={()=>openShow(item.id)} className="btn-outline-purple ms-2">Show
            </button>
            <button onClick={()=>openEdit(item.id)} className="btn-outline-purple ms-2">Edit
            </button>
            <button onClick={()=>todoDelete(item.id)} className="btn-outline-red ms-2" 
            >Delete</button>
            <hr />
        </div>
        )
        })}
        <hr className="mb-8" />
        {/* Alert */}
        <AlertError idName={ALERT_ERROS_ID} message={ERROS_MESSAGE_1} />  
        <AlertSuccess idName={ALERT_SUCCESS_ID} message={SUCCESS_MESSAGE_1} />  
        {/*  modal */}
        <ShowModal pageId={pageId} pageItem={todoItem} />            
        <EditModal pageId={pageId} pageItem={todoItem} />            
    </div>    
    );
}
export default Page;

/*
<hr />
<div className="alert-error" role="alert">
    <strong className="font-bold">Holy smokes!</strong><br />
    <span className="block sm:inline">Something seriously bad happened.</span>
</div>
*/