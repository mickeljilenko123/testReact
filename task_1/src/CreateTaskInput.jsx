import React from "react";
import PropTypes from 'prop-types';

class CreateTaskInput extends React.Component {

  //создаём state с пустой строкой для записи туда текста из инпута
  state = {
    value: '',
  }

  //через обработчик пробрасываем введённый текст в в сам инпут
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  //создаём обработчик-колбэк для передачи текста из инпута в новый объект-задание в списке задач и через setState очищаем инпут после ввода текста
  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' })
  }


  render() {
    return (
      <div className="create-task">
        <input
          value={this.state.value}
          className="create-task__input"
          type="text"
          onChange={this.handleChange}
        />
        <button
          className="btn create-task__btn"
          onClick={this.handleTaskCreate}
        >Create</button>
      </div>
    )
  }
}


CreateTaskInput.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
}

export default CreateTaskInput;

// 1. текст из инпута
// 2. создать таск с этим текстом
// 3. добавить объект с этим текстом в список