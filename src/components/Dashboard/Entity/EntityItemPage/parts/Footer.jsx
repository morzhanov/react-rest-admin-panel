import React from 'react'
import './Footer.styl'
import { observer } from 'mobx-react'

const UpdateEntityFooter = () => (
  <>
    <button className="delete" type="button">
      Delete
    </button>
    <div className="right">
      <button type="button">Save and add another</button>
      <button type="button">Save and continue</button>
      <button type="button">Save</button>
    </div>
  </>
)

export default observer(UpdateEntityFooter)
