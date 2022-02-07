import React, { useEffect, useState , useMemo,useCallback} from 'react';
import List from './components/List';


const initialUsers = [
{
  id:1 , name: 'ezequiel'
},
{
  id:2 , name: 'Pablo'
},


]

const initialText = "";



const App = () => {

const [users, setUsers] = useState(initialUsers);
const [text, setText]   = useState(initialText);
const [search, setSearch]   = useState("");

const handdleChange  = (e)=>{
setText(e.target.value);
}

const handdleAdd  = (e)=>{
const newUser = {
  id: Date.now(),
  name: text,

}
setUsers([...users, newUser]);

}
  

const handdleSearch  = (e)=>{
  setSearch(text);

}


const handdleDelete  = useCallback((userId)=>{


  const changedUsers = users.filter((user)=>user.id !==userId)
  setUsers(changedUsers);

},[users])



const filteredUsers = users.filter((user) =>{



  return user.name.toLowerCase().includes(search.toLowerCase())

});



const printUsers  = useCallback( ()=>{

  console.log('usuarioooooooooooos ');

},[users])

useEffect(() => {


  return () => {
  }
}, [users]);



useEffect(()=>{
printUsers();

},[users])


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  

return (



  
    <div>
    <h1> APP COMPONENT</h1>

      <input type={text}  value={text} onChange={handdleChange}/>

      <button onClick={handdleSearch}> Search  </button>

      <button onClick={handdleAdd}> Add  </button>
   
   
    <List users={filteredUsers}  handdleDelete={handdleDelete} />


    </div>
  );
};


export default App;