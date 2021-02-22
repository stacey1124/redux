import React from 'react'
import Input from '../Input'
import store from '../../Store'
import {
  count_action
} from '../../Store/actionCreator'
import { connect } from 'react-redux'

//react-redux将UI组件和容器组件连接起来
class Counter extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   count: 0
    // }
    // this.state = store.getState()
    // //state发生改变之后需要订阅才能检测到state的改变
    // store.subscribe(this.storeChange)
  }
  // storeChange = () => {
  //   this.setState(store.getState())
  // }

  //connect可以将事件放到mapDispatchToProps中, 此时事件变成了this.props.handleClick
  // handleClick = () => {
  //   // this.setState({
  //   //   count: this.state.count + 1
  //   // })
  //   //将setState改成通过action派发
  //   // const action = {type: "count_action"}
  //   const action = count_action()
  //   store.dispatch(action)
  // }
  render() {
    console.log("this.props", this.props)
    // const { count } = this.state
    const { count, handleClick } = this.props;//connect将count改成props获取
    return (
      <div>
        {/* <button onClick={this.handleClick}>点击按钮+1</button> */}
        <button onClick={handleClick}>点击按钮+1</button>
        <div style={{width: 100, height: 100, border: "1px solid #ccc", textAlign: "center"}}>
          {count}
        </div>
        <Input count={count}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log("state:", state)
  return state 
}
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch:", dispatch)
  //写事件
  return {
    handleClick() {
      console.log("this:", this)
      console.log('count_action::', count_action);
      let action = count_action()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
