import PropTypes from "prop-types"

export default function TodoItem({ id, text, date, isCompleted, deleteTodo, isCompletedTodo, editTodo}) { // prop validation error by eslint
    console.log(id);
    
    
    return (
        <div className="grid grid-cols-11 justify-around py-4 text-2xl">
            <input type="checkbox"  
                value={isCompleted}
                className=" w-8 h-8 relative top-4 left-4 "
                onChange={()=> isCompletedTodo(id)} 
            />
            <div className="title&date col-span-8 overflow-y-auto max-w-[480] font-mono shrink">
                <p className={isCompleted? "line-through" : ""}>{text}</p>
                <p >{date}</p> 
            </div>
            <button
                onClick={()=>deleteTodo(id)}
            id="delete" className="border-2 rounded-lg shadow-black bg-blue-500 text-white  text-3xl   w-[100px]"> delete </button>
            <button onClick={()=> editTodo(id)} className="border-2 rounded-lg shadow-black bg-blue-500 text-white  text-3xl  w-[100px]">edit</button>
        </div>
    )
}

TodoItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id can be string or number, and is required
    text: PropTypes.string.isRequired, // text is a required string
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired, // date can be a string or Date object, and is required
    isCompleted: PropTypes.bool.isRequired, // isCompleted is a required boolean
    deleteTodo: PropTypes.func.isRequired,
    isCompletedTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,

};


