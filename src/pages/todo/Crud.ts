

const Crud = {
  /* modal-name */
  modalIdName: {
    show: "page_show_modal_1",
    edit: "page_edit_modal_1",
  },
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
      const title = (<HTMLInputElement>document.querySelector("#title")).value;
      data.title = title;
      const content = (<HTMLInputElement>document.querySelector("#content")).value;
      data.content = content;   
      return data;
    } catch (e) {
      console.error(e);
      throw new Error('Error , getInputValues');
    }
  },  
  /**
   * 
   * @param
   *
   * @return
   */  
  clearInputValues: function() : void
  {
    try{
      // inputタグから値を取得し、オブジェクトにセットする
      const title = (<HTMLInputElement>document.querySelector("#title"));
      if(title) {title.value = "";}
      const content = (<HTMLInputElement>document.querySelector("#content"));
      if(content) {content.value = "";}
    } catch (e) {
      console.error(e);
      throw new Error('Error , getInputValues');
    }
  }, 
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
//Crud.startProc();

export default Crud;
