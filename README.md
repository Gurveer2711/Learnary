# Learnary - Real-time AI Teaching Platform

A modern Learning Management System (LMS) built with Next.js that provides real-time AI-powered teaching companions for personalized learning experiences.

## 🚀 Features

- **AI Teaching Companions**: Interactive AI tutors for various subjects
- **Real-time Voice Interaction**: Powered by Vapi AI for natural conversations
- **Subject Diversity**: Support for Maths, Language, Science, History, Coding, Geography, Economics, Finance, and Business
- **User Authentication**: Secure authentication with Clerk
- **Bookmarking System**: Save and organize your favorite learning companions
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI
- **Session Tracking**: Monitor your learning progress and recent sessions
- **Voice Customization**: Different voice options for personalized learning experiences

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Authentication**: Clerk
- **Database**: Supabase
- **Voice AI**: Vapi AI
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, HeroUI
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Error Tracking**: Sentry
- **Icons**: Lucide React

## 📁 Project Structure

```
lms-saas-app/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── companions/        # Companion pages
│   ├── sign-in/          # Authentication pages
│   ├── subscription/     # Subscription management
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── ...              # Feature-specific components
├── lib/                 # Utility libraries
│   ├── actions/         # Server actions
│   ├── supabase.ts      # Database client
│   └── vapi.sdk.ts      # Voice AI client
├── types/               # TypeScript type definitions
├── constants/           # Application constants
└── public/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account
- Vapi AI account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd lms-saas-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Supabase Database
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Vapi AI
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token

   # Sentry (Optional)
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Usage

### Creating a Learning Companion

1. Navigate to `/companions/new`
2. Fill in the companion details:
   - **Name**: The AI tutor's name
   - **Subject**: Choose from available subjects
   - **Topic**: Specific topic to focus on
   - **Voice**: Select voice type
   - **Style**: Teaching style preference
   - **Duration**: Session length

### Starting a Learning Session

1. Browse available companions on the dashboard
2. Click on a companion card to start a session
3. Use voice commands to interact with your AI tutor
4. Bookmark companions for quick access later

### Managing Your Learning Journey

- View recent sessions in `/my-journey`
- Access subscription features in `/subscription`
- Manage your profile through Clerk authentication

## 🎨 UI Components

The application uses a custom UI component library built with:

- **Radix UI**: Accessible, unstyled components
- **Tailwind CSS**: Utility-first styling
- **HeroUI**: Additional UI components
- **Framer Motion**: Smooth animations

## 🔐 Authentication & Security

- **Clerk**: Handles user authentication and session management
- **Supabase**: Secure database with Row Level Security (RLS)
- **Environment Variables**: Sensitive data stored securely

## 🗄️ Database Schema

The application uses Supabase with the following main entities:

- **Companions**: AI teaching companions with subject, topic, and voice settings
- **Users**: User profiles and preferences
- **Sessions**: Learning session history and progress
- **Bookmarks**: User-saved companions

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Contact the development team

## 🔮 Roadmap

- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app development
- [ ] Integration with external LMS platforms
- [ ] Advanced voice customization
- [ ] Collaborative learning features
- [ ] AI-powered progress assessment

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
