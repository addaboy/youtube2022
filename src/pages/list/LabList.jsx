import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Laboratory_Table from "../../components/datatable/Laboratory_Table"

const LabList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Laboratory_Table />
      </div>
    </div>
  )
}


export default LabList