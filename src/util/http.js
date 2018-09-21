import axios from "axios";

axios.defaults.baseURL = ""; // 设置公共baseurl
// 设置默认请求头
axios.defaults.headers = {
  "X-Requested-With": "XMLHttpRequest"
};
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 8000; // 设置超时时间

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2){
      router.push({
        path: "/login",
        querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

/**
* 封装get方法
* @param url
* @param data
* @returns {Promise}
*/
export function getData(url, params = {}){
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
    .then(response => {
      resolve(response);
    })
    .catch(err => {
      reject(err)
    })
  })
}

/**
* 封装post请求
* @param url
* @param data
* @returns {Promise}
*/
export function postData(url, data = {}){
  return new Promise((resolve, reject) => {
    axios.post(url, data)
        .then(response => {
          resolve(response);
        },err => {
          reject(err)
        })
  })
}

/**
* 封装delete请求
* @param url
* @param data
* @returns {Promise}
*/
export function deleteData(url, params = {}){
  return new Promise((resolve, reject) => {
    axios.post(url, {
      data: params
    })
    .then(response => {
      resolve(response);
    },err => {
      reject(err)
    })
  })
}
