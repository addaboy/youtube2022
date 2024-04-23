import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, deleteDoc, doc  } from "firebase/firestore";
import { db } from "../../firebase";


const Pharmacist_Table = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      let list = []
      try {
        const querySnapshot = await getDocs(collection(db, "pharmacies"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data()})
        });
        setData(list)
        console.log(list)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "pharmacies", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Pharmacist
        <Link to="pharmacists" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Pharmacist_Table