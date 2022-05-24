import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://www.fuyou.cn/WebApi',
  timeout: 3000,
});

const request = (config) => {
  return new Promise((resolve, reject) => {
     axiosInstance(config).then(res => {
      if (res.status === 200 && res.data.Success) {
        resolve(res.data.Result);
      }
    }).catch(err => {
      reject(err);
    });
  });
}
export default request;
