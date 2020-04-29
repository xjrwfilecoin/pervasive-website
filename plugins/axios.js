import axios from 'axios' // 引入axios
import { Loading, Message } from 'element-ui'
import qs from 'qs' // 引入qs模块，用来序列化post类型的数据，后面会提到

// axios 配置
axios.defaults.timeout = 8000 // 设置请求超时
axios.defaults.baseURL = process.env.baseURL// 默认请求地址
 
let loadinginstace

let myredirect;
export default function ({redirect }) {
  myredirect = redirect;
}

// 请求
axios.interceptors.request.use(
  
  config => {     
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token;
    }
    loadinginstace = Loading.service({ 
      fullscreen: true,
      lock: true,
      text: '拼命加载中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.8)' 
    })
    
    return config

  },
  error => {

    loadinginstace.close();
    return Promise.reject(error)

  }
)
 
// 返回
axios.interceptors.response.use(
  
  res => {
    console.log('-------------',res)
    loadinginstace.close();
    return res.data // data数据
  }, 
  
  err  => {
    console.log('---1111----------',err)
    if(err.message.includes('timeout') || err.message.includes('Network Error')){   // 判断请求异常信息中是否含有超时timeout字符串
			Message({
        message: '请求超时，请检查网络连接！',
        type: 'warning'
      });
      loadinginstace.close();
      return Promise.reject(error);          // reject这个错误信息
    } else if (err.message.includes('404')) {
      Message({
        message: '操作失败，请联系管理员！',
        type: 'warning'
      });
      loadinginstace.close();
      return Promise.reject(error); 
    }
    Message({
      message: err.message,
      type: 'warning'
    });
    message.error(err.message);    
    loadinginstace.close();  
		return Promise.reject(err);   
  }
)
 
export const get = (url, showLoading) => axios.get(url, {
  showLoading: showLoading
})
 
export const post = (url, params, showLoading) => axios.post(url, params, {
  showLoading: showLoading
})
