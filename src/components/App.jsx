import Todolist from "./Todolist"




function App() {    
    return (
        <>
            <div className="bg-slate-500 min-h-screen w-screen   flex flex-col items-center ">
               <div className="main min-w-[1000px]">
               <h1 className="text-text-todo text-center text-6xl">TODO LIST</h1>
                <div className="flex justify-between">
                <label >
                   
                </label>
                
                </div >
                <div>
                <Todolist/>
                </div>
               </div>
            </div>
        </>
    )
}

export default App
