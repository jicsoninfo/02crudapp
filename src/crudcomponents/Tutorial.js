import React, { useEffect, useState } from "react";
import TutorialService from "../crudservices/TutorialService";
import { useParams, useNavigate } from "react-router-dom";

const Tutorial=props => {
    const {id}=useParams();
    let navigate=useNavigate();
    const initialTutorialState={
        id: null,
        title:"",
        description:"",
        published:false
    };
    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const [message, setMessage] = useState("");
    const handleInputChange=event =>{
        const {name, value}=event.target;
        setCurrentTutorial({...currentTutorial, [name]:value});
    }

    const getTutorial=(id) => {
        TutorialService.get(id)
        .then(response =>{
            console.log(response);
            setCurrentTutorial(response.data.data);
            console.log(response.data.data)
        }).catch(e=>{
            console.log(e);
        });
    };

    useEffect(()=>{
        if(id)
        getTutorial(id);
    }, [id]);

    const updatePublished=(status) => {
        var data = {
            id: currentTutorial.id,
            title: currentTutorial.title,
            description: currentTutorial.description,
            published: status
        };
        //console.log(data);
        TutorialService.update(currentTutorial.id, data)
        .then(response => {
            setCurrentTutorial({...currentTutorial, published:status});
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const updateTutorial = () => {
        TutorialService.update(currentTutorial.id, currentTutorial)
        .then(response =>{
            console.log(response.data);
            setMessage("The Tutorial was updated successfully!");
        }).catch(e=>{
            console.log(e);
        });
    };

    const deleteTutorial = () => {
        TutorialService.remove(currentTutorial.id)
        .then(response => {
            console.log(response.data);
            navigate("/tutorials");
        })
        .catch(e=>{
            console.log(e);
        })
    }
    
    return(
        <div>
            {currentTutorial ?
            (
            <div className="edit-form">
                <h2>Tutorial Edit</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            name="title"
                            value={currentTutorial.title}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={currentTutorial.description}
                            onChange={handleInputChange}
                        />

                    </div>

                    <div className="form-group">
                        <lable><strong>Status:</strong></lable>
                        {currentTutorial.published ? "Published" : "Pending"}
                    </div>
                </form>
                {currentTutorial.published ?(
                    <button
                        className="badge bg-primary me-2"
                        onClick = { () => updatePublished(false)}
                    >
                        UnPublish</button>
                ):(
                    <button
                        className="badge bg-primary me-2"
                        onClick={ () => {updatePublished(true)}}
                    >
                        Publish</button>
                )}

                <button
                    className="badge bg-danger me-2"
                    onClick={deleteTutorial}
                >
                Delete</button>

                <button
                    type="submit"
                    className="badge bg-success"
                    onClick={updateTutorial}
                >Update</button>
                <p>{message}</p>
            </div>
            ):(
            <div>
                <br />
                <p>Please click on a Tutorial .......</p>
            </div>
            )}
        </div>
        
    )
}

export default Tutorial;