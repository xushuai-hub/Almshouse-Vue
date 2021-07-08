import {get,post} from './http'

export default class api {

  /**
   * 登录接口，发送用户信息到后端查验用户信息
   * @param {Object} p [发送的参数]
   * @returns {Promise<unknown>}
   */
  static p_Login = p => post('/user/login', p);

  /**
   * 注册接口，发送用户信息到后端注册
   * @param {Object} p [发送的参数]
   * @returns {Promise<unknown>}
   */
  static p_Register = p => post('/user/register', p);

  /**
   * 更改信息接口，接收用户信息显示到前端
   * @param {Object} p [发送的参数]
   * @returns {Promise<unknown>}
   */
  static g_ChangeMessage = p => post('/user/MainPage/ChangeMessage', p);

  /**
   * 实时显示监控
   * @param {Object} p [发送的参数]
   * @returns {Promise<unknown>}
   */
  static g_showCamera = p => post('/user/MainPage/showCamera', p);

}
