const token = localStorage.getItem('token');
const url =require('./urlapi.js')
var bearer = 'Bearer ' + token;


const getallcar=async()=>{
    try {
        const response=await fetch(url.urlapi+"getallcar");
        var responseData = await response.json();
        return responseData.data;
    } catch (error) {
        return [];
    }
 
}
const insertcar=async(editedcar)=>{
    try {

        const response=await fetch(url.urlapi+"insertcar",{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(editedcar),
        });
        var responseData = await response.json();
        return responseData.data;
    } catch (error) {
        return [];
    }
}
const Updatecar=async(editedCar)=>{
    try {
      
        const response=await fetch(url.urlapi+"updatecar",{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(editedCar),
        });
        var responseData = await response.json();
        return responseData.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}

const Deletecar=async(id_car)=>{
    try {
        const response=await fetch(url.urlapi + `deletecar/${id_car}`,{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        console.log(id_contact)
    } catch (error) {
        
    }   
}
//contact
const getallcontact = async () => {
    try {
        const response = await fetch(url.urlapi + "getallcontac", {
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
    
        var responseData = await response.json();
        return responseData.data;
    } catch (error) {
        return [];
    }
    
}

const Updatecontact=async(id_contact)=>{
    try {
        console.log(id_contact)
    } catch (error) {
        
    }
    
}
const Deletecontact=async(id_contact)=>{
    try {
        const response=await fetch(url.urlapi + `deletecontac/${id_contact}`,{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        console.log(id_contact)
    } catch (error) {
        
    }   
}
//car
const getallrentalcar=async()=>{
    try {
        const response=await fetch(url.urlapi+"getallrentalcar",{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
        var responseData = await response.json();
        return responseData.data;
    } catch (error) {
        return [];
    }
}

const getrentalcar_id=async()=>{
    try {
        const response=await fetch(url.urlapi+"getcarbyid/1",{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        var responseData = await response.json();
        return responseData.data;
    } catch (error) {
        return [];
    }
    
}
// price 
const getallprice=async()=>{
    const response=await fetch(url.urlapi+"getallprice");
    var responseData = await response.json();
    return responseData.data;
}
const insertprice=async(editedPrice)=>{
    try {

        const response=await fetch(url.urlapi+"insertprice",{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(editedPrice),
        });
        var responseData = await response.json();
        return responseData.data;
    } catch (error) {
        return [];
    }
}
const updateprice=async(editedPrice)=>{
    try {

        const response=await fetch(url.urlapi+"updateprice",{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(editedPrice),
        });
        var responseData = await response.json();
        return responseData.data;
    } catch (error) {
        return [];
    }
}
const deleteprice=async(id_price)=>{
    try {
        const response=await fetch(url.urlapi + `deleteprice/${id_price}`,{
            headers: {
                'Authorization': bearer,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
    } catch (error) {
        
    }   
}
module.exports = { getallcar, insertcar,getallcontact, getallrentalcar, getallprice,getrentalcar_id,Updatecontact,Deletecontact,Deletecar,Updatecar,updateprice,insertprice,deleteprice };