import React, { useEffect, useState } from 'react';
import About from '../AboutUs/About';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
               const [courses ,setProducts] =useState([])

               useEffect(()=>{
                              fetch('./data.JSON')  
                              .then(res=>res.json())   
                              .then(data=>setProducts(data))  
                      },[])
               return (
                              <div>
                                             <div>
                                                            
                                                            <h3 className='text-center'>Courses Available – Weekly 2 Classes. <br />
ADMISSION GOING ON</h3>
                                             </div>
                                             
                                             <div className="container home-page ">
                                             {/* <About></About> */}
                                             <h1 className='text-center stafs m-4'>our classes</h1>
                              <div className=" row row-cols-1 row-cols-md-2">
                                             {
                                                    courses.slice(0,4).map(course=><Cards
                                                    course={course}>

                                                    </Cards>)        
                                             }
                              </div>
                             
                              </div>
                              <div>
                                     <p className="stafs text-center">MEET OUR STAFF</p>
                              </div>
                              <div className="container staff-part d-flex">
                                     <div className= ' staffs col-md-4'>
                                     <div>
                                            <img className='sttaf-img' src="https://static.wixstatic.com/media/86cb94_32b720232b644c9dbf2a4d5d7da3b548~mv2_d_3850_3939_s_4_2.jpg/v1/crop/x_0,y_276,w_3850,h_3387/fill/w_316,h_278,al_c,q_80,usm_0.66_1.00_0.01/86cb94_32b720232b644c9dbf2a4d5d7da3b548~mv2_d_3850_3939_s_4_2.webp" alt="" />
                                     </div>
                                     <div className='staff-info text-center'>
                                            <div className='stafe-name'>
                                            <h4>Jake Silva</h4>
                                            <h5>Owner and Chief Instructor</h5>
                                            </div>
                                            <p>He is one of the leading Karate Master.He has a lot of achievement in his Martial Arts career</p>
                                     </div>
                                     </div>

                                     <div className='staffs col-md-4'>
                                     <div>
                                            <img className='sttaf-img' src="https://static.wixstatic.com/media/86cb94_75af304ccfde48998a02d6f59408ad27~mv2_d_3022_2998_s_4_2.jpg/v1/crop/x_0,y_167,w_3022,h_2665/fill/w_316,h_278,al_c,q_80,usm_0.66_1.00_0.01/86cb94_75af304ccfde48998a02d6f59408ad27~mv2_d_3022_2998_s_4_2.webp" alt="" />
                                     </div>
                                     <div className='staff-info  text-center'>
                                            <div className="stafe-name">
                                            <h4>Terri Garner</h4>
                                            <h5>Instructor</h5>
                                            </div>
                                            <p className='text-center p-2'>She is from japan.He is a Double Degree Black Belt Holder in Karate and 2nd Duan holder in Chinese Wushu </p>
                                     </div>
                                     </div>

                                     <div className='staffs col-md-4'>
                                     <div>
                                            <img className='sttaf-img' src="https://static.wixstatic.com/media/86cb94_f252bd28d210422682c070526a410f71~mv2_d_3428_3334_s_4_2.jpg/v1/crop/x_0,y_154,w_3428,h_3025/fill/w_315,h_278,al_c,q_80,usm_0.66_1.00_0.01/86cb94_f252bd28d210422682c070526a410f71~mv2_d_3428_3334_s_4_2.webp" alt="" />
                                     </div>
                                     <div className='staff-info text-center '>
                                     <div className='stafe-name'>
                                            <h4>Sean Walters</h4>
                                            <h5>Owner and Chief Instructor</h5>
                                            </div>
                                            <p>He is from China.He is a Double Degree Black Belt Holder in Karate and 2nd Duan holder in Chinese Wushu </p>
                                     </div>
                                     </div>

                              </div>
                              
                              
                              </div>
               );
};

export default Home;