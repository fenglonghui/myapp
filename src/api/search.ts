import service from '../util/request';


/**
 * 查询信息
 * @param options 
 * @returns 
 */
export const queryInfo = (path:string, params = {}) => {
    return service.request({
        url: path,
        params
    })
}