import colors from "@/constants/Colors";
import { deleteIcon, downloadIcon, editIcon,sortdownIcon, sortupIcon } from "@/helpers/Icon";
import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    width:100%;padding:0 20px;
    & .body-wrap{
        & .field-wrap{
           display:flex;justify-content:space-between;width:100%;
           & .number-input{max-width:80px;}
           & input{max-width:300px;}
        }
        & .table-wrap{
            margin:20px 0 0;
            & .table{
                border-spacing:0;border-collapse:collapse;
                & .head{
                    & .row{
                        & .table-head{
                            padding:5px 30px 5px 15px;background:${colors.darkBlue};color:${colors.white};font-size:16px;font-weight:400;border:1px solid ${colors.borderlight};
                            & .sort-icon{cursor:pointer;display:inline-flex;flex-direction:column;
                                & .upicon{transform:rotate(180deg);}
                            }
                        }
                    }
                }
                & .table-body{
                    & .data{
                        padding:20px 10px 10px ;border:1px solid ${colors.borderlight};margin:0 !important;
                        & .link{color:${colors.textblack};}
                    }
                    & .action{
                        text-align:center;border:1px solid ${colors.borderlight};
                        & .link-icon{color:${colors.white};border-color:${colors.darkBlue};background:${colors.darkBlue};border-radius:3px;};
                        & .btn{padding:12px 10px 7px;margin:0 5px 0 0;font-size:14px;}
                        & .delete-btn{background:${colors.red};}
                    }
                }
            }
        }
    }
`;
const DataTable = () => {
    const data = [
        { id:1,name:"raj",age:22,references:"raj",mobile:"9809899880",limit:2000,balance:30000,profit:"",rcj:"",rch:"",rp:"",ucj:"",uch:"",up:"",action:""},
        { id:2,name:"raj",age:22,references:"raj",mobile:"9809899880",limit:2000,balance:30000,profit:"",rcj:"",rch:"",rp:"",ucj:"",uch:"",up:"",action:""},
        { id:3,name:"raj",age:22,references:"raj",mobile:"9809899880",limit:2000,balance:30000,profit:"",rcj:"",rch:"",rp:"",ucj:"",uch:"",up:"",action:""},
        { id:4,name:"raj",age:22,references:"raj",mobile:"9809899880",limit:2000,balance:30000,profit:"",rcj:"",rch:"",rp:"",ucj:"",uch:"",up:"",action:""},
        { id:5,name:"raj",age:22,references:"raj",mobile:"9809899880",limit:2000,balance:30000,profit:"",rcj:"",rch:"",rp:"",ucj:"",uch:"",up:"",action:""},
        { id:6,name:"raj",age:22,references:"raj",mobile:"9809899880",limit:2000,balance:30000,profit:"",rcj:"",rch:"",rp:"",ucj:"",uch:"",up:"",action:""},
        { id:7,name:"raj",age:22,references:"raj",mobile:"9809899880",limit:2000,balance:30000,profit:"",rcj:"",rch:"",rp:"",ucj:"",uch:"",up:"",action:""},
    ]
    return (
        <Wrap>
            <div className="body-wrap">
                <div className="field-wrap">
                    <input type="text" name="" placeholder="Search"/>
                    <input className="number-input" type="number" name=""/>
                </div>
                <div className="table-wrap">
                    <table className="table">
                        <thead className="head">
                            <tr className="row">
                                <th className="table-head"><span className="sort-icon">{sortupIcon({width:11,height:11,fill:colors.white})} {sortdownIcon({width:11,height:11,fill:colors.white})}</span> <span>Name</span></th>
                                <th className="table-head"><span className="sort-icon">{sortupIcon({width:11,height:11,fill:colors.white})} {sortdownIcon({width:11,height:11,fill:colors.white})}</span> References</th>
                                <th className="table-head"><span className="sort-icon">{sortupIcon({width:11,height:11,fill:colors.white})} {sortdownIcon({width:11,height:11,fill:colors.white})}</span> Mobile</th>
                                <th className="table-head">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="data"><a className="link" href="#">{item.name}</a></td>
                                    <td className="data">{item.mobile}</td>
                                    <td className="data">{item.age}</td>
                                    <td className="action">
                                        <a className="link-icon btn" href="#">{editIcon({width:18,height:18,fill:colors.white})}</a>
                                        <a className="link-icon btn delete-btn" href="#">{deleteIcon({width:18,height:18,fill:colors.white})}</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrap>
    )
}

export default DataTable;