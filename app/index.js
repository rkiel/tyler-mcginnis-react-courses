import ReactDOM from 'react-dom'

import routes from './config/routes.jsx'
import sentry from './config/sentry'

sentry.install()

ReactDOM.render(routes, document.getElementById('app'))
