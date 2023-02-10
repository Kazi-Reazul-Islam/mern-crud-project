import React, {useEffect, useState} from "react";
import {Read} from "../../apiservices/CRUDServices";
import FullScreenLoader from "../common/FullScreenLoader";

const ListTable = () => {
    let [DataList,SetDataList] = useState([])
    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result)
        })
    },[])
    if(DataList.length>0){
        return (
            <div className="container mt-5">
                <table className="table table-bordered ">
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
                    </thead>
                    <tbody>
                    {
                        DataList.map((item,i)=>{
                            return(
                                <tr>
                                    <td>{item.ProductName}</td>
                                    <td>{item.ProductCode}</td>
                                    <td><img className="list-img" src={item.Img}/></td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.Qty}</td>
                                    <td>{item.TotalPrice}</td>
                                    <td>
                                        <button className="btn btn-danger mx-2">Delete</button>
                                        <button className="btn btn-primary">Update</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                    </tbody>

                </table>
            </div>
        );
    }
    else {
        return (
            <div>
                <FullScreenLoader />
            </div>
        )
    }

};

export default ListTable;
