import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import NotesService from "../services/NotesService";

const NoteDetails = () => {
    const {id} = useParams();
    const[currentNote, setCurrentNote] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        NotesService.get(id)
            .then(note => {
                setCurrentNote(note.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, []);

    const handleDelete = () => {
        NotesService.remove(id)
            .then(response => {
                navigate("/");
            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
    }

    const handleEdit = () => {
        navigate(`/notes/edit/${id}`);
    }

    return (  
        <div className="note-details main-content">
            {
                currentNote &&
                <div>
                    <article>
                        <h5 className="text-capitalize primary-color">{currentNote.title}</h5>
                        <div className="mb-3 font-italic metadata">
                            <span>{currentNote.updatedAt}</span>
                            <span className="text-capitalize ms-2">, {currentNote.category}</span>
                        </div>
                        <div className="mb-3">{currentNote.body}</div>
                    </article>
                    <button onClick={handleEdit} className="btn btn-dark">Edit</button>
                    <button onClick={handleDelete} className="ms-3 btn btn-danger">Delete</button>
                </div>
            }
        </div>
    );
}
 
export default NoteDetails;