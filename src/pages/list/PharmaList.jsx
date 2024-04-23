import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Pharmacist_Table from "../../components/datatable//Pharmacist_Table"

const PharmaList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Pharmacist_Table />
      </div>
    </div>
  )
}

export default PharmaList