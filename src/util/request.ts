/**
 * 网络请求
 */
 import axios from "axios";

 const service = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 50000,
 })

 /**
  * request 拦截器
  */
 service.interceptors.request.use(function(config){
     config = preRequest(config);
     return config;
 }, function(error){
    return Promise.reject(error);
 });


 
 /**
  * response 拦截器
  * 统一处理公共错误
  */
  service.interceptors.response.use(function(response){
     return response?.data;
   }, function(error){  
      handleErrorMsg(error);
      return Promise.reject(error);
    }
 );

 
 /**
  * 发送请求之前，需要统一处理的逻辑
  * 添加请求头，token验证，显示loadding等
  * @param config 
  */
 const preRequest = (config: any) => {
   config.data = JSON.stringify({"Content-Type": "application/json" });
   return config;
 }

 /**
  * 统一处理公共异常信息
  */
 const handleErrorMsg = (error: any) => {
    let resylt = error?.response?.status;
   if(resylt === 500){
      alert('网关异常');
   } else if(resylt === 504){
      alert('服务器异常');
   }

 }
 


 export default service;