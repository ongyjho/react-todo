import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
        ({id, text, color, checked}) => (
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            color={color}
            key={id}
          />
        )
      );

  return (
      <div>
        {todoList}    
      </div>
    );
  }
}

export default TodoItemList;