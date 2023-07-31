import '../styles/index.scss';
import Nav from '../components/Nav/Nav'
import 'bootstrap-icons/font/bootstrap-icons.json'

function MyApp({ Component, pageProps }) {
  return (
    <div className='app_wrapper'>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
