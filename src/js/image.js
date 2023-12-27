const url = require('./urlapi.js');


export  async function convertToBase64(imageName) {
    try {
        const response = await fetch(url.urlapi+'convertimage', {
        method: 'POST',
        body: JSON.stringify({ name: imageName }), 
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Conversion failed');
      }
      const base64Data = await response.json();
      return base64Data.data;
    } catch (error) {
      console.error('Error converting image to base64:', error);
      return null;
    }
  }
  
  // Gửi yêu cầu upload hình ảnh
  export  async function uploadImage(imageFile) {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
  
      const response = await fetch(url.urlapi+'uploadimage', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
  
  // Gửi yêu cầu xóa hình ảnh
  export  async function deleteImage(imageName) {
    try {
      const response = await fetch(url.urlapi+`deleteimage/${imageName}`, {
        method: 'POST'
      });
  
      if (!response.ok) {
        throw new Error('Deletion failed');
      }
  
      console.log('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }
