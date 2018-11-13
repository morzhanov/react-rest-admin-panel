import { types } from 'mobx-state-tree'

export const Pagination = types
  .model('Pagination', {
    pageNumber: 1,
    pageSize: 12,
    startIndex: 0,
    endIndex: 0,
    count: 0,
  })
  .views((self) => ({
    get data() {
      let params = {}
      if (self.pageSize) params['page_size'] = self.pageSize
      if (self.pageNumber > 1) params['page'] = self.pageNumber
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
    },
  }))
  .actions((self) => {
    const goToFirstPage = (cb) => {
      if (self.firstPageIsDisabled) return
      self.pageNumber = 1
      cb && cb()
    }

    const goToPrevPage = (cb) => {
      if (self.prevPageIsDisabled) return
      self.pageNumber = self.pageNumber - 1
      cb && cb()
    }

    const goToNextPage = (cb) => {
      if (self.nextPageIsDisabled) return
      self.pageNumber = self.pageNumber + 1
      cb && cb()
    }

    const goToLastPage = (cb) => {
      if (self.lastPageIsDisabled) return
      self.pageNumber = self.pagesCount
      cb && cb()
    }
    return {
      goToFirstPage,
      goToPrevPage,
      goToNextPage,
      goToLastPage,
    }
  })
