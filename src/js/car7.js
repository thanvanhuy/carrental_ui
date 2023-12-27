const url=require('./urlapi')
import { convertToBase64 } from './image.js';
export const getallcar=async()=>{
    try {
        const type=[7];
        const response= await fetch(url.urlapi+'getallcartype',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(type)
        });
        var responseData = await response.json();
        for (let index = 0; index < responseData.data.length; index++) {
          responseData.data[index].imagecar = await convertToBase64(responseData.data[index].imagecar);
        }
        return responseData.data; 
    } catch (error) {
        
    }
}