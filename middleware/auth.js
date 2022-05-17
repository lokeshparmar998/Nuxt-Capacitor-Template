export default function ({ store, redirect }) {
    if (!store.state.localStorage.isAuth) {
      console.log('middleware', store.state.isAuth)
      return redirect('/')
    }
  }