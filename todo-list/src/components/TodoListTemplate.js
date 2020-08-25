import React from 'react';
import './TodoListTemplate.css';
import Palette from './Palette';
import Color from './Color';

const TodoListTemplate = ({form, children, Palette}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="palette-wrapper">
        { Palette }
      </section>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;