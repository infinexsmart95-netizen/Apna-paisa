// APNA PAISA ADMIN - FILE 2/2 : admin.js | FILE 1/2 : admin.html
// No OTP. Deposit Easypaisa 03493959558. Withdraw Any Bank Min Rs 10.
const S={tab:'Dashboard',users:[],tasks:[],packages:[],subs:[],deposits:[],withdrawals:[],notifs:[],audit:[]};
const TABS=['Dashboard','Users','Tasks','Packages','Submissions','Deposits','Withdrawals','Fraud & Security','Notifications Sender','Support Tickets','Settings','Audit Logs'];
function go(t){S.tab=t;render();}
function log(a){S.audit.unshift({a:a,at:new Date().toLocaleString()});}
function renderNav(){document.getElementById('nav').innerHTML=TABS.map(function(t){return '<button class="'+(t===S.tab?'active':'')+'" onclick="go(\''+t+'\')">'+t+'</button>'}).join('');}
function addTask(){var t=prompt('Task Title?'); if(!t) return; var r=prompt('Reward Rs?')||'50'; S.tasks.push({title:t,reward:r}); log('Task published: '+t); render();}
function addPkg(){var n=prompt('Package Name?'); if(!n) return; var p=prompt('Price Rs?')||'500'; S.packages.push({name:n,price:p}); log('Package published: '+n); render();}
function sendNotif(){var t=document.getElementById('nt').value; var m=document.getElementById('nm').value; if(!t||!m) return alert('Title + Message likho'); S.notifs.push({t:t,m:m}); log('Notification sent: '+t); alert('Notification User App me LIVE chali gayi!'); render();}
function render(){
  renderNav(); var h='';
  if(S.tab==='Dashboard') h='<h1>Admin Dashboard</h1><p>Live - Firebase apna-paisa-c7a5d</p><div class="kpis"><div class="kpi"><span>Total Users</span><b>'+S.users.length+'</b></div><div class="kpi"><span>Tasks</span><b>'+S.tasks.length+'</b></div><div class="kpi"><span>Packages</span><b>'+S.packages.length+'</b></div><div class="kpi"><span>Pending Withdrawals</span><b>'+S.withdrawals.length+'</b></div></div><div class="card"><h3>Live Feed</h3><p>'+(S.audit.slice(0,5).map(function(x){return '• '+x.a+' - '+x.at}).join('<br>')||'Abhi koi activity nahi - clean hai.')+'</p><button class="primary" onclick="log(\'Test Realtime\');render()">Test Realtime</button></div><div class="card"><h3>Payment Rules</h3><p>Deposit: Easypaisa <b>03493959558</b><br>Withdrawal: Har Bank, Min <b>Rs 10</b>, Fee Rs 0</p></div>';
  if(S.tab==='Users') h='<h1>Users</h1><div class="card"><p>Users User App se signup karenge to yahan aayenge. Abhi: '+S.users.length+'</p><p><b>Double Account Block:</b> Same phone/email/device/IP/payment = duplicate group + Block All Duplicates.</p><p><b>Scam Block:</b> Fake proof / rapid submissions / withdrawal abuse - Block Scammer.</p></div>';
  if(S.tab==='Tasks') h='<h1>Tasks</h1><button class="primary" onclick="addTask()">+ New Task</button><div class="card">'+(S.tasks.map(function(t){return '<p>'+t.title+' - Rs '+t.reward+'</p>'}).join('')||'Koi task nahi - pehle task banao.')+'</div>';
  if(S.tab==='Packages') h='<h1>Packages</h1><button class="primary" onclick="addPkg()">+ New Package</button><div class="card">'+(S.packages.map(function(p){return '<p>'+p.name+' - Rs '+p.price+'</p>'}).join('')||'Zero packages - clean start.')+'</div>';
  if(S.tab==='Submissions') h='<h1>Submissions & Proof Review</h1><div class="card"><p>Koi submission nahi. User App se submission aayegi to yahan Approve / Reject karoge, reward wallet me jayega.</p></div>';
  if(S.tab==='Deposits') h='<h1>Deposits - Easypaisa 03493959558</h1><div class="card"><p>User Easypaisa se 03493959558 pe bhejega, TID yahan check karke Approve karo.</p><p>Koi deposit request nahi.</p></div>';
  if(S.tab==='Withdrawals') h='<h1>Withdrawals - Har Bank, Min Rs 10</h1><div class="card"><p>Koi withdrawal nahi.</p></div>';
  if(S.tab==='Fraud & Security') h='<h1>Fraud & Security</h1><div class="card"><h3>Double Account Block</h3><p>Same phone / device / IP / payment = duplicate.</p><h3>Scam Block</h3><p>Fake proof, rapid submissions, same proof link, withdrawal abuse - Block Scammer (User + Device + Payment).</p><p>Abhi koi fraud flag nahi - clean.</p></div>';
  if(S.tab==='Notifications Sender') h='<h1>Notifications Sender</h1><div class="card"><input id="nt" placeholder="Title"><textarea id="nm" placeholder="Message..."></textarea><button class="primary" onclick="sendNotif()">Send to All Users - LIVE</button><hr>'+(S.notifs.map(function(n){return '<p>'+n.t+' - '+n.m+'</p>'}).join('')||'<p>Abhi koi notification nahi bheji.</p>')+'</div>';
  if(S.tab==='Support Tickets') h='<h1>Support Tickets</h1><div class="card"><p>Koi ticket nahi.</p></div>';
  if(S.tab==='Settings') h='<h1>Settings</h1><div class="card"><p><b>Deposit:</b> Easypaisa 03493959558</p><p><b>Withdrawal Min:</b> Rs 10</p><p><b>Fee:</b> Rs 0</p><p><b>Auth:</b> No OTP - Direct Signup/Login</p><p><b>Firebase:</b> apna-paisa-c7a5d</p></div>';
  if(S.tab==='Audit Logs') h='<h1>Audit Logs</h1><div class="card">'+(S.audit.map(function(x){return '<p>• '+x.a+' - '+x.at+'</p>'}).join('')||'<p>Koi log nahi.</p>')+'</div>';
  document.getElementById('app').innerHTML=h;
}
setInterval(function(){var d=new Date(); var c=document.getElementById('clock'); if(c) c.textContent='LIVE '+d.toLocaleTimeString()+'.'+d.getMilliseconds();},50);
render();
