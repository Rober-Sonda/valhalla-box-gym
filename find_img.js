const https = require('https');
const fs = require('fs');

https.get('https://html.duckduckgo.com/html/?q=optimum+nutrition+gold+standard+whey+5lb+isolated+white+background', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Extract image URLs
    const regex = /<img.*?src="(.*?)".*?>/g;
    let match;
    let images = [];
    while ((match = regex.exec(data)) !== null) {
      if(match[1].startsWith('//')) {
         images.push('https:' + match[1]);
      } else if (match[1].startsWith('http')) {
         images.push(match[1]);
      }
    }
    console.log("Found:", images.slice(0, 10));
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
