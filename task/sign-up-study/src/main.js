import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App.vue'
// import axios from 'axios'

// // Using Vue Plugin - VueResource
// Vue.use(VueResource);


// Global Settings
// Vue.http.options.root = 'https://vue-http-1b8e7.firebaseio.com';
// Vue.http.headers.common['Authorization'] = 'Token YXBpOnBhc3N3b3Jk';

// interceptors
// Vue.http.interceptors.push((request, next)=> {
//   console.log(request);
//   if( request.method === 'POST' ) {
//     request.method = 'PUT';
//   }
//   next(response => {
//     response.json = ()=> {
//       return { data: response.body };
//     };
//   });
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
