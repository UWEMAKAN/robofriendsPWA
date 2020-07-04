// import axios from 'axios';

// export const apiCall = (link) => {
//   return axios.get(link)
//     // .then(response => response.data)
//     // .then(data => {
//     //   console.log(data);
//     //   return data;
//     // });
// };
export const apiCall = (link) => fetch(link).then(response => response.json());