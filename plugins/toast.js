export default ({ app, store }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('errorToast', (message, context) => {
      context.$toast.error(message, {
        position: 'top-center',
        duration: 2000,
      })
    })
  
    inject('successToast', (message, context) => {
      context.$toast.success(message, {
        theme: 'toasted-primary',
        position: 'top-right',
        duration: 1000,
      })
    })
  
    inject('statusToast', (statusCode, context) => {
      if (statusCode == 401) {
        context.$toast.error('Invalid credetials', {
          position: 'top-center',
          duration: 2000,
        })
      } else if (statusCode == 501) {
        context.$toast.error('Internal server error', {
          position: 'top-center',
          duration: 2000,
        })
      } else {
        context.$toast.error('Something went wrong', {
          position: 'top-center',
          duration: 2000,
        })
      }
    })
  }