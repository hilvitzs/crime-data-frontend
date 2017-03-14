/* eslint-disable max-len */

export default function renderHtml(content, state) {
  return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <title>Crime Data Explorer</title>
        <link href='/app.css' rel='stylesheet'>
      </head>
      <body>
        <div id='app'>${content}</div>
        <script>
          window.__STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <script src='/bundle.js'></script>
        <script>!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-48605964-47","auto"),ga("set","anonymizeIp",!0),ga("set","forceSSL",!0),ga("send","pageview");</script>
        <script src='https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js' id='_fed_an_ua_tag'></script>
      </body>
    </html>
  `
}