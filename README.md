APNA PAISA - VERCEL FIX (GitHub wali galti)
Masla kya tha?
Tumhare GitHub repo me ye 5 files hain:

Admin.html
Pakage.json <-- YE PROBLEM
README.md
index.html
server.js <-- YE PROBLEM
Vercel ne package.json + server.js dekh ke samjha ye Node.js app hai,
isliye usne index.html ko website ki tarah serve nahi kiya - code dikhaya.

Fix - 2 tareeqe, 1 chuno:
Tareeqa A - SAB SE AASAN (Recommended)
Isi repo se 2 files DELETE karo:

GitHub pe jao > server.js > ... > Delete file > Commit
GitHub pe jao > Pakage.json > ... > Delete file > Commit
Sirf ye 3 files rakho: index.html, Admin.html, vercel.json (neeche wali)
Vercel > Deployments > ... > Redeploy
Ho gaya - ab apna-paisa.vercel.app pe app chalega.
Backend (server.js) ko Vercel pe MAT rakho.
Backend alag jagah deploy karo: Render.com / Railway

Naya repo banao: apna-paisa-backend
Usme sirf server.js + package.json + .env rakho
Render pe Web Service banao, us repo se connect karo.
Tareeqa B - Agar server.js isi repo me rakhna hai
To vercel.json wali file repo me daalo (ye file sath di hai).
Phir bhi Vercel kabhi kabhi confuse hota hai, isliye Tareeqa A best hai.

vercel.json kya karta hai?
/ ko -> /index.html
/admin ko -> /admin.html
Har request ko HTML ki tarah serve karta hai, code ki tarah nahi.
Check karne ka tareeqa
apna-paisa.vercel.app kholo - app dikhna chahiye, code nahi
apna-paisa.vercel.app/admin kholo - Admin Panel dikhna chahiye
Agar phir bhi code dikhe to: Vercel > Project > Settings > General > Framework Preset = Other, Root = ./ , phir Redeploy.
