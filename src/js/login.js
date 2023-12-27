const url=require('./urlapi')
import router from '../router/index.js'
export const login=async(username,password)=>{
    try {
         //Administrator	Adminlogin.201
    if(username==null||password==null){
        alert("vui lòng nhập đủ thông tin")
    }
    const response = await fetch(url.urlapi + 'signinadmin', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if(data.success){
        localStorage.setItem('token', data.token);
        router.push('/admin')
    }
    else{
        alert("đăng nhập thất bại!");
    }
    } catch (error) {
        
    }
}