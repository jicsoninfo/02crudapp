import React, {useState, useEffect} from "react";
import TutorialDataService from "../crudservices/TutorialService";
import {Link} from "react-router-dom";



const TutorialList=() =>{
    const[tutorials, setTutorials]=useState([]);
    const[currentTutorial, setCurrentTutorial]=useState(null);
    const[currentIndex, setCurrentIndex]=useState(-1);
    const[searchTitle, setSearchTitle] = useState("");
    useEffect(()=> {
        retrieveTutorials();
    },[]);

    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };
    
    const retrieveTutorials=() =>{
        TutorialDataService.getAll()
        .then(response =>{
            setTutorials(response.data.data);
            console.log(response.data.data);
        })
        .catch(e=> {
            console.log(e);
        });
    };

    const refreshList = () =>{
        retrieveTutorials();
        setCurrentTutorial(null);
        setCurrentIndex(-1);

    }

    const setActiveTutorial=(tutorial, index) => {
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
    }

    const findByTitle = () => {
        TutorialDataService.findByTitle(searchTitle)
        .then(response => {
            setTutorials(response.data.data);
            console.log(response.data.data); 
        }).catch(e=>{
            console.log(e);
        });
    };

    const removeAllTutorials =() =>{
        TutorialDataService.removeAll()
        .then(response => {
            console.log(response.data);
            refreshList();
        }).catch(e =>{
            console.log(e);
        })
    };
    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-controll" 
                        placeholder="search by title" 
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                        />
                    <div className="input-group-append ml-8">
                        <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={findByTitle}>
                        Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>List</h4>
                <ul className="list-group">
                    {tutorials && tutorials.map((tutorial, index)=>(
                        <li className={"list-group-item " + (index === currentIndex ? "active" : "")} onClick={()=> setActiveTutorial(tutorial, index)} key={index}>
                            {tutorial.title}
                        </li>
                    ))}
                </ul>
                <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllTutorials}
                >Remove All</button>
            </div>
            <div className="col-md-6">
                {currentTutorial ?(
                    <div>
                    <h4>List</h4>
                    <div>
                        <label><strong>Title:</strong></label>
                        {" "}{currentTutorial.title}
                    </div>
                    <div>
                        <label><strong>Description:</strong></label>
                        {" "}{currentTutorial.description}
                    </div>
                    <div>
                        <label><strong>Status:</strong></label>
                        {" "}{ currentTutorial.published ? "Published":"Pending" }
                    </div>
                    <Link className="badge badge-success" to={"/tutorials/" + currentTutorial.id}>
                        Edit
                    </Link>
                </div>
                ):(
                    <div>
                        <br />
                        <p>Please click on a List .........</p>
                    </div>
                )}
                
             
            </div>
        </div>
    )
}

export default TutorialList;