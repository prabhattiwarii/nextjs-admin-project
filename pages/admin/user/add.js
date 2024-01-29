import React from 'react';
import Layout from '@/components/layout/AdminLayout';
import Head from 'next/head';
import Frontend from '@/constants/Frontend';
import styled from 'styled-components';
import colors from '@/constants/Colors';
const Wrap = styled.div`
& h1{margin:0;color:${colors.textblack};font-size:24px;padding:10px 20px;background:${colors.white};font-weight:500;}
& .box{
    padding:20px;
    & .top-wrap{
        display:flex;justify-content:space-between;align-items:center;padding:10px;background:${colors.blue};
        & .heading{color:${colors.white};font-size:18px;line-height:1;margin:0;text-transform:uppercase;font-weight:500;}
        & .add-btn{color:${colors.white};background:${colors.darkBlue};border:none;padding:0 10px;height:35px;border-radius:5px;cursor:pointer;}
    }
    & .form{
        padding:10px 20px;background:${colors.white};box-shadow:1px 0px 5px 2px ${colors.shadow};max-height:175px;
        & .ti-form-group{
            display:flex;column-gap:30px;flex-wrap:wrap;justify-content:space-between;
            & .field-group{
                margin:0 0 15px;width:calc(20% - 66.7px);
                & .label{font-size:14px;color:${colors.textblack};font-weight:600;margin:0 0 5px;}
                & .input{font-size:14px;}
                & select:focus-visible{outline-color:#00000029;}
            }
        }
    }
}
`;

const add = () => {
    const handleSubmit = () => {}
  return (
    <React.Fragment>
        <Head>
            <meta charset="utf-8"/>
            <title>{`User-Add - ${Frontend.APP_NAME}`}</title>
        </Head>
        <Layout page="user">
            <Wrap>
                <h1 className="heading">Add User</h1>
                <div className="box">
                    <div className="top-wrap">
                        <h3 className="heading">Add User</h3>
                        <button className="add-btn" type="button" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="form">
                        <div className="ti-form-group">
                            <div className="field-group">
                                <label className="label" htmlFor="f_name">Full Name</label>
                                <input type="text" id="f_name" name="f_name" className="input" placeholder="Full Name" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="phone">Phone Number</label>
                                <input type="text" id="phone" name="phone" className="input" placeholder="Phone Number" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="password">Password</label>
                                <input type="text" id="password" name="password" className="input" placeholder="Password" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="password">References</label>
                                <select name="references" id="references" className="input">
                                    <option value="0">Select References</option>
                                    <option value="1">HONDA VICKY REF</option>
                                    <option value="2">RK REF</option>
                                    <option value="3">COMMISSION REF</option>
                                    <option value="4">BANIA REF</option>
                                    <option value="5">BUGGAD REF</option>
                                    <option value="6">DEEPAK GHANTAGHAR REF</option>
                                    <option value="7">raju tajpur</option>
                                    <option value="8">SUNIL REF</option>
                                    <option value="9">1 GORAV</option>      
                                    <option value="10">GORAV</option>      
                                </select>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="limit">Limit</label>
                                <input type="text" id="limit" name="limit" className="input" placeholder="Limit" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="status">Status</label>
                                <select name="status" id="status" className="input">
                                    <option value="0">Status</option>
                                    <option value="1">Active</option>
                                    <option value="2">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="ti-form-group">
                            <div className="field-group">
                                <label className="label" htmlFor="ref-comm-joddi">Ref. Commission Joddi</label>
                                <input type="text" id="ref-comm-joddi" name="ref-comm-joddi" className="input" placeholder="Ref. Commission Joddi" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="ref-comm-harf">Ref. Commission Harf</label>
                                <input type="text" id="ref-comm-harf" name="ref-comm-harf" className="input" placeholder="Ref. Commission Harf" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="ref_patti">Ref. Patti</label>
                                <input type="text" id="ref_patti" name="ref_patti" className="input" placeholder="Ref. Patti" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="user-comm_joddi">User Commision joddi</label>
                                <input type="text" id="user-comm_joddi" name="user-comm_joddi" className="input" placeholder="User Commision joddi" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="user-comm_harf">User Commission Harf</label>
                                <input type="text" id="user-comm_harf" name="user-comm_harf" className="input" placeholder="User Commission Harf" autoComplete="off"/>
                            </div>
                            <div className="field-group">
                                <label className="label" htmlFor="user-patti">User Patti</label>
                                <input type="text" id="user-patti" name="user-patti" className="input" placeholder="User Patti" autoComplete="off"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrap>
        </Layout>
    </React.Fragment>
  )
}

export default add