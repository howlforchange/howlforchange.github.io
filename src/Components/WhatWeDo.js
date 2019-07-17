import React, {Component} from "react"
import issues from '../assets/issues/issues.png'

class WhatWeDo extends Component {
  render() {
    return (
      <section>
        <div class="whatwedo-ctn container">
          <div class='whatwedo-text-div'>
            <p class='headertext'>
              WHAT WE DO
            </p>
            <p className='regtext'>
              WE ARE BUILDING COMMUNITY AROUND GLOBAL ISSUES AND CONTENT
            </p>
          </div>

          <div class='issuesimg'>
            <img src={issues} alt="issues"/>
          </div>

        </div>
      </section>
    )
  }
}
export default WhatWeDo
