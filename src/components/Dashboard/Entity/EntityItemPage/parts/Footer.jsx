import React from 'react'
import './Footer.styl'
import { observer } from 'mobx-react'
import { PageType } from '../EntityItemPage'

const UpdateEntityFooter = ({ type, onSubmit }) => (
  <>
    {type === PageType.UPDATE ? (
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
    ) : (
      <div className="right">
        <button type="button" onClick={onSubmit}>
          Save
        </button>
      </div>
    )}
  </>
)

export default observer(UpdateEntityFooter)
