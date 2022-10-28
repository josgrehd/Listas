import React,{useState} from "react";


//include images into your bundle

//create your first component
const Home = () => {
	const [inputValue, setInputValue ] = useState("");
	const [task, setTask] = useState([])
    
    const agregarFila = (event) => {
      if(event.keyCode === 13){
		setTask(task.concat(inputValue))
		setInputValue('')
	  }
    }

	const valor =(event)=>{
		setInputValue(event.target.value)
	}
	const borrar =(index)=>{
		setTask(task.filter((task,elm)=> elm!==index))
	}
	return (
		
		<div className="text-center">
			<div className="">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
						<input type="text" onKeyUp={agregarFila} onChange={valor} placeholder="Write a new task" value={inputValue}/>
						</li>
						<li>
						{task.map((element, index)=>{
							return <li className="list-group-item fs-2">{element} <button onClick={()=>borrar(index)} className="borrar btn btn-outline-danger">❌</button> </li>
							})
						}
						</li>
					</ul>
					<p>{task.length} items</p>
			</div>
		</div>
	);
};

export default Home;
