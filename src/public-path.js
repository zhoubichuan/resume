(function () {
  if (window.__POWERED_BY_QIANKUN__) {
    if (process.env.NODE_ENV === 'dev') {
      // eslint-disable-next-line
      __webpack_public_path__ = `//localhost:3000${process.env.BASE_URL}`
      return
    }
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
    // __webpack_public_path__ = `${process.env.BASE_URL}/`
  }
})()
