import React, { useState} from 'react';
import {Formik, Form, Field} from 'formik';
import Errorsg from './Errormsg';
import { LoginSchema } from './Yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';
function UserForm() {
  const Initivalue={name:'',email:'',password:'',gender:'',profession:''};
  let navigate=useNavigate();
  const headers={
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
//   Post data in json server with the help of React.js and axios library
  return <>
  <Formik initialValues={Initivalue} 
  validationSchema={LoginSchema}
  onSubmit={(values)=>{ 
    axios.post('/posts',values,headers)
    .then((response)=>{
       console.log(response.data);
     })
     .catch((error)=>{
        console.log(error);
     })
     alert("Data submit success fully");
     navigate('/');
        }}>
    <div className="container ">
<div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <Form className="well form-horizontal"  className="requires-validation" method="post"  id="contact_form">
                            <div className="col-md-12">
                               <Field className="form-control" type="text" name="name" placeholder="Full Name" />
                               <div className="valid-feedback">Username field is valid!</div>
                               <Errorsg name='name' className='error'/>
                            </div>

                            <div className="col-md-12">
                                <Field className="form-control" type="email" name="email" placeholder="E-mail Address" />
                                 <div className="valid-feedback">Email field is valid!</div>
                                <Errorsg name='email' className='error'/>
                            </div>
                           <div className="col-md-12">
                           <Field className="form-control" type="text" name="profession" placeholder="Porfession"/>
                                <Errorsg name='profession' className='error'/>
                           </div>
                           <div className="col-md-12">
                              <Field className="form-control" type="password" name="password" placeholder="Password"/>
                               <div className="valid-feedback">Password field is valid!</div>
                               <Errorsg name='password' className='error'/>
                           </div>
                           <div className="col-md-12">
                              <Field className="form-control" type="password" name="confirm_password" placeholder=" confirm Password"/>
                               <div className="valid-feedback">Password field is valid!</div>
                               <Errorsg name='confirm_password' className='error'/>
                           </div>
                           <div className="col-md-12 mt-3">
                            <label className="mb-3 mr-1" htmlFor="gender" style={{ marginRight:'5px' }}>Gender: </label>
                            <Field type="radio" className="btn-check m-2" defaultChecked name="gender" id="male" value="male" autoComplete="off"/>
                            <label className="btn btn-sm btn-outline-secondary" style={{ marginRight:'5px' }} htmlFor="male">Male</label>
                            <Field type="radio" className="btn-check  m-2"  name="gender" id="female" value="female" autoComplete="off" />
                            <label className="btn btn-sm btn-outline-secondary" style={{ marginRight:'5px' }}  htmlFor="female">Female</label>
                            <Field type="radio" className="btn-check m-2" name="gender" id="secret" value="other" autoComplete="off" />
                            <label className="btn btn-sm btn-outline-secondary" style={{ marginRight:'5px' }} htmlFor="secret">Secret</label>
                               <div className="valid-feedback mv-up">You selected a gender!</div><br/>
                                <Errorsg name='gender' className='error'/>
                            </div>
                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </Form>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</Formik>
</>
}

export default UserForm;
