import Cookies from 'js-cookie';

export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
  req
}) {
  let cookies = ''// 新增
  if (Cookies.get('lang') && Cookies.get('lang')!=undefined) {
    cookies = Cookies.get('lang')
  } else if (req.headers.cookie && req.headers.cookie.indexOf('lang')!=-1) {
    const cookie = req.headers.cookie
    var str1 = cookie.lastIndexOf("lang");
    var str2 = cookie.substring(str1+5, str1+7) + '';
    
    cookies = str2
  }
  
  if (route.fullPath == '/') {
    return redirect('/' + defaultLocale + '' + route.fullPath)
  } else {
    let current_path = route.fullPath.substring(1, 3)
    if (!store.state.locales.includes(current_path)) {
      cookies = app.i18n.fallbackLocale
    } else {
      cookies = current_path
    }
  }
  
  const defaultLocale = cookies || app.i18n.fallbackLocale  // 修改
 
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return
  }
  // Get locale from params
  const locale = params.lang || defaultLocale
  
  if (!store.state.locales.includes(locale)) {
    return error({
      message: 'This page could not be found.',
      statusCode: 404
    })
  }
  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // If route is /<defaultLocale>/... -> redirect to /...
  // if (route.fullPath == '/') {
  //   return redirect('/' + defaultLocale + '' + route.fullPath)
  // }
  // if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
  //   const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
  //   const re = new RegExp(toReplace)
  //   return redirect(
  //     route.fullPath.replace(re, '/')
  //   )
  // }
}
