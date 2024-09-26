import {  useState } from "react"
import TodoItem from "./TodoItem";

// for delete put a check in filter like delID != element.id


export default function Todolist() {
    let [todos, setTodos] = useState([])
    let [input,setInput] = useState('');
    let [count,setCount] = useState(1);

    function getFormattedDate() {
        const date = new Date(); // Step 1: Get the current date and time
      
        // Step 2: Extract hours and minutes
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM
      
        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
      
        // Pad minutes with leading zero if needed
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      
        // Step 3: Extract day, month, and year
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based
        const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
      
        // Step 4: Format the date string
        const formattedDate = `${hours}:${formattedMinutes} ${ampm} / ${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
      
        return formattedDate;
    }
    
    function addTodo() {
        if( input == "") return
        let text = input 
        console.log("input" ,"up",input);
        
        let newTodo = {
            id: count,
            text: text,
            date: `${getFormattedDate()}`,
            isCompleted: false
        }
        console.log("input ", input);

        setCount(count+1)
       setTodos([...todos, newTodo])

       
        setInput('');
    }

    function deleteTodo(id) {
            setTodos(todos.filter( (todo) => todo.id != id ))        
    }

    function isCompletedTodo(id) {
        setTodos(todos.map( (todo) => {
            if ( todo.id == id) return {...todo, isCompleted: !todo.isCompleted };
            else return todo;
        }))
    }
     
    function editTodo(id) {
        console.log("inside edit");
        
        let newText = prompt("ENTER NEW TITLE");
        setTodos(todos.map( (todo) => {
            if ( todo.id == id ) {
                return {...todo, text:newText};
            } else {
                return todo;
            }
        }))
    }

    return (
        <>  
            <div className="flex justify-between px-5 py-5">
                <input type="text" 
                        className=" border-2 rounded-md h-16  "
                        value={input}
                        onChange={ ((e)=> {
                            setInput(e.target.value)
                            console.log(e.target.value);
                            
                        })}
                        />
                <button onClick={ addTodo } className="border-2 rounded-lg shadow-black bg-blue-500 text-white  text-4xl  w-[200px]">add</button>
            </div>
            {todos.map( (todo)=> {
                console.log("inside map");
                    return (<TodoItem {...todo}  key={todo.id} deleteTodo={deleteTodo} isCompletedTodo={isCompletedTodo} editTodo={editTodo} /> )
                })}

        </>
    )
}

