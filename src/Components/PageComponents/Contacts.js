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
            
            <li className="contacts_nav">
              <a className="nav_links" href="mailto:abdulmalikadegoke@gmail.com">
                {/* Icon */}
                <img className='contact_icon' src={require('../../Assets/Icons/icons8-mail-240.png')} alt='Icon' /> <br />
                abdulmalikadegoke@gmail.com
              </a>
            </li>
            
            <li className="contacts_nav">
              <a className="nav_links" href="tel:+44786699273">
                {/* Icon */}
                <img className='contact_icon' src={require('../../Assets/Icons/icons8-phone-240.png')} alt='Icon' /> <br />
                +44(0)7786699273
              </a>
            </li>

            <li className="contacts_nav">
              <a className="nav_links" href="https://www.linkedin.com/in/abdulmalik-adegoke-a77766158/">
                {/* Icon */}
                <img className='contact_icon' src={require('../../Assets/Icons/icons8-linkedin-240.png')} alt='Icon' /> <br />
                Abdulmalik Adegoke 
              </a>
            </li>
            
            <li className="contacts_nav">
              {/* Icon */}
              <img className='contact_icon' src={require('../../Assets/Icons/icons8-instagram-240.png')} alt='Icon' /> <br />
              <a className="nav_links" href="https://www.instagram.com/abdmalik_a/">
                <img className='ig_icons' src={require('../../Assets/Icons/icons8-person-96.png')} alt='Icon' />
                <br/>
                @abdmalik_a
              </a> <br/>
              <a className="nav_links" href="https://www.instagram.com/i_mspired/">
                <img className='ig_icons' src={require('../../Assets/Icons/icons8-camera-100.png')} alt='Icon' /> 
                <br/>
                @i_mspired
              </a> <br/>
              <a className="nav_links" href="https://www.instagram.com/triple_a_moments/">
                <img className='ig_icons' src={require('../../Assets/Icons/icons8-cameras-64.png')} alt='Icon' /> 
                <br/>
                @triple_a_moments
              </a> <br/>
            </li>
          </ul>

          {/* <div className="portfolio_feedback">
            <Form>
              <Input>

              </Input>

              <Button>
                Submit
              </Button>

            </Form>
          </div> */}

      </div>

    </div>
  )
}
