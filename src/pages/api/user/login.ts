import LibConfig from '../../../lib/LibConfig'
//
export const post: APIRoute = async ({ request }) => {
  const retObj = {ret: "NG", message: "Internal Server Error.", data: [] };
  try{
    const body = await request.json();
    const url = import.meta.env.PUBLIC_API_URL;
//console.log("url=", url);
//console.log("path=", body.path);
    const sendBody: any = JSON.stringify(body);
    const res = await fetch(url +  body.path, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},      
      body: sendBody
    });
    if (res.status !== 200) {
      throw new Error(await res.text());
    }
    const json = await res.json();
//console.log(json);    
    if (json.ret !==  LibConfig.OK_CODE) {
      throw new Error('Error , ret <> OK');
    }  
    const user = json.data;
    retObj.ret = LibConfig.OK_CODE;
    retObj.data = user;
    //HTTP 200
    return {
      body: JSON.stringify(retObj)
    }
  } catch (e) {
    console.error(e);
    return {body: JSON.stringify(retObj) }    
  }  
}