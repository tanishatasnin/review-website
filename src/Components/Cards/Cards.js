import React from 'react';
import './Card.css'

const Cards = (props) => {
               const {title, img,level,fee,text,section }=props.course;

               return (
                              <div className='container box d-flex g-4 '>
                                         <div>
                                         <img className='img-width col-md-6' src={img} alt="" />
                                         </div>
                                             <div className='col-md-6'>
                                             
                                             <h5>{section}</h5>
                                             
                                             <h6>{title}</h6>
                                             <p><small>{text}</small></p>
                                             <h6>Course fee: {fee}</h6>
                                             </div>
                                             
                                                
                              </div>
               );
};

export default Cards;
