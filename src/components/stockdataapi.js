import axios from 'axios';

   
   //api url http://localhost:4000/stocks
export function getstocks() {
   const response = axios.get('http://localhost:4000/stocks');
   return response;
}   