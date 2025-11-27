# Hair Style Studio - AI-Powered Hair Transformation

A professional, modern web application built with Next.js that allows users to transform their hairstyle using AI image generation technology.

## Features

- **Image Upload**: Drag-and-drop or browse to upload your photo
- **16+ Hair Styles**: Choose from a variety of professional hairstyles across different categories:
  - Short (Pixie, Undercut)
  - Medium (Bob, Lob, Shaggy Layers)
  - Long (Beach Waves, Sleek Straight, Blunt Cut)
  - Curly (Voluminous Curls, Loose Curls, Natural Afro)
  - Modern & Classic styles
- **Customizable Prompts**: Edit and refine AI prompts with quick modifiers
- **Side-by-Side Comparison**: View original and transformed images together
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Clean, professional interface with dark mode support

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom-built with modern design principles
- **Image Processing**: Next.js Image Optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd img_generationweb
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your AI service API key to `.env`:
```env
REPLICATE_API_TOKEN=your_token_here
# OR
OPENAI_API_KEY=your_key_here
# OR
STABILITY_API_KEY=your_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## AI Service Integration

The application is designed to work with multiple AI image generation services. By default, it includes a placeholder that returns the original image.

### Recommended Services:

#### 1. Replicate (Recommended)
- Best for Stable Diffusion models
- Sign up at [replicate.com](https://replicate.com)
- Add API token to `.env`

#### 2. OpenAI DALL-E
- Sign up at [platform.openai.com](https://platform.openai.com)
- Add API key to `.env`

#### 3. Stability AI
- Sign up at [stability.ai](https://stability.ai)
- Add API key to `.env`

### Integration Steps:

1. Choose your AI service
2. Sign up and get API credentials
3. Add credentials to `.env`
4. Update `/app/api/generate/route.ts` with service-specific code
5. Uncomment and modify the example code provided in the route

## Project Structure

```
img_generationweb/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # API endpoint for image generation
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── ImageUpload.tsx           # Image upload component
│   ├── StyleSelector.tsx         # Hair style selector
│   ├── PromptEditor.tsx          # Prompt customization
│   └── ResultsDisplay.tsx        # Results comparison view
├── lib/
│   ├── types.ts                  # TypeScript types
│   └── hairStyles.ts             # Hair style definitions
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Usage

1. **Upload Photo**: Click or drag-and-drop your photo
2. **Select Style**: Browse and select from 16+ hair styles
3. **Customize**: Edit the AI prompt or add quick modifiers
4. **Generate**: Click "Generate New Look" button
5. **Compare**: View side-by-side comparison of original and transformed images
6. **Download**: Save your transformed image

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Color Theme

The application uses a modern, professional color scheme:

- **Primary**: Indigo shades (for accents and CTAs)
- **Neutral**: Gray scale (for text and backgrounds)
- **Dark Mode**: Full support with adjusted colors

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Next.js Image component
- Lazy loading for better initial load
- Minimized CSS with Tailwind
- Efficient component rendering

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Support

For issues and questions, please open an issue in the repository.

## Roadmap

- [ ] Add more hair styles
- [ ] Implement hair color changes
- [ ] Add multiple image uploads
- [ ] Save and compare multiple transformations
- [ ] User accounts and history
- [ ] Social sharing features
- [ ] Advanced editing tools

## Credits

Built with Next.js, TypeScript, and Tailwind CSS
AI integration ready for Replicate, OpenAI, or Stability AI
