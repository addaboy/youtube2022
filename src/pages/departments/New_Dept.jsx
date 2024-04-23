import "../new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {db} from "../../firebase"
import { collection, addDoc } from "firebase/firestore";




const New_Dept = () => {
 
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "departments"), {
        name,
        description
      });
      alert('Department added successfully!');
      // Clear form inputs
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding department: ', error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Department</h1>
        </div> 
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
            

              
                <div className="formInput" >
                  <label>Department Name</label>
                  <input
                  value={name}
        onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formInput" >
                  <label>Description</label>
                  <input 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              <button  type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default New_Dept