import {chromium} from 'playwright';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:1200,height:627},deviceScaleFactor:2});
await p.goto('file://'+process.cwd()+'/card.html');
await p.screenshot({path:'linkedin-initial-scroll-position.png'});
await b.close();
