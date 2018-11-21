import { types, getRoot } from 'mobx-state-tree'

export default types
  .model('PaginationModel', {
    pageNumber: 1,
    pageSize: 10,
    startIndex: 0,
    endIndex: 0,
    count: 0
  })
  .views(self => ({
    get data() {
      const params = {}
      if (self.pageSize) params.page_size = self.pageSize
      if (self.pageNumber > 1) params.page = self.pageNumber
      return params
    },
    get pagesCount() {
      return Math.ceil(self.count / self.pageSize)
    },
    get firstPageIsDisabled() {
      return self.pageNumber <= 1
    },
    get prevPageIsDisabled() {
      return self.pageNumber <= 1
    },
    get lastPageIsDisabled() {
      return self.pageNumber >= self.pagesCount
    },
    get nextPageIsDisabled() {
      return self.pageNumber >= self.pagesCount
    }
  }))
  .actions(self => {
    const setCount = count => {
      self.count = count
    }

    const goToFirstPage = () => {
      if (self.firstPageIsDisabled) return
      self.pageNumber = 1
      getRoot(self).fetchData()
    }

    const goToPrevPage = () => {
      if (self.prevPageIsDisabled) return
      self.pageNumber -= 1
      getRoot(self).fetchData()
    }

    const goToNextPage = () => {
      if (self.nextPageIsDisabled) return
      self.pageNumber += 1
      getRoot(self).fetchData()
    }

    const goToLastPage = () => {
      if (self.lastPageIsDisabled) return
      self.pageNumber = self.pagesCount
      getRoot(self).fetchData()
    }

    const changePageSize = size => {
      self.pageSize = size
      getRoot(self).fetchData()
    }

    return {
      setCount,
      goToFirstPage,
      goToPrevPage,
      goToNextPage,
      goToLastPage,
      changePageSize
    }
  })
