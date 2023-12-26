const axios = {
  interceptors: {
    request: {
      use(handler) {
        this.handler = handler;
      }
    },
    response: {
      use(handler) {
        this.handler = handler;
      }
    }
  },
  async request(config){
    if(this.interceptors.request.handler) {
      config = this.interceptors.request.handler(config)
    }

    const response = await uni.request({
      url:config.url,
      method: config.method || 'GET',
      data: config.data || {},
      header: config.headers || {},
    })

    if(this.interceptors.response.handler) {
      return this.interceptors.response.handler(config)
    }

    return response
  },
  get(url, config) {
    return this.request({...config, url, method: 'GET'})
  },
  post(url, data, config) {
    return this.request({...config, url, method: 'POST', data})
  }
}

export default axios