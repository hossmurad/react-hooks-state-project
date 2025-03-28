import {useState} from "react";


const App = () => {

    const [todo, setTodo] = useState([])



   const onSubmit = (event)=>{
        event.preventDefault()
       let formData = new FormData(event.target);
        let item = formData.get('item')
       todo.push(item)
       setTodo([...todo])
       event.target.reset()


    }

    const remove = (index)=>{
        todo.splice(index,1)
        setTodo([...todo])
    }



    return (
        <div>
           <div>
               <form onSubmit={onSubmit}>
                   <input type='text' name="item" required ={true}/>
                   <input type="submit" value="add to do" />
               </form>

           </div>
            <br/>
            <h3>List of the to do </h3>

            <table>
                <tbody>
                {
                    todo.map((item,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item}</td>
                            <button onClick={()=>{remove(index)}}>Remove</button>

                        </tr>
                    ))
                }
                </tbody>
            </table>



        </div>
    );
};

export default App;