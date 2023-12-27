import router from '../router/index.js'
export const dangxuat = async () => {
    try {
        const token = localStorage.getItem('token');
        if (token != null) {
            localStorage.removeItem('token');
            router.push('/login');
        }
    } catch (error) {

    }

};

export default dangxuat;