import axios from 'axios'

export const getBlogList = params => {
  return axios({
    url: '/web/blogList?size=' + params.size + '&page=' + params.page + '&blogType=' + 2,
    method: 'post'
  })
}

export const getMobileBlogList = params => {
  return axios({
    url: '/web/blogList?size=' + params.size + '&page=' + params.page + '&blogType=' + 1,
    method: 'post'
  })
}

export const getConnect = params => {
  return axios({
    url: '/web/addVisitor?email=' + params.email + '&phone=' + params.phone + '&content=' + params.content,
    method: 'post'
  })
}