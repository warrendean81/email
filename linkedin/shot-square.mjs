import {chromium} from 'playwright';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:1080,height:1080},deviceScaleFactor:2});
await p.goto('file://'+process.cwd()+'/card-square.html');
await p.screenshot({path:'linkedin-initial-scroll-position-square.png'});
await b.close();
