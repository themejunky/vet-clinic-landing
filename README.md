# VetCare Family - Veterinary Clinic Website

A professional, elegant veterinary clinic landing page built with Next.js and Tailwind CSS. Features online appointment booking, service showcase, pricing transparency, and responsive design optimized for conversions.

## 🏥 Features

- **Professional Design**: Clean, modern UI with red and white color scheme
- **Appointment Booking**: Contact form with Resend email integration
- **Service Showcase**: Comprehensive veterinary services presentation
- **Transparent Pricing**: Clear pricing structure for all services
- **Testimonials**: Customer reviews with real photos
- **Location & Contact**: Interactive map and contact information
- **Responsive Design**: Mobile-first approach for all devices
- **Sticky Contact Bar**: Persistent call-to-action for appointments
- **SEO Optimized**: Proper meta tags and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Resend account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vet-clinic-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

4. **Copy images to public folder**
   ```bash
   # Copy veterinary images
   cp -r vet-images/ public/vet-images/
   
   # Copy testimonial photos  
   cp -r reviews/ public/reviews/
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

```
vet-clinic-landing/
├── app/
│   ├── api/
│   │   └── send-appointment/
│   │       └── route.ts          # Resend API endpoint
│   │   ├── globals.css               # Global styles and Tailwind
│   │   ├── layout.tsx                # Root layout with metadata
│   │   └── page.tsx                  # Main page component
│   ├── components/
│   │   ├── About.tsx                 # About section
│   │   ├── AppointmentForm.tsx       # Contact form with validation
│   │   ├── Footer.tsx                # Footer with links and contact
│   │   ├── Header.tsx                # Navigation header
│   │   ├── Hero.tsx                  # Hero section with form
│   │   ├── Location.tsx              # Location and contact info
│   │   ├── Pricing.tsx               # Pricing tables
│   │   ├── Services.tsx              # Services showcase
│   │   ├── StickyContactBar.tsx      # Bottom sticky contact bar
│   │   ├── Testimonials.tsx          # Customer testimonials
│   │   └── TopBar.tsx                # Top bar with contact info
│   ├── public/
│   │   ├── vet-images/               # Veterinary clinic images
│   │   └── reviews/                  # Customer testimonial photos
│   ├── next.config.js                # Next.js configuration
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── package.json                  # Dependencies and scripts
│   └── PRD.md                        # Product Requirements Document
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#991B1B`, `#DC2626`, `#EF4444`
- **Secondary**: White and light grays (`#F8FAFC`, `#F1F5F9`)
- **Accent**: Professional red variations

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clean hierarchy
- **Body**: Readable, professional

### Components
- Responsive grid layouts
- Card-based design elements
- Smooth animations and transitions
- Consistent spacing and borders

## 📧 Email Configuration

The project uses [Resend](https://resend.com) for email functionality:

1. **Sign up for Resend** at [resend.com](https://resend.com)
2. **Get your API key** from the dashboard
3. **Add to environment variables**:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

### Email Features
- Appointment request notifications to clinic
- Confirmation emails to customers
- Professional HTML email templates
- Error handling and validation

## 🗺️ Map Integration

The location section includes a placeholder for Google Maps. To integrate:

1. Get a Google Maps API key
2. Add to environment variables:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
   ```
3. Update the Location component to use Google Maps embed

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+
- **Touch Friendly**: Larger touch targets on mobile
- **Performance**: Optimized images and lazy loading

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically

3. **Configure Domain** (Optional)
   - Add custom domain in Vercel settings
   - Update DNS records as instructed

### Other Platforms

The app can be deployed on any Node.js hosting platform:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Customization

### Clinic Information
Update these files with your clinic's details:

1. **Contact Information** (`components/TopBar.tsx`, `components/Footer.tsx`)
   - Phone number: `0720.123.123`
   - Address: `Strada Maria Rosetti 26A, București 020487`
   - Email: `contact@vetcarefamily.com`

2. **Clinic Name** (`app/layout.tsx`, `components/Header.tsx`)
   - Current: "VetCare Family"
   - Update meta title and descriptions

3. **Services and Pricing** (`components/Services.tsx`, `components/Pricing.tsx`)
   - Update service descriptions
   - Modify pricing information
   - Add/remove services as needed

4. **Team Information** (`components/About.tsx`)
   - Update team member details
   - Modify clinic history and credentials

### Styling
- **Colors**: Modify `tailwind.config.js` for different color scheme
- **Fonts**: Update font imports in `app/globals.css`
- **Components**: Customize component styles in respective files

## 📊 Analytics

To add Google Analytics:

1. **Get GA4 Measurement ID**
2. **Add to environment variables**:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. **Update layout.tsx** to include Google Analytics script

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**
   - Check Resend API key is correct
   - Verify domain settings in Resend dashboard
   - Check console for error messages

2. **Images not loading**
   - Ensure images are in `public/vet-images/` and `public/reviews/`
   - Check file names match component imports
   - Verify Next.js image optimization settings

3. **Styling issues**
   - Run `npm run build` to check for CSS conflicts
   - Verify Tailwind classes are properly applied
   - Check responsive breakpoints

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Support

For questions or support, please contact the development team or refer to the PRD.md file for detailed project requirements.

---

**Built with ❤️ for VetCare Family** 