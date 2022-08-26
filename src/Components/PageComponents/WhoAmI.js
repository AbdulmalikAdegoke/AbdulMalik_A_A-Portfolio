import React from 'react'

export default function WhoAmI({ togglePageView }) {
  return (
    <div id='whoAmI' className='containers who_am_i'>
      <h2 className='sub_headings black_white'>
        Who Am I?
      </h2>

      <div className='profile'>
        <div className='profile_content'>
          <div>
            <p>I am AbdulMalik Adegoke, Nigerian, born and raised in Nigeria. I am a recent Computer Science graduate from the University of Dundee and I'm looking to put my current and yet-to-be-honed skills into practice in the computing industry.</p>
            <p>I am versatile in terms of skills as I am a Software Developer, a UI/UX Designer, a Creative, a Photographer, an Artist...</p>
            <p>I would like to apply my skills in the solution of real world problems and also explore the versatility of my skills in different parts of the tech industry.</p>
            <p>Welcome to my portfolio</p>
          </div>

          <button
          className='page_buttons white_black about_me'
          onClick={()=>{togglePageView("about_me")}}
          >
            About Me
          </button>
        </div>
        <div className='portrait_image'>
          <img className='portrait_img' src={require('../../Assets/Abdulmalik\'s portrait.jpg')} alt='A portrait of Abdulmalik Adegpke' />
        </div>
      </div>

    </div>
  )
}
