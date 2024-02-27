import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import NotesService from "../services/NotesService";

const AddNote = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[category, setCategory] = useState('programming');
    const[errors, setErrors] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const saveNote = (e) => {
        e.preventDefault();

        if (!title || !body) {
            setErrors(true);
            return;
        }

        const note = {title, body, category, id};
        if (id) {
            //call the service update method
            NotesService.update(note)
                .then(response => {
                    console.log("Note updated successfully", response.data);
                    navigate("/");
                })
                .catch(error => {
                    console.log("Something went wrong", error);
                })
        } else {
            //call the service create method
            NotesService.create(note)
            .then(response => {
                console.log("Note added successfully", response.data);
                navigate("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            NotesService.get(id)
                .then(note => {
                    setTitle(note.data.title);
                    setBody(note.data.body);
                    setCategory(note.data.category);
                })
                .catch(error => {
                    console.log("Something went wrong", error);
                })
        }
    }, []);

    return (
        <div className="create">
            <div className="text-center">
                <h5>{id ? "Update a Note" : "Add a New Note"}</h5>
                {errors && <span style={{color: 'red', fontStyle: 'italic'}}>Please enter the mandatory fields</span>}
            </div>
            <form>
                <div className="form-group mt-3">
                    <label htmlFor="title">Note Title: <sup>*</sup></label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="body">Note Description: <sup>*</sup></label>
                    <textarea id="body" className="form-control" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="category">Note Category:</label>
                    <select id="category" className="form-control mt-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="programming">Programming</option>
                        <option value="vacation">Vacation</option>
                        <option value="meeting">Meeting</option>
                        <option value="blogging">Blogging</option>
                    </select>
                </div>
                <div className="text-center">
                    <button className="mt-3 btn btn-success" onClick={(e) => saveNote(e)}>{id ? "Update Note": "Add Note"}</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddNote;