import React from 'react'
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
  onChangePageNumber,
  onEdgesClicked
}) => {
  if (!count) {
    return null
  }

  if (!pagesCount || pagesCount <= 1) {
    return null
  }

  // classNames
  const classesForFirstPage = classnames({
    'to-first-page': true,
    disabled: firstPageIsDisabled
  })
  const classesForPrevPage = classnames({
    'to-prev-page': true,
    disabled: prevPageIsDisabled
  })
  const classesForNextPage = classnames({
    'to-next-page': true,
    disabled: nextPageIsDisabled
  })
  const classesForLastPage = classnames({
    'to-last-page': true,
    disabled: lastPageIsDisabled
  })

  const goTo = func => () => func(onChangePageNumber)

  return (
    <div className="pagination">
      <button
        type="button"
        className={classesForFirstPage}
        onClick={() => {
          onEdgesClicked && onEdgesClicked()
          goTo(goToFirstPage)()
        }}
      >
        <span />
      </button>
      <button type="button" className={classesForPrevPage} onClick={goTo(goToPrevPage)}>
        <span />
      </button>
      <span className="page-indicator">{`${pageNumber}/${pagesCount}`}</span>
      <button type="button" className={classesForNextPage} onClick={goTo(goToNextPage)}>
        <span />
      </button>
      <button
        type="button"
        className={classesForLastPage}
        onClick={() => {
          onEdgesClicked && onEdgesClicked()
          goTo(goToLastPage)()
        }}
      >
        <span />
      </button>
    </div>
  )
}

export default observer(Pagination)
