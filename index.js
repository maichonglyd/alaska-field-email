/**
 * 脉冲软件
 * http://maichong.it
 * Created by LiYuDeng on 2016/2/23.
 * li@maichong.it
 */
'use strict';

const alaska = require('alaska');

/**
 *  hintText 提示信息 String  ""
 *  disabled 是否可用 boolean false
 *  errorText 错误信息 String ""
 *  fullWidth 是否全屏 boolean false
 *  value 显示的值 String "",
 *  onChange 内容改变事件
 * */
exports.template = __dirname + '/lib/view.js';

exports.plain = Text;

/**
 * 初始化方法
 * @param field   alaksa.Model中的字段配置
 * @param options Mongoose模型字段初始化参数
 */
exports.init = function (field, options) {
  //TODO 所有mongoose String 类型初始化参数
};
