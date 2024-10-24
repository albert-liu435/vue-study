import axios from "axios";

const request=axios.create({
  baseURL:"xxxxxxxxx",
  timeout:5000
})

//请求拦截
request.interceptors.request.use((config) => {//请求的数据
	// config.headers = config.headers || {}  // 没有数据的话就设置为空设置为数据
	// if (localStorage.getItem("token")) {//先确保登录
	// 	config.headers.token = localStorage.getItem("token") || ""
	// }
	return config//必须返回出去，不然请求发不出去
}, error => {
	//处理错误请求
	return Promise.reject(error)
})

//响应拦截
request.interceptors.response.use((res) => {
	const code = res.status
	if (code !== 200) {
		//请求失败（包括token失效，302，404...根据和后端约定好的状态码做出不同的处理）
		return Promise.reject(res)
	} else {
		//请求成功
		console.log(res, '成功----')
		return Promise.resolve(res.data)
	}
}, (err) => {
	console.log(err, '错误信息的处理')//错误信息的处理
	//处理错误响应
	return Promise.reject(err)
})

export default request
