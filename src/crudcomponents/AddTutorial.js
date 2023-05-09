import React, {useState} from "react";
//import { useState } from "react/cjs/react.production.min";

import TutorialDataService from "../crudservices/TutorialService"

const AddTutorial = () =>{
    const initialTutorialState = {
        id:null,
        title:"",
        description: "",
        published: false
    }
    const [tutorial, setTutorial] = useState(initialTutorialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setTutorial({...tutorial, [name]:value});
        //console.log(tutorial);
    }
    
    
    const saveTutorial =() => {
        //alert('hi');
        //console.log(tutorial);
        var data = {
            title:tutorial.title,
            description:tutorial.description
        };
        
        TutorialDataService.create(data)
        .then(response => {
            setTutorial({
                id:response.data.id,
                title:response.data.title,
                description:response.data.description,
                published:response.data.published
            });
            setSubmitted(true);
            console.warn(response.data)
        })
        .catch(e=>{
            console.log(e);
        });
    };

    const newTutorial = () => {
        setTutorial(initialTutorialState);
        setSubmitted(false);
    }

    return(
        <div className="submit-form">
            {submitted ?(
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newTutorial}>Add</button>
                </div>
            ):(
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" required name="title" value={tutorial.title} onChange={handleInputChange}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" required name="description" value={tutorial.description} onChange={handleInputChange}></input>
                    </div>
                    <div className="mt-3">
                        <button onClick={saveTutorial} className="btn btn-success">Submit</button>
                    </div>
            </div>
            )}

        </div>
        
    );
} 

export default AddTutorial;