import React from 'react'
import './Pagination.styl'
import { observer } from 'mobx-react'
import classnames from 'classnames'

// TODO: refactor
const Pagination = ({
  pagination: {
    pageNumber,
    count,
    pagesCount,
    firstPageIsDisabled,
    prevPageIsDisabled,
    lastPageIsDisabled,
    nextPageIsDisabled,

    goToFirstPage,
    goToPrevPage,
    goToNextPage,
    goToLastPage
  }
}) => {
  if (!count) {
    return null
  }

  if (!pagesCount || pagesCount <= 1) {
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

  return (
    <div className="pagination">
      <button type="button" className={classesForFirstPage} onClick={goToFirstPage}>
        {'<<'}
      </button>
      <button type="button" className={classesForPrevPage} onClick={goToPrevPage}>
        {'<'}
      </button>
      <span className="pagination__indicator">{`${pageNumber}/${pagesCount}`}</span>
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
