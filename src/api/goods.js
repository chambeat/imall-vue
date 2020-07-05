import request from '@/utils/request'

export default {
    // 查询所有商品(分页)
    getList(currentPage) {
        return request({
            url: `/goods/${currentPage}`,
            method: 'get'
        })
    },
    // 条件搜索
    // search(searchMap) {
    //     return request({
    //         url: '/goods/search',
    //         method: 'post',
    //         data: searchMap
    //     })
    // },
    search(searchMap, currentPage) {
        return request({
            url: `/goods/search/${currentPage}`,
            method: 'post',
            data: searchMap
        })
    },
    // 添加
    add(pojo) {
        return request({
            url: '/goods',
            method: 'post',
            data: pojo
        })
    },
    // 根据ID查询商品
    getById(id) {
        return request({
            url: `/goods/single/${id}`,
            method: 'get'
        })
    },
    // 更新
    update(pojo) {
        return request({
            url: '/goods',
            method: 'put',
            data: pojo
        })
    },
    // 删除
    deleteById(id) {
        return request({
            url: `/goods/${id}`,
            method: 'delete'
        })
    }
}
