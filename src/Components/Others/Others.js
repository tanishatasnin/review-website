import React from 'react';
import './Others.css'

const Others = () => {
               return (
                              <div className='other'>
                                
                                
{/* __________________________________________________ information part  ______  */}
<div className='text-center'>
          <h1 >
                         Informations
                         </h1>     
</div>

                              <div className=' d-flex g-4'>
                                             <div className="container cards-body col-md-4 g-4 ">
                                                            <div>
                                                                           <img className='other-img' src="https://as1.ftcdn.net/v2/jpg/04/53/00/34/500_F_453003492_rOWJKlB505A2lZudjO6lPJKBoZIpwCTS.jpg" alt="" />
                                                            </div>
                                                            <div>
                                                           < h5 className='text-center'>
                                                            What is Martial Arts?            
                                                            </h5>
                                                            <p className='text-center'>In brief martial arts refer to any kinds of physical and mental activities 
                                                                           that
                                                                            relates different systematic ways of self-defense. It also refers various
                                                                             techniques and methods of training of fighting. There are two side in Martial Art, one is
                                                                              physical development,
                                                                            another is phycological or spiritual development.</p>
                                                            </div>
                                             </div>
                                             <div className="container cards-body col-md-4">
                                                            <div>
                                                                           <img className='other-img' src="https://as2.ftcdn.net/v2/jpg/04/45/53/27/500_F_445532709_S9wa34OxVq0TjELQcVwqhZbc24p3wgml.jpg" alt="" />
                                                            </div>
                                                            <div>
                                                                           
                                                            <h5 className='text-center'>What is Kung Fu?</h5>
                                                            <p className='text-center'>Kung Fu is a Chinese term that refers all kinds of traditional Chinese Martial Arts
                                                                           . Kung Fu is the natural ways of Martial Arts that converts energy to force.
                                                                            Kung Fu is the natural ways of Martial Arts that converts energy to force.
                                                                             There are lots of types of Kung Fu such as:
                                                                            Shaolin Kung Fu, Wudang Kung Fu, Wing Chun, Tai chi etc.
                                                                            </p>
                                                            </div>
                                             </div>
                                             <div className="container cards-body col-md-4 ">
<div>
               <img className='other-img ' src="https://as2.ftcdn.net/v2/jpg/04/27/40/21/500_F_427402116_k3qQkrUpli28YzRc4uI8HH8ts7ZabXwB.jpg" alt="" />
</div>
                                                            <div><h5 className='text-center'>Why not other Martial Arts?</h5>
                                                            <p className='text-center'>There are lots of verities in Martial 
                                                                           Arts System according to countries 
                                                                           and place. Among all other Martial 
                                                                           Arts; Karate, Taekwondo, Kick Boxing,
                                                                            Muay Thai, Krav Maga, Jiu-Jitsu,
                                                                             Boxing etc. are very popular in 
                                                                             their own place.</p></div>
                                             </div>
                                             </div> 
                                             {/* __________________________ information part close __________  */}



                                             {/* ___________________ programs part ___________________  */}
                                             <div className='container text-center'> 
                                  <h1 className='program'>PROGRAMS</h1>
                                 <div className='programs'>
                                 <div className =' pro d-flex'>
                                    <p className=' pro-name col-md-6'>Trial Class</p>
                                    <p className='pro-time col-md-4'>1 hr 30 mins <br /> Price Free</p>
                                    <button className='pro-button col-md-2'>Register</button>
                                  </div>
                                  <div className ='pro d-flex'>
                                    <p className='pro-name col-md-6'>Young Karate Class (ages 3-5)</p>
                                    <p className='pro-time col-md-4'>Start Jan 2,2023 <br /> $ 175</p>
                                    <button className='pro-button col-md-2'>Register</button>
                                  </div>
                                  <div className ='pro d-flex'>
                                    <p className='pro-name col-md-6'>Mini Dragon Class(5-10)</p>
                                    <p className='pro-time col-md-4'> Start Jan 4,2023<br />$ 224 </p>
                                    <button className='pro-button col-md-2'>Register</button>
                                  </div>
                                 </div>
                                </div>
                                {/* _____________________________ programs part close _________________  */}

                                {/* ______________________ history part _____________  */}
                                             <div className='history'>
                                             <h1 className ='container  text-center' > History of kung fu</h1>
                                                            <div className="his-main">
                                                            <div className ='
                                                             container d-flex align-items-center justify-content-center'>

                                                            <img className='history-img' src="https://shaolinwarriormartialarts.com/wp-content/uploads/2015/02/shaolin_pictures-3.jpg" alt="" />
                                                            <img className='history-img' src="https://shaolinwarriormartialarts.com/wp-content/uploads/2015/02/shaolin_pictures-4.jpg" alt="" />
                                                            <img  className='history-img' src="https://shaolinwarriormartialarts.com/wp-content/uploads/2015/02/shaolin_pictures-1.jpg" alt="" />
                                                            
                                                            </div>
                                                            
                                                            <p className='text-center'>Shaolin Kung Fu, also called Shaolin Wushu, is believed to be the oldest institutionalized style of Kung Fu and is one of the most famous martial arts. Shaolin Kung Fu originated and was developed in the Buddhist Shaolin temple in Songshan mountain, Henan province, China. During the 1500 years of the development of Shaolin kung fu, it became one of the biggest schools of Kung Fu, and numerous other styles were created or inspired based on Shaolin Kung Fu. One Chinese saying is: “All martial arts under heaven arose out of Shaolin.” Shaolin Kung Fu has various barehanded and weapon styles, every style with a few routines for health, and fighting.

Besides the core style of Shaolin Temple, the name Shaolin is used as a brand for the so-called external styles of Kung Fu or Wushu. There are many such styles outside of Shaolin temple, mainly in southern and northern China, that use the name Shaolin.</p>

                                                            </div>
                                             </div>

                              </div>
               );
};

export default Others;
