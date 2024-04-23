import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Departmentstable from "../../components/datatable/Departmentstable"
import DoctorsTable from "../../components/datatable/DoctorsTable"

const DoctorsList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DoctorsTable />
      </div>
    </div>
  )
}

export default DoctorsList