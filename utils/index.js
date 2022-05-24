/**
 * 返回是否客户端渲染
 * @returns {boolean}
 */
export const isClient = () => process.client;


/**
 * 返回是否服务端渲染
 * @returns {boolean}
 */
export const isServer = () => process.server
