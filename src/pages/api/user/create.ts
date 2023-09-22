//
export const post: APIRoute = async ({ request }) => {
    const retObj = {ret: "NG", message: "Internal Server Error."};
    try{
        const body = await request.json();
        const url = import.meta.env.PUBLIC_API_URL;
    //console.log("path=", body.path);
console.log(body);
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
        return {
            body: JSON.stringify(json)
        }
    } catch (e) {
        console.error(e);
        return {body: JSON.stringify(retObj) }    
    }  
}