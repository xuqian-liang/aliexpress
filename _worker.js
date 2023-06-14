addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url)
  url.hostname = 'www.aliexpress.us'
  let newRequest = new Request(url, request)
  newRequest.headers.set('Host', 'www.aliexpress.us')
  let response = await fetch(newRequest)
  return response
}
