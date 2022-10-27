import React from 'react'
import '../App.css'
import designerImage from '../img/pink.webp'


function Landing() {
    return( 
        <>
            <div className="designer-div">
                <p className="p-designer">Guides</p>
                <h1 className="h1-designer">Create a Landing<br/> Page That Performs<br/> Great</h1>
                <p className="p-date">May 2, 2022</p>
                <img src={designerImage} alt="" className="designer-image" />
            </div>
            
            <div className="designer-para">
                    <div className="all-para">
                    <h1 className="h1-designer-title">What does automation mean for designers?</h1>
                        <p className='para-1'>
                        It's hard to work on a product team that hasn’t automated some part of their<br/> workflow in the name of productivity. If machines can take care of the repeatable<br/> tasks and heavy lifting, designers can focus on doing more meaningful work. But<br/> how does this affect the way we use the work being created by machines?<br/>
                        </p>
                        <p className="para-1">
                        Josh Clark, founder of design studio Big Medium, provoked the audience with this<br/> very question during his talk, ‘A.I. is your New Design Material’. Some of the most<br/> impressive advancements in recent technology are things like facial recognition,<br/> predictive text, and image search, all powered by machine learning. But it's<br/> important to remember—all of these technologies are still built on code. The upside<br/> is less room for error. No real emotions, expectations, or feelings get in the way of<br/> the job it was designed to do.<br/>
                        </p>
                        <p className="para-1">
                        Yet, as humans, we assume that when facial recognition fails, the whole process is<br/> inherently flawed. But was it really?
                        </p>
                        <p className="para-1">
                        According to Josh, that is the most fundamental thing to understand when it comes<br/> to machines. Not meeting our human expectations, doesn’t automatically make the<br/> technology itself a failure. These things were, by definition, built on logic, which<br/> begs the question: Can a robot's solution actually be wrong?
                        </p>
                    </div>
            </div>


            <div className="email-box">
                <div className="text-email">
                    <h1 className="sub">Subscribe</h1>
                    <p className="p-email">Get fresh web design stories, tips, and resources<br/> delivered straight to your inbox every week.</p>
                    <form>
                        <input type="email" placeholder='Your Email' className="input-email" required />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Landing;