import LibConfig from '../../lib/LibConfig';
// 
const CrudCreate = {

  /**
   * addItem:
   * @param key: any
   *
   * @return
   */
  addItem : async function() : Promise<any>
  {
    try{
      let ret = false;
      const name = document.querySelector<HTMLInputElement>('#name');
      const password = document.querySelector<HTMLInputElement>('#password');
      const email = document.querySelector<HTMLInputElement>('#email');
      let passwordValue = "";
      if(password) { passwordValue = password?.value; }
      const item = {
        name: name?.value,
        email: email?.value,
        password: passwordValue,
        "api_key": import.meta.env.PUBLIC_API_KEY,
        path: "/users/create",
      }
      //console.log(item);
      const body = JSON.stringify(item);		
      const res = await fetch("/api/user/create", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
      console.log(json);   
      if (res.status !== 200) {
        throw new Error(await res.text());
      }
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      } 
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error , addItem');
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
      //btn
      const button: any = document.querySelector('#btn_save');
      button.addEventListener('click', async () => {
        const result = await this.addItem();
console.log("result=", result);
        if(result) {
          window.location.href = '/login';
        } else {
          alert("Error, user create");
        }
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
CrudCreate.startProc();

export default CrudCreate;
