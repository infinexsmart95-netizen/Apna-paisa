APNA PAISA - BACKEND (server.js) - FULLY HEAVY FAST REALTIME
Run (2 min)
cd apna-paisa-backend
npm install
cp .env.example .env   # fill JWT secrets + ADMIN_USER / ADMIN_PASS + FIREBASE_SERVICE_ACCOUNT
npm run dev
# Backend: http://localhost:5000  | Health: /api/health
Realtime kaise kaam karta hai (0000.00000000 ms feel)
Frontend socket.io-client se connect: io('http://localhost:5000')
Login ke baad socket.emit('join', {userId, role}) -> user apne room user:<id> me, admin admins room me.
Admin kuch kare (task publish, approve, notify) -> server usi millisecond io.emit / io.to(user:id).emit karta hai. Frontend ko refresh ki zaroorat nahi.
socket.on('ping:ms') se latency measure hoti hai - header me LIVE xx ms dikhta hai.
Firebase RTDB listener: Firebase me koi write ho to server usko Socket.io pe forward karta hai.
Frontend ko connect karna
User App (/index.html) me:

import { io } from "socket.io-client";
const socket = io("https://YOUR-BACKEND.onrender.com");
socket.emit("join", { userId, role: "user" });
socket.on("wallet:update", ({balance, tx}) => setBalance(balance));
socket.on("notification:new", (n) => showToast(n));
socket.on("task:new", (t) => prependTask(t));
Admin App (/admin.html) me same, role: "admin", socket.on("live:new_submission") etc.

Deploy
Backend: Render / Railway / VPS - npm start, env vars set karo.
Frontend User: Vercel -> apnapaisa.vercel.app, env VITE_API_URL=https://backend...
Frontend Admin: Vercel alag project -> apna-paisa-admin.vercel.app
Firebase: Service Account JSON ko env me daalo, kabhi frontend me mat daalo.
Security
Passwords bcrypt 12 rounds, JWT 7 days, alag ADMIN_JWT_SECRET
Rate limiting, Helmet, CORS whitelist
Wallet sirf server se - frontend balance kabhi trust nahi karta
Har financial action Audit Log me
No OTP - direct signup/login (tumhare kehne par OTP hataya)
