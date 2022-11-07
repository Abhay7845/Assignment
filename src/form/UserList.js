import React from "react";

const UserList = (props) => {
  console.log("userList1 :>> ", props.userList);
  const { name, email, number, city } = props.userList;

  return (
    <div className="my-3">
      <div className="table-responsive my-3">
        <h3 className="text-center  my-3"> Data</h3>
        <table className="table table-hover table-bordered table-pointer">
          <thead className="bg-secondary text-white">
            <tr>
              <th>Name</th>
              <th className="text-center">Email</th>
              <th>Phone Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{number}</td>
              <td>{city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
