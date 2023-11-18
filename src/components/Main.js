import React from 'react';
import videoBg from '../assets/VideoFootage.mp4';


const Main = () => {
  return (
    <div className='container'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay muted loop  />
        <div className="content">
            <h1>ยินดีต้อนรับ</h1>
            <p>โปรเจค Midterm วิชา CPE499 (React.JS)</p> 
           <div className="textName">
            <h3 >อรรถพล เกิดลำเจียก</h3>
            <h3 >รหัสนักศึกษา 6302739</h3>
            </div>  
            </div>  
      </div>
  );
}

export default Main;