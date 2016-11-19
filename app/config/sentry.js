// import Raven from 'raven-js';

// Get your keys by signing up for Sentry at sentry.reactjsprogram.com
// const sentryKey = 'YOUR_SENTRY_KEY'
// const sentryApp = 'YOUR_SENTRY_AP_ID'
// const sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

// const _APP_INFO = {
//   name: 'Github Battle',
//   branch: 'video4',
//   version: '1.0'
// }
//
// Raven.config(sentryURL, {
//   release: _APP_INFO.version,
//   tags: {
//     branch: _APP_INFO.branch,
//   }
// }).install()

const install = function () {
  // console.log("Sentry is not configured");
}

const sentry = {
  install: install,
}

export default sentry
