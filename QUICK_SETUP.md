# 🎬 BIMCAD Website - Quick Reference

## What's New ✨

### Animations
- ✅ Navbar buttons scale up smoothly on hover (1.1x scale)
- ✅ All sections fade in with staggered animations
- ✅ Project cards scale images on hover
- ✅ Service cards lift up on hover with shadow
- ✅ Smooth page transitions

### Design
- ✅ Grey background (#d3d3d3) across entire website
- ✅ Navbar remains white for contrast
- ✅ Professional color transitions

### Email Integration
- ✅ Contact form sends emails to: **asif_sheikh23@hotmail.com**
- ✅ Automatic confirmation emails to users
- ✅ HTML formatted emails with details

## Installation Instructions

### Step 1: Install Dependencies
```powershell
cd "c:\Users\Hassan\Desktop\BIMCAD web\bimcad-web"
npm install
```

### Step 2: Configure Email
1. Open `.env.local` in your project root
2. Replace with your Gmail credentials:
   ```
   EMAIL_USER=asif_sheikh23@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

### Step 3: Get Gmail App Password
1. Go to https://myaccount.google.com/security
2. Enable 2-Factor Authentication (if needed)
3. Scroll down to "App passwords"
4. Select "Mail" and "Windows"
5. Copy the 16-character password generated
6. Paste it in `.env.local` as `EMAIL_PASSWORD`

### Step 4: Test
```powershell
npm run dev
```
- Go to Contact page
- Submit a form
- Check asif_sheikh23@hotmail.com for the email

## File Changes Summary

| File | Changes |
|------|---------|
| `app/globals.css` | Grey background + animations |
| `app/page.tsx` | Homepage animations |
| `app/contact/page.tsx` | Email form integration |
| `components/header.tsx` | Navbar button animations |
| `bimcad-web/api/contact.js` | NEW - Email service |
| `.env.local` | NEW - Email config |
| `bimcad-web/package.json` | Added nodemailer |

## Animation Classes Used

- `animate-in` - Fade in effect
- `fade-in` - Opacity animation
- `slide-in-from-bottom-4` - Slide up from bottom
- `slide-in-from-left-8` - Slide from left
- `slide-in-from-right-8` - Slide from right
- `hover:scale-110` - Scale on hover
- `hover:-translate-y-2` - Lift on hover

## Email Configuration

**Recipient:** asif_sheikh23@hotmail.com

**Email Contains:**
- Sender Name
- Sender Email
- Sender Phone
- Subject
- Full Message

**Automatic Confirmation Email:**
- Sent to sender's email
- Confirms message received
- Professional template

## Performance

✅ GPU-accelerated animations (CSS transforms)
✅ No JavaScript animation libraries needed
✅ Fast and smooth 60fps animations
✅ Mobile optimized

## Troubleshooting

### Emails not sending?
- Check EMAIL_USER and EMAIL_PASSWORD in .env.local
- Enable 2FA on Gmail account
- Use App Password (not regular password)
- Check email spam folder

### Animations not showing?
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (npm run dev)
- Check Tailwind CSS is loading

### Form not submitting?
- Check browser console for errors (F12)
- Verify API endpoint is `/api/contact`
- Ensure nodemailer is installed

## Next Steps

1. ✅ All code is ready
2. 📦 Install nodemailer: `npm install`
3. 🔑 Set up email config in `.env.local`
4. 🧪 Test contact form
5. 🚀 Deploy to production

---

**Contact Email:** asif_sheikh23@hotmail.com
**Website Animations:** Professional & Fast ⚡
