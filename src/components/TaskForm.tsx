// CSS
import styles from "./TaskForm.module.css"

// React
import { useState, ChangeEvent, FormEvent } from "react";

// Interface
import { taskProps } from "../interface/Task";

type Props = {
  btnText: string;
  taskList: taskProps[];
  setTaskList?: React.Dispatch<React.SetStateAction<taskProps[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskhandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: taskProps = { id, title, difficulty }

    setTaskList!([...taskList, newTask])

    setTitle("")
    setDifficulty(0)

    console.log(taskList)

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        break;
      
      default:
        setDifficulty(parseInt(e.target.value))
        break;
    }
  }

  return (
    <form onSubmit={addTaskhandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="dificulty">Dificuldade:</label>
        <input
          type="text"
          name="dificulty"
          id="dificulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} onChange={handleChange} />
    </form>
  )
}

export default TaskForm