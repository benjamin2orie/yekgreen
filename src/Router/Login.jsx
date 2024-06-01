
import React from 'react';
import SubHome from '../Components/Landing_page/SubHome';
const name = "John doe";
const x = 20;
const y = 10;
const workersNames = ['Mary', 'mark', 'marther', 'benjamin'];
const styles = {
  color: '#0202',
  fontSize: '20px',
  display: 'flex',
  justifyContent: 'center',
}

const colors = {
  diplay: 'flex',
  background: '#D4D4D4',
  fontFamily: 'Arial',
  textTransform: 'capitalize',
  width: '50%',
  height: '200px',
  marginLeft: '7em',
  borderRadius: '3px',
  paddingTop: '3em',
  marginTop: '9em',
  cursor: 'pointer',
}
const Logger = 1;


const Login = () => {
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>the sum of {x} and {y} is {x + y}</p>
      <ul style={colors}>
        { workersNames.map((workersName,index) =>(
          <li key={index} style={styles}>{workersName}</li>
        ))}
      </ul>
      { Logger && <SubHome/>}
    </div>
  )
}

export default Login
