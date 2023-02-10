import React, {useEffect, useState} from "react";
import {Delete, Read} from "../../apiservices/CRUDServices";
import FullScreenLoader from "../common/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../../helper/ValidatioHelper";
import {withRouter} from "react-router";

const ListTable = (props) => {
    let [DataList,SetDataList] = useState([])
    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result)
        })
    },[])

    const DeleteItem = (id)=>{
        Delete(id).then((Result)=>{
            if(Result===true){
                SuccessToast("Delete Success")
                props.history.push("/")
            }
            else {
                ErrorToast("Request Fail Try Again")
            }
        })
    }

    const UpdateItem = (id)=>{
        alert(id)
    }

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
                                    <td><img className="list-img" alt="img" src={item.Img}/></td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.Qty}</td>
                                    <td>{item.TotalPrice}</td>
                                    <td>
                                        <button onClick={DeleteItem.bind(this,item._id)} className="btn btn-danger mx-2">Delete</button>
                                        <button onClick={UpdateItem.bind(this,item._id)} className="btn btn-primary">Update</button>
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

export default withRouter(ListTable);
