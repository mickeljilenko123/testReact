
import React from "react";
import classNames from "classnames";

const Task = ({ text, done, onChange, id, onDelete }) => {
  //в функцию classNames передаём тот класс, который должен быть на выходе всегда, а вторым аргументом передаём ОБЪЕКТ в котором ключ - это вторая часть названия класса, а его значение - это булеан(вкл/выкл)
  const listItemClasses = classNames(`list-item`, { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  )

};


export default Task;