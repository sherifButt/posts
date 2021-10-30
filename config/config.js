// Keys
const PORT = 3000
const dev = process.env.NODE_ENV === 'production'
const apiPath = dev ? `http://localhost:${PORT}/api` : 'https://jsonplaceholder.typicode.com';
const postsPerPage = 8
export default {
   dev,
   apiPath,
   PORT,
   postsPerPage 
}