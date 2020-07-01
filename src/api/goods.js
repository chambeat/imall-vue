import request from '@/utils/request'

export default {
    // 查询所有商品
    getList() {
        return request({
            url: '/goods',
            method: 'get'
        })
    },
    // 添加
    add(pojo) {
        return request({
            url: '/goods',
            method: 'post',
            data: pojo
        })
    }
    // 更新

    // 删除

}