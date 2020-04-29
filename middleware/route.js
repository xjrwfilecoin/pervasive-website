export default function({ route, params, error, redirect }) {
    if(route.fullPath == '/') {
        return redirect('/web')
    }
  }