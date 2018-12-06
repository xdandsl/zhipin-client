import React, {Component} from 'react';
import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  render () {
    return (
      <div>
        <List>
          <Item
            arrow="horizontal"
            thumb={require(`../../assets/images/头像1.png`)}
            multipleLine
            onClick={() => {}}
          >
            实时聊天内容 <Brief>dashen001</Brief>
          </Item>
        </List>
      </div>
    )
  }
}

export default Message;