import React from 'react'

import { Form, Input, Button } from 'reactstrap'

export default function Contacts() {
  return (
    <div id='contacts' className='containers contacts'>
      <h2>
        Contacts
      </h2>
      
      <div>
        {/* navbar list of contact mediums */}
          <ul className="navbar_list">
            <a href="mailto:abdulmalikadegoke@gmail.com">
              <li className="nav_links">
                {/* Icon */}
                <img className='contact_icon' src={require('../../Assets/Icons/icons8-mail-240.png')} alt='Icon' />
                abdulmalikadegoke@gmail.com
              </li>
            </a>
            <li className="nav_links">
            <a href="tel:+44786699273">
              {/* Icon */}
              <img className='contact_icon' src={require('../../Assets/Icons/icons8-phone-240.png')} alt='Icon' />
              +44(0)7786699273
            </a>
            </li>
            <a href="https://www.linkedin.com/in/abdulmalik-adegoke-a77766158/">
              <li className="nav_links">
                {/* Icon */}
                <img className='contact_icon' src={require('../../Assets/Icons/icons8-linkedin-240.png')} alt='Icon' />
                Abdulmalik Adegoke 
              </li>
            </a>
            <li className="nav_links">
              {/* Icon */}
              <img className='contact_icon' src={require('../../Assets/Icons/icons8-instagram-240.png')} alt='Icon' />
              <a href="https://www.instagram.com/abdmalik_a/">@abdmalik_a</a> <br/>
              <a href="https://www.instagram.com/i_mspired/">@i_mspired</a> <br/>
              <a href="https://www.instagram.com/triple_a_moments/">@triple_a_moments</a> <br/>
            </li>
          </ul>

          <div className="portfolio_feedback">
            <Form>
              <Input>

              </Input>

              <Button>
                Submit
              </Button>

            </Form>
          </div>

      </div>

    </div>
  )
}
