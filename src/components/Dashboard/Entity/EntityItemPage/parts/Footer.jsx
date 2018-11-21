import React from 'react'
import './Footer.styl'
import { observer } from 'mobx-react'
import { PageType, FooterClickType } from '../EntityItemPage'

const UpdateEntityFooter = ({ type, onClick, onClickDelete }) => {
  const saveAndContinue = e => onClick(e, FooterClickType.CONTINUE)
  const saveAndAddAnother = e => onClick(e, FooterClickType.SAVE_AND_ADD_ANOTHER)
  const save = e => onClick(e, FooterClickType.SAVE)

  return (
    <>
      {type === PageType.UPDATE ? (
        <>
          <button className="delete" type="button" onClick={onClickDelete}>
            Delete
          </button>
          <div className="right">
            <button type="button" onClick={saveAndAddAnother}>
              Save and add another
            </button>
            <button type="button" onClick={saveAndContinue}>
              Save and continue
            </button>
            <button type="button" onClick={save}>
              Save
            </button>
          </div>
        </>
      ) : (
        <div className="right">
          <button type="button" onClick={save}>
            Save
          </button>
          <button type="button" onClick={saveAndAddAnother}>
            Save and add another
          </button>
        </div>
      )}
    </>
  )
}

export default observer(UpdateEntityFooter)
