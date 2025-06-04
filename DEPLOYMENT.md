# Deployment Guide for VetCare Family Website

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `env.example` to `.env.local`
   - Get a Resend API key from [resend.com](https://resend.com/)
   - Add your API key to `.env.local`

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Visit**: http://localhost:3000

## Production Deployment

### Vercel (Recommended)

1. **GitHub Setup**:
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit - VetCare Family website"
   
   # Create GitHub repository and push
   git remote add origin https://github.com/yourusername/vetcare-family.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com/)
   - Connect your GitHub account
   - Import the repository
   - Set environment variables in Vercel dashboard:
     - `RESEND_API_KEY`: Your Resend API key
     - `CONTACT_EMAIL`: contact@vetcarefamily.ro
     - `CONTACT_PHONE`: 0720.123.123
   - Deploy!

3. **Custom Domain** (Optional):
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed
   - SSL is handled automatically

### Other Platforms

#### Netlify
- Connect GitHub repository
- Set build command: `npm run build`
- Set publish directory: `.next`
- Add environment variables in Netlify dashboard

#### Traditional Hosting
```bash
# Build the application
npm run build

# The static files will be in the .next folder
# Upload to your hosting provider
```

## Environment Variables

Required for production:
- `RESEND_API_KEY`: Email service API key
- `CONTACT_EMAIL`: Your clinic email
- `CONTACT_PHONE`: Your clinic phone number

Optional:
- `BUSINESS_NAME`: Clinic name (defaults to "VetCare Family")
- `BUSINESS_ADDRESS`: Clinic address
- `FACEBOOK_URL`: Facebook page URL
- `INSTAGRAM_URL`: Instagram profile URL

## Features Checklist

✅ **Landing Page**
- Hero section with appointment form
- Services showcase
- Pricing transparency
- About section
- Customer testimonials
- Contact information
- Location with map

✅ **Technical Features**
- Responsive design (mobile-first)
- Form validation
- Email notifications
- Smooth scrolling navigation
- Sticky contact bar
- Professional design
- Fast loading times

✅ **Business Features**
- Professional Romanian content
- Contact information prominently displayed
- Social media integration
- Google Maps integration
- Appointment booking system

## Maintenance

- **Images**: Add new images to `public/images/` folders
- **Content**: Update text in respective component files
- **Styling**: Modify `tailwind.config.js` and component styles
- **Forms**: API route is at `app/api/send-appointment/route.ts`

## Support

For technical issues:
1. Check console for errors
2. Verify environment variables
3. Test email functionality with valid Resend API key
4. Ensure all images are in `public/images/` folders

## Performance

The website is optimized for:
- ⚡ Fast loading (< 3s)
- 📱 Mobile responsiveness
- 🎯 SEO optimization
- 🔒 Security best practices
- ♿ Accessibility standards 