import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../Redux/BlogAction'
// import '../components/todo.css'

function DeleteData() {

    const [inputData, setInputData] = useState('')
    const list = useSelector((state) => state.todoReducers.delete);
    console.log('list : ',list);
    const dispatch = useDispatch();
        return (
        <>
             {/* <button id="new-task-btn"
                onClick={() => dispatch(deleteTodo(inputData), setInputData(''))}>Add</button> */}
                <div className="container">
                    <h3>Todo- Deleted Task</h3>
                    <ul id="incomplete-tasks">
                    {
                        list.map((elem, index)=>{
                            return(
                    <div>
                        <section>
                    <div className="tbl-header">
                        <table cellpadding="5" cellspacing="10" border="0">
                        <thead>
                            <tr>
                            <th>Heading</th>
                            <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={elem.id}>
                                <td style={{textAlign:"center"}}>{elem.data}</td>
                                <td>{elem.date}</td>
                      </tr>
                      <h3>Description:-</h3>
                        <p> {elem.desc}</p>
                        </tbody>
                        </table>
                    </div>
                    </section>
                   </div>
                   )
                        })
                    }
                    </ul>
            </div>
        </>
    )
}

export default DeleteData