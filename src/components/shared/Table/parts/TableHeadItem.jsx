import React from 'react'
import './TableHeadItem.styl'
import { observer } from 'mobx-react'
import classnames from 'classnames'
import TableCell from '@material-ui/core/TableCell'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'

const TableHeadItem = ({
  item: {
    name,
    actions: {
      head: { sort }
    }
  }
}) => {
  const onClick = () => sort && sort.toggleSort()

  return (
    <TableCell type="button" onClick={onClick}>
      <div className="table__head-item">
        <span>{name}</span>
        {sort && (
          <span className="filters__arrows">
            <ArrowDropUp
              className={classnames({
                'filters__arrow-up': true,
                'filters__arrow-up--disabled':
                  sort.direction === undefined || !!sort.direction
              })}
            />
            <ArrowDropDown
              className={classnames({
                'filters__arrow-down': true,
                'filters__arrow-down--disabled':
                  sort.direction === undefined || !sort.direction
              })}
            />
          </span>
        )}
      </div>
    </TableCell>
  )
}

export default observer(TableHeadItem)
