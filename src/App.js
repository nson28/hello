import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {
  const [role,setRole]= useState('dev');
  const[employees, setEmployees] =  useState(
    [
      {        
        name:"Dana", 
        role:"Developer", 
        img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
      },
      { name:"Irene", 
        role:"Manager", 
        img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      },
      { name:"Panther", 
        role:"Programmer", 
        img:"https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg",
      },
      { name:"Nelson", 
        role:"Artist", 
        img:"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg",
      },
      { name:"Dianne", 
        role:"Animator", 
        img:"https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg",
      },
      { name:"Libeth", 
        role:"Analyst", 
        img:"https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg",
      },
    ]
  ); 
  const showEmployees =true;

  return (
    <div className="App ">
        {showEmployees ? (
        <>
        <input type ='text'onChange={(e)=>{
          console.log(e.target.value);
          setRole(e.target.value);

        }} />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee)=> {
              return(
                <Employee
                  id= {uuidv4()} 
                  name={employee.name} 
                  role={employee.role} 
                  img = {employee.img}
                />
              );             
            
            })}
            
          </div>
          
        </>                
        
      ): (
          <p>you cannot see the employees</p>
      )

      } 
      
    </div>
  );
}

export default App;
