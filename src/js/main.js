const url = require('./urlapi.js');
export const handleSubmit = async (dataform) => {
  if (dataform.pick == null || dataform.destination == null || dataform.direction == null
    || dataform.typevehicle == null || dataform.datetimehire == null || dataform.fullname == null || dataform.phone == null) {
    alert("Vui lòng điền đủ dữ liệu")
    return;
  }
  try {

    console.log(dataform.datetimehire + "dsfsafsf")
    const dt = [dataform.pick, dataform.destination, dataform.direction, dataform.typevehicle, dataform.datetimehire, dataform.fullname, dataform.phone];
    const response = await fetch(url.urlapi + 'insertrentalcar', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dt),
    });

    const data = await response.json();
    if (data.status === 200) {
      const sendmail = await fetch(url.urlapi + 'sendmail', {
        method: 'POST',
      });
      const status = await sendmail.json();
      alert(status.msg);
    } else {
      alert(data.msg);
    }
  } catch (error) {

  }

};

export const getTableData = async () => {
  try {
    const response = await fetch(url.urlapi + 'getallprice');
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
