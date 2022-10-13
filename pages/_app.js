import '../styles/globals.css'
import {MovieProvider} from '../context/movie_context'
import {UiProvider} from '../context/ui_context'

function MyApp({ Component, pageProps }) {
  return (
    <UiProvider>
      <MovieProvider>
        <Component {...pageProps} />
      </MovieProvider>
    </UiProvider>
  )
}

export default MyApp
