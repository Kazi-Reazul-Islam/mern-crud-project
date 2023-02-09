import React, {useEffect, useState} from "react";
import {Read} from "../../apiservices/CRUDServices";

const ListTable = () => {
    let [DataList,SetDataList] = useState([])
    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result)
        })
    },[])
  return (
    <div className="container mt-5">
      <table className="table">
          <thead>
          <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Product Image</th>
              <th>Product UnitPrice</th>
              <th>Product Qty</th>
              <th>TotalPrice</th>
              <th>Action</th>


          </tr>
          <tbody></tbody>
          </thead>
      </table>
    </div>
  );
};

export default ListTable;
