import HttpCommon from '../../lib/HttpCommon';
import LibConfig  from '../../lib/LibConfig';
import Crud from './Crud';
//
const CrudEdit = {
    /**
     * 
     * @param key: any
     *
     * @return
     */
    getInputValues: function() : any
    {
        try{
            const data: any = {};
            // inputタグから値を取得し、オブジェクトにセットする
            const title = (<HTMLInputElement>document.querySelector("#update_title")).value;
            data.title = title;
            const content = (<HTMLInputElement>document.querySelector("#update_content")).value;
            data.content = content;   
            return data;
        } catch (e) {
            console.error(e);
            throw new Error('Error , getInputValues');
        }
    },     
   /**
   *
   * @param key: any
   *
   * @return
   */    
    updateItem : async function(id: number, idName: string) : Promise<any>
    {
        try{
            let ret = false;
            const values = this.getInputValues();
            values.userId = import.meta.env.PUBLIC_USER_ID;
            values.id = id;
            values.completed = 1;
console.log(values);
            if(!values.title) {
//                this.displayAlert(idName);
                return ret;
            }
            const json = await HttpCommon.server_post(values, '/todos/update');
console.log(json);
            if (json.ret ===  LibConfig.OK_CODE) {
                ret = true;
            }
            return ret;
        } catch (e) {
            console.error("Error, updateItem");
            console.error(e);
            throw new Error('Error , updateItem');
        }
    },
        
}

export default CrudEdit;
