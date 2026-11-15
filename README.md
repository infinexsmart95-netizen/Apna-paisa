# APNA PAISA - FULL FOLDER - NO RENDER / NO VERCEL NEEDED

## Folder Structure
```
Apna-Paisa-Full-Folder/
  index.html              <- USER APP - Sab kuch isme (double-click karke kholo)
  frontend/
    index.html            <- Same User App (backup)
    vercel.json           <- Agar baad me Vercel pe dalna ho to
  admin/
    admin.html            <- ADMIN PANEL File 1/2
    admin.js              <- ADMIN PANEL File 2/2 (dono ek folder me rakhna)
  backend/
    server.js             <- Backend (Node.js) - jab chaaho tab chalao
    package.json
    .env.example
    README.md
  README.md               <- Ye file
  README-VERCEL-FIX.md
```

## Bina Render / Bina Vercel - Kaise Chalao? (Sab se aasan)

### Tareeqa 1 - Sirf Frontend (Abhi ke liye - 10 second)
1. Folder kholo
2. `index.html` pe double-click karo - Browser me User App khul jayega
3. Admin ke liye: `admin/` folder me `admin.html` pe double-click karo
4. Koi install nahi, koi server nahi chahiye. Sab kaam karega (demo data ke saath).

### Tareeqa 2 - Backend ke saath (Jab computer pe Node ho)
```
cd backend
npm install
cp .env.example .env
node server.js
# Backend: http://localhost:5000
```
Phir browser me index.html kholo. Frontend backend se connect hoga.

### Tareeqa 3 - Mobile pe test karna
- index.html ko apne mobile me bhejo (WhatsApp / USB)
- Mobile browser me kholo - responsive hai.

## Payment Rules (Fixed)
- Deposit: Easypaisa **03493959558** - User isi pe bhejega + TID dega
- Withdrawal: Har Bank - Meezan, HBL, UBL, MCB, JazzCash, Easypaisa, sab - **Min Rs 10**, Fee Rs 0
- Auth: **No OTP** - Direct Signup/Login
- Firebase: apna-paisa-c7a5d

## Admin kaise kholo?
- `admin/admin.html` kholo
- Admin Login: pehli baar admin banao (koi hardcoded password nahi)
- Admin me: Users, Tasks, Packages, Submissions, Deposits, Withdrawals, Fraud Block, Notifications, Audit Logs

## Vercel pe baad me dalna ho to?
- Sirf `frontend/` wali files GitHub pe dalo
- `server.js / package.json` ko us repo me MAT dalo - wo backend repo me jayega
- vercel.json already di hui hai.
