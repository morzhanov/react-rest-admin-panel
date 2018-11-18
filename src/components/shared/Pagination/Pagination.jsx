import React from 'react'
import './Pagination.styl'
import { observer } from 'mobx-react'
import classnames from 'classnames'
import PageSize from '../PageSize/PageSize'

// TODO: refactor
const Pagination = ({
  pagination: {
    pageNumber,
    count,
    pageSize,
    pagesCount,
    firstPageIsDisabled,
    prevPageIsDisabled,
    lastPageIsDisabled,
    nextPageIsDisabled,

    goToFirstPage,
    goToPrevPage,
    goToNextPage,
    goToLastPage,
    changePageSize
  }
}) => {
  if (!count) {
    return null
  }

  if (!pagesCount) {
    return null
  }

  // classNames
  const classesForFirstPage = classnames({
    pagination__first: true,
    pagination__first_disabled: firstPageIsDisabled
  })
  const classesForPrevPage = classnames({
    pagination__prev: true,
    pagination__prev_disabled: prevPageIsDisabled
  })
  const classesForNextPage = classnames({
    pagination__next: true,
    pagination__next_disabled: nextPageIsDisabled
  })
  const classesForLastPage = classnames({
    pagination__last: true,
    pagination__last_disabled: lastPageIsDisabled
  })

  const from = pageNumber === 1 ? pageNumber : (pageNumber - 1) * pageSize + 1
  const to =
    pagesCount === 1 ? count : pageNumber === pagesCount ? count : pageNumber * pageSize

  return (
    <div className="pagination">
      <PageSize value={pageSize} onChange={changePageSize} />
      <button type="button" className={classesForFirstPage} onClick={goToFirstPage}>
        {'<<'}
      </button>
      <button type="button" className={classesForPrevPage} onClick={goToPrevPage}>
        {'<'}
      </button>
      <span className="pagination__indicator">{`${from}-${to}/${count}`}</span>
      <button type="button" className={classesForNextPage} onClick={goToNextPage}>
        {'>'}
      </button>
      <button type="button" className={classesForLastPage} onClick={goToLastPage}>
        {'>>'}
      </button>
    </div>
  )
}

export default observer(Pagination)
