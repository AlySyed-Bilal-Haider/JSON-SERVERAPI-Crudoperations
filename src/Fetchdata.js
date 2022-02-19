import React,{useState,useEffect} from 'react';
import { Modal } from 'react-responsive-modal';
import '../node_modules/react-responsive-modal/styles.css';
import './Fetchjson.css';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Fetch() {
  const [data,setData]=useState([]);
  const [open, setOpen] = useState(false);
  const [Idvalue,setUserId]=useState('');
  const [namevalue,setUsername]=useState('');
  const [emailvalue,setUseremail]=useState('');
  const [passwordvalue,setUserpassword]=useState('');
  const [gendervalue,setUsergender]=useState('');
  const [professionvalue,setUserprofession]=useState('');
  const headers={'Content-Type': 'application/json'};
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // get user name  after post 
  const getData=()=>{
    fetch('posts/',headers)
      .then(function(response){
        return response.json();
      }).then(function(myJson) {
        setData(myJson);
      });}
  // use effect render data of post
  useEffect(()=>{
    getData()
  },[])

  // this is function we are use for deleting the post
  const postdelete=(id)=>{
    axios.delete(`/posts/${id}`)
    .then((response)=>{
       console.log(response.data);
     }) .catch((error)=>{
      alert(error);
     })
  };
  // this function is use for update  post
  const GetUpdatepost=(id)=>{
    console.log("id",id);
    axios.get(`/posts/${id}`,headers)
    .then(function(response){
      setUserId(response.data.id);
      setUsername(response.data.name);
      setUseremail(response.data.email);
      setUserpassword(response.data.password);
      setUsergender(response.data.gender);
      setUserprofession(response.data.profession);
    });
    onOpenModal();
}
 const Edite_hanlderPost=(event)=>{
  event.preventDefault();
  const formdata={
    id: event.target[0].value,
    name: event.target[1].value,
    email:event.target[2].value,
    password: event.target[3].value,
    gender:gendervalue,
    profession:event.target[6].value
  }
  console.log("formated",formdata);
  axios.put(`/posts/${formdata.id}`,formdata,headers)
  .then(function(response){
    alert("Data updated successfully");
    onCloseModal();
    getData();
  });
 }
  return (<>
     <Modal open={open} onClose={onCloseModal} center style={{ width:'60%' }}>
       <br/>
        <h2>Post Update with the help of API</h2>
              <Form onSubmit={Edite_hanlderPost}>
              <Form.Group className="mb-3" controlId="formBasicid">
              <Form.Control type="hidden" name="name" value={Idvalue} onChange={(e)=>{setUserId(e.target.value)}} />
            </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label> username</Form.Label>
        <Form.Control type="text" name="name" value={namevalue} onChange={(e)=>{setUsername(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" value={emailvalue} onChange={(e)=>{setUseremail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicpassword">
        <Form.Label>User password</Form.Label>
        <Form.Control type="password" name="password" value={passwordvalue} onChange={(e)=>{setUserpassword(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicradio">
        <Form.Check   inline type="radio" value="female" name="gender"label="Female" checked={gendervalue==='female'} onChange={(e)=>{setUsergender(e.target.value)}}/>
        <Form.Check   inline type="radio" value="male" name="gender" label="male" checked={gendervalue==='male'} onChange={(e)=>{setUsergender(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicProfession">
        <Form.Label>User Profession</Form.Label>
        <Form.Control type="text" name="profession" value={professionvalue} onChange={(e)=>{setUserprofession(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUpdate">
        <Button type="Submit">Update</Button>
      </Form.Group>
      </Form> 

      </Modal> 
    <table id="customers">
          <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Profession</th>
                <th>Delete</th>
                <th>Edite</th>
          </tr>
          <tbody>
          {
       data && data.length>0 && data.map((item,index)=>{
           return(<>
           <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.profession}</td>
                    <td onClick={()=>{ postdelete(item.id)}}><i className="fa fa-trash-o icon"></i></td>
                    <td onClick={()=>{ GetUpdatepost(item.id)}}><i className="fa fa-edit icon"></i></td>
         </tr>
          </>)})}
        </tbody>
    </table>
    </>
     )
}

export default Fetch;