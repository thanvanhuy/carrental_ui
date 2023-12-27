const url = require('./urlapi.js');
export const handleSubmit1 = async (dataform1) => {
    if(dataform1.username==null||dataform1.phone==null||dataform1.servicesname==null||dataform1.note==null){
        alert("Vui lòng điền đủ dữ liệu")
        return;
    }
    try {
        const dt = [dataform1.username,dataform1.phone,dataform1.servicesname,dataform1.note];
        const response = await fetch(url.urlapi + 'insertcontac', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dt),
        });
        const data = await response.json();
        alert(data.msg)
    } catch (error) {
        
    }
   
}