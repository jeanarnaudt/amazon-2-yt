import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'

import store from '../app/store'

function App({ Component, pageProps }) {
	return (
		<>
			<SessionProvider session={pageProps.session}>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</SessionProvider>
		</>
	)
}

export default App
