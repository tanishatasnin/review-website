import React from 'react';
import './FaQ.css'

const FaQ = () => {
               return (
                              // __________________ accodion ___________ 
                              <div className='FaQ'>
                                             <div className='container'>

                                                            <div >
                                                              <p className="text-center faq-head">Frequently Ask Questions</p>             
                                                            </div>
                                                            <div className="accodion-part">
                                             <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Do I have to register my hands when I become a black belt?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">No, that is an urban myth. Martial Artists are not required to register their hands.
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Do I have to be in good shape before I start?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">No, you will get into shape as you train. We have a series of exercises that you will learn as you progress through the ranking system which will enable you to perform the self defense techniques.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      I am 31 years old, am I too old to start martial arts?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">No, you are not too old to begin martial arts training. Kenpo regularly has students start from adolecense through their 50's and older. Kenpo is a practical and effective martial art that does not incorporate gymnastics.
.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
     What is the difference between Tae Kwon Do and Kenpo?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Tae Kwon Do is a Korean Martial Art that focuses primarily on kicking techniques. Some Tae Kwon Do schools also teach Olympic style fighting. Kenpo is a practical self defense system which trains the student for modern day self defense encounters. Kenpo students are taught to use their hands and feet with multiple strikes to multiple targets on each attacker,
       in a multiple attack situation..</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
    I am very busy with my work schedule, how much time do I need to devote to kenpo classes?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The two 1 hour classes are week are recommended, as is practicing at home. As you progress through the ranks if you want more 1:1 attention we offer 30 minute private lessons which can further help hone your skills..</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button test-width collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How long does it take to get a black belt?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">In Kenpo Karate, it takes approximately 5 years to reach student black belt..</div>
    </div>
  </div>
  </div>
  
</div>
                                             </div>
                              </div>
               );
};

export default FaQ;