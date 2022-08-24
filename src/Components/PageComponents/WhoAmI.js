import React from 'react'

export default function WhoAmI({ togglePageView }) {
  return (
    <div className='who_am_i_container'>
      <h2>
        Who Am I?
      </h2>

      <div className='profile'>
        <div className='profile_content'>
          <p>

          </p>

          <button
          className='page_buttons white_black'
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
