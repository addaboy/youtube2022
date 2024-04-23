export const userColumns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  
];


export const deptColumns = [
  { field: "id", headerName: "ID", width: 200 },

  {
    field: "name",
    headerName: "Department Name",
    width: 230,
  },

  {
    field: "description",
    headerName: "Description",
    width: 400,
  },
  
];


export const userName = [

  {
    field: "username"
  },

];

export const userPhoto = [

  {
    field: "img",
    renderCell: (params) => {
      return (
          <img className="cellImg" src={params.row.img} alt="avatar" />
      );
    },
  },

];
