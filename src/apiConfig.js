let apiUrl
const apiUrls = {
  production: 'https://not-hot-dog-app.herokuapp.com',
  development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl;
