/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-22
 * @author Liang <liang@maichong.it>
 */

'use strict';
import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default class View extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hintText:props.hintText || "",
      disabled:props.disabled || false,
      errorText:"",
      fullWidth:props.fullWidth || false,
      value:props.value || "",
      onChange:props.onChange
    }
    this.errText = props.errorText || "";
  }
  _onChangeHandle(event){
    this.setState({value:event.target.value});
    if(typeof this.state.onChange == "function"){
      this.state.onChange(event);
    }
  }
  _onBlurHandle(event){
    let reg = /^[a-zA-Z0-9]+[a-zA-Z0-9\-\_]+@[A-Za-z0-9]+(.[a-zA-Z0-9]+)+$/g;
    if(!reg.test(event.target.value) && event.target.value.trim() !=""){
      this.setState({errorText:this.errText==""?"邮箱格式不正确！":this.errText});
    }else{
      this.setState({errorText:""});
    }
  }
  _onFocusHandle(){
    this.setState({errorText:""});
  }
  render(){
    return <TextField
      hintText={this.state.hintText}
      disabled={this.state.disabled}
      errorText={this.state.errorText}
      fullWidth={this.state.fullWidth}
      value={this.state.value}
      onChange={this._onChangeHandle.bind(this)}
      onBlur={this._onBlurHandle.bind(this)}
      onFocus={this._onFocusHandle.bind(this)}
    />
  }
}
