import React from 'react'

import { Form, Input, Button } from 'reactstrap'

export default function Contacts() {
  return (
    <div>
      <h2>
        Contacts
      </h2>
      
      <div>
        {/* navbar list of contact mediums */}
          <ul className="navbar_list">
            <li className="nav_links">
              {/* Icon */}
              <img className='contact_icon' src={require('./Assets/.jpg')} alt='Icon' />
              <a href="#"></a>
            </li>
            <li className="nav_links">
              {/* Icon */}
              <img className='contact_icon' src={require('./Assets/.jpg')} alt='Icon' />
              <a href="#"></a>
            </li>
            <li className="nav_links">
              {/* Icon */}
              <img className='contact_icon' src={require('./Assets/.jpg')} alt='Icon' />
              <a href="#"></a>
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
