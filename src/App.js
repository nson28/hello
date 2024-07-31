import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App() {
  const [role,setRole]= useState('dev');  
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
            <Employee name = "Nelson"  role="Intern" img="https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/1-andy-warhol-mark-ashkenazi.jpg"/>
            <Employee name = "Rio" role={role} img="https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/1-andy-warhol-mark-ashkenazi.jpg"/>
            <Employee name = "Irene" img="https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/1-andy-warhol-mark-ashkenazi.jpg"/>
            <Employee name = "Nelson"  role="Intern" img="https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/1-andy-warhol-mark-ashkenazi.jpg"/>
            <Employee name = "Rio" role={role} img="https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/1-andy-warhol-mark-ashkenazi.jpg"/>
            <Employee name = "Irene" img="https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/1-andy-warhol-mark-ashkenazi.jpg"/>
            
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
