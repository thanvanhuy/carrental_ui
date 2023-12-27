export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token; 
};

const requireAuth = (to, from, next) => {
  try {
    const loggedIn = isLoggedIn(); 
    if (!loggedIn) {
      next('/login'); 
    } else {
      next(); 
    }
  } catch (error) {
    
  }
};

export default requireAuth;
