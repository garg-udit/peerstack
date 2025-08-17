// Configuration for the application
export const config = {
  // Base URL for accessing images from the server
  IMAGE_BASE_URL: 'http://localhost:3002/images/',
  
  // API base URL (using proxy from package.json)
  API_BASE_URL: '/api'
};

// Fallback for environment variable if it exists
export const getImageUrl = (imagePath) => {
  const baseUrl = process.env.REACT_APP_PUBLIC_FOLDER || config.IMAGE_BASE_URL;
  return baseUrl + imagePath;
};
