# Railway + Vercel Deployment Checklist

## Quick Deployment Steps

### ✅ Step 1: Deploy Backend (Railway)
- [ ] Go to https://railway.app and login with GitHub
- [ ] Click "New Project" → "Deploy from GitHub repo"
- [ ] Select `webyalaya-assinment` repository
- [ ] Add environment variables:
  - [ ] `NODE_ENV=production`
  - [ ] `PORT=4000`
- [ ] Configure build settings:
  - [ ] Build Command: `cd backend && npm install && npm run build`
  - [ ] Start Command: `cd backend && npm run start:prod`
- [ ] Click Deploy and wait
- [ ] Go to Settings → Networking → Generate Domain
- [ ] **Copy your backend URL**: `_______________________________`

### ✅ Step 2: Deploy Frontend (Vercel)
- [ ] Go to https://vercel.com and login with GitHub
- [ ] Click "Add New" → "Project"
- [ ] Select `webyalaya-assinment` repository
- [ ] Configure:
  - [ ] Root Directory: `frontend`
  - [ ] Framework: Next.js (auto-detected)
- [ ] Add environment variable:
  - [ ] Name: `NEXT_PUBLIC_API_URL`
  - [ ] Value: (paste your Railway backend URL from Step 1)
- [ ] Click Deploy and wait
- [ ] **Copy your frontend URL**: `_______________________________`

### ✅ Step 3: Update Backend CORS
- [ ] Go back to Railway dashboard
- [ ] Click on your backend service
- [ ] Go to Variables tab
- [ ] Add new variable:
  - [ ] Name: `CORS_ORIGIN`
  - [ ] Value: (paste your Vercel frontend URL from Step 2)
- [ ] Wait for auto-redeploy

### ✅ Step 4: Test Your App
- [ ] Open your Vercel URL in browser
- [ ] Create a test note
- [ ] Verify note appears in list
- [ ] Click "Get AI Summary" button
- [ ] Verify summary is generated

---

## Your Deployment URLs

Fill these in after deployment:

**Backend (Railway):**
```
https://_____________________________.railway.app
```

**Frontend (Vercel):**
```
https://_____________________________.vercel.app
```

---

## Environment Variables Summary

### Railway (Backend)
```
NODE_ENV=production
PORT=4000
CORS_ORIGIN=https://your-frontend.vercel.app
```

### Vercel (Frontend)
```
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
```

---

## If Something Goes Wrong

**CORS Error?**
→ Check Railway CORS_ORIGIN matches your Vercel URL exactly

**Can't Connect to Backend?**
→ Check Vercel NEXT_PUBLIC_API_URL is your Railway URL

**Backend Not Starting?**
→ Check Railway logs: Deployments → Latest → View Logs

**Frontend Build Failed?**
→ Check Vercel build logs: Deployments → Latest → View Logs

---

## Total Time Estimate
- Backend deployment: 5-10 minutes
- Frontend deployment: 3-5 minutes
- Testing: 2-3 minutes

**Total: ~15 minutes** ⏱️

---

**Good luck with your deployment! 🚀**
