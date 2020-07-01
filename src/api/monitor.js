import request from '@/utils/request'

export default {
    getInfo() {
        return request({
            url: '/druid',
            method: 'get'
        })
    }
}