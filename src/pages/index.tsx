import Head from 'next/head'
import Navbar from '../components/Navigation/Navbar'
import { ChangeEvent, useEffect, useState } from 'react';
import P from '../components/P';
import ToDo from '../components/ToDos/ToDo';
import IToDo from '../interface/IToDo';
import Footer from '../components/Navigation/Footer';

export default function Home() {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("");
  const [todoList, setTodoList] = useState<IToDo[]>([]);
  const [submit, setSubmit] = useState(false);
  const [filter, setFilter] = useState("allToDos");
  const [filteredTodoList, setFilteredTodoList] = useState<IToDo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const handleAddToDo = (e: { preventDefault: () => void; }): void => {
    e.preventDefault();
    if (todo.length > 0 && category.length > 0) {
      setTodoList([...todoList, { title: todo, category: category, complete: false, id: todoList.length + 1, }]);
      setTodo("");
      setCategory("");
      setSubmit(true);
      setSubmitMessage("Todo added!");
    } else {
      setSubmitMessage("Please fill in all fields");
      setSubmit(true);
    }

  }
  const handleDelete = (ToDoName: string): void => {
    setTodoList(todoList.filter(todo => todo.title !== ToDoName));
  }
  const handleComplete = (ToDoId: number): void => {

    setTodoList(todoList.map((ToDo) => {
      if (ToDo.id === ToDoId) {
        return {
          ...ToDo, complete: false
        }

      }
      return ToDo;
    }))
  }
  const handleIncomplete = (ToDoId: number): void => {

    setTodoList(todoList.map((ToDo) => {
      if (ToDo.id === ToDoId) {
        return {
          ...ToDo, complete: true
        }

      }
      return ToDo;
    }))
  }
  const handleFilter = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFilter(e.target.value);
    changeFilter()
  }
  const changeFilter = (): void => {
    switch (filter) {
      case "completedToDos":
        setFilteredTodoList(todoList.filter(todo => todo.complete === true));
        break;
      case "incompleteToDos":
        setFilteredTodoList(todoList.filter(todo => todo.complete === false));

      default:
        setFilteredTodoList(todoList);
    }
  }
  const handleSearch = (): void => {
    if (todoList.filter(todo => todo.category.toLowerCase().includes(searchTerm.toLowerCase())).length > 0) {
      setFilteredTodoList(todoList.filter(todo => todo.category.toLowerCase().includes(searchTerm.toString().toLowerCase())))
    }
    if (todoList.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase())).length) {
      console.log(todoList.filter(todo => todo.title.toLowerCase().includes(searchTerm.toString().toLowerCase())))
      setFilteredTodoList(todoList.filter(todo => todo.title.toLowerCase().includes(searchTerm.toString().toLowerCase())))
    }
  }

  useEffect(() => {
    if (submit) {
      setTimeout(() => {
        setSubmit(false);
      }, 6000);
    }
    changeFilter();
  }, [todoList, submit, filter, searchTerm]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-offWhite">
      <Head>
        <title>The coolest simple todo app!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center flex-1 w-full px-20 my-6 text-center">
        {submit ? <P><div>{submitMessage}</div></P> : null}
        <div className='flex justify-between'>
          <div className='m-auto w-inherit'>

            <input className='py-2 rounded shadow-md ' placeholder='To do...' value={todo} onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              setSubmit(false);
              setTodo(e.target.value);
            }}></input>
            <input className='py-2 rounded shadow-md ' value={category} placeholder='Category...' onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              setSubmit(false);
              setCategory(e.target.value);
            }}></input>
            <button className='px-2 py-2 rounded shadow-md bg-secondary text-offWhite hover:bg-primary' onClick={handleAddToDo} >Submit Task</button>
          </div>
        </div>
        <div className='mt-2'>
          <div className='flex self-center rounded ' >
            <input className='shadow-md ' placeholder="Look for todo's..." value={searchTerm} onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              console.log(e.target.value)
              setSearchTerm(e.target.value);
            }}></input>
            <button className='px-2 rounded shadow-md border-border bg-secondary text-offWhite hover:bg-primary' onClick={handleSearch}>Search</button>
            <select onChange={handleFilter}>
              <option value='allToDos'>All</option>
              <option value='completedToDos'>Completed</option>
              <option value='incompleteToDos'>Incomplete</option>
            </select>
          </div>
        </div>
        {filteredTodoList ? filteredTodoList?.map((todo: IToDo) => {
          return (
            <><div className='my-3' key={todo.id}> <ToDo incompleteToDo={handleIncomplete} completeToDo={handleComplete} deleteToDo={handleDelete} ToDo={todo} /> </div></>
          )
        }) : ''}

      </main>
      <Footer />
    </div>
  )
}
