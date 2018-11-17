import React from 'react'
import './Pagination.styl'
import { observer } from 'mobx-react'
import classnames from 'classnames'

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
  },
  onChangePageNumber
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
    disabled: firstPageIsDisabled
  })
  const classesForPrevPage = classnames({
    pagination__prev: true,
    disabled: prevPageIsDisabled
  })
  const classesForNextPage = classnames({
    pagination__next: true,
    disabled: nextPageIsDisabled
  })
  const classesForLastPage = classnames({
    pagination__last: true,
    disabled: lastPageIsDisabled
  })

  const goTo = func => () => func(onChangePageNumber)

  return (
    <div className="pagination">
      <button type="button" className={classesForFirstPage} onClick={goTo(goToFirstPage)}>
        {'<<'}
      </button>
      <button type="button" className={classesForPrevPage} onClick={goTo(goToPrevPage)}>
        {'<'}
      </button>
      <span className="pagination__indicator">{`${pageNumber}/${pagesCount}`}</span>
      <button type="button" className={classesForNextPage} onClick={goTo(goToNextPage)}>
        {'>'}
      </button>
      <button type="button" className={classesForLastPage} onClick={goTo(goToLastPage)}>
        {'>>'}
      </button>
    </div>
  )
}

export default observer(Pagination)
