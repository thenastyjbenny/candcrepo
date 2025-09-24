# Content on Cue Media

A production-ready, Dockerized web application for Content on Cue Media - a professional video production company.

## Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Storage**: MinIO (S3-compatible) for media files
- **Email**: Nodemailer with MailHog for development
- **Authentication**: NextAuth.js (scaffolded for future use)
- **UI Components**: shadcn/ui with custom theme
- **Animations**: Framer Motion with reduced motion support
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier + Husky
- **Containerization**: Multi-stage Dockerfile

## Local Development

### Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd content-on-cue-media
   ```

2. **Copy environment variables**
   ```bash
   cp env.example .env
   ```

3. **Start the development environment**
   ```bash
   docker-compose up --build
   ```

4. **Run database migrations and seed data**
   ```bash
   docker-compose exec web npm run db:migrate
   docker-compose exec web npm run db:seed
   ```

5. **Access the application**
   - Web App: http://localhost:3000
   - MailHog (Email): http://localhost:8025
   - MinIO Console: http://localhost:9001
   - PostgreSQL: localhost:5432

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Run type checking
npm run typecheck

# Run tests
npm run test

# Database commands
npm run db:generate    # Generate Prisma client
npm run db:migrate     # Run migrations
npm run db:seed        # Seed database
npm run db:studio      # Open Prisma Studio

# Format code
npm run format
```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── api/            # API routes
│   │   ├── (site)/         # Site pages
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── layout/        # Layout components
│   │   └── home/          # Home page components
│   ├── lib/               # Utility libraries
│   ├── hooks/             # Custom React hooks
│   └── styles/            # Global styles
├── prisma/                # Database schema and migrations
├── public/                # Static assets
├── docker-compose.yml     # Local development services
├── Dockerfile            # Production container
└── next.config.js        # Next.js configuration
```

## Environment Variables

Create a `.env` file based on `env.example`:

```env
# NEXT
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# DB
DATABASE_URL=postgresql://postgres:postgres@db:5432/cocm?schema=public

# MINIO
MINIO_ROOT_USER=minio
MINIO_ROOT_PASSWORD=minio123
MINIO_ENDPOINT=minio
MINIO_PORT=9000
MINIO_BUCKET=cocm-media
MINIO_USE_SSL=false

# EMAIL
SMTP_HOST=mailhog
SMTP_PORT=1025
SMTP_USER=
SMTP_PASS=
SMTP_SECURE=false
EMAIL_FROM="Content on Cue Media <no-reply@contentoncue.example>"

# OPTIONAL: NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=devsecret
```

## Deployment on Coolify

### 1. Prepare for Production

1. **Update environment variables** for production:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NODE_ENV=production
   DATABASE_URL=postgresql://user:password@your-db-host:5432/cocm
   MINIO_ENDPOINT=your-minio-host
   SMTP_HOST=your-smtp-host
   EMAIL_FROM="Content on Cue Media <noreply@your-domain.com>"
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t content-on-cue-media .
   ```

### 2. Coolify Deployment

1. **Create a new project** in Coolify
2. **Connect your Git repository**
3. **Configure environment variables** in Coolify dashboard
4. **Set up external services**:
   - PostgreSQL database
   - MinIO or S3-compatible storage
   - SMTP email service
5. **Deploy the application**

### 3. Post-Deployment

1. **Run database migrations**:
   ```bash
   docker exec -it <container-name> npm run db:migrate
   ```

2. **Seed the database** (optional):
   ```bash
   docker exec -it <container-name> npm run db:seed
   ```

3. **Verify the deployment**:
   - Check all pages load correctly
   - Test the lead capture form
   - Verify email notifications work
   - Test file uploads to MinIO/S3

## Features Overview

### Home Page
- **Hero Section**: Compelling headline with CTAs
- **Featured Media**: Video/image carousel with navigation
- **Value Propositions**: Key benefits and features
- **Selected Work**: Portfolio preview grid
- **Lead Capture**: Contact form with validation

### API Endpoints
- `POST /api/leads` - Submit lead form
- `GET /api/media` - Fetch featured media items
- `GET /api/packages` - Fetch video packages

### Database Models
- **Lead**: Contact form submissions
- **MediaItem**: Portfolio items (videos/images)
- **Package**: Service packages and pricing

### Email System
- **Development**: MailHog for testing
- **Production**: SMTP configuration
- **Templates**: Lead notifications and confirmations

## Customization

### Brand Colors
Update CSS variables in `src/styles/globals.css`:
```css
:root {
  --color-bg: #F8F6F0;        /* Cream White */
  --color-fg: #171717;         /* Near Black */
  --color-primary: #2F5D50;     /* Forest Green */
  --color-accent: #C8A644;     /* Gold */
}
```

### Content
- Update company information in components
- Replace placeholder images with actual content
- Customize email templates in `src/lib/email.ts`

## Troubleshooting

### Common Issues

1. **Database connection errors**
   - Verify DATABASE_URL is correct
   - Ensure PostgreSQL is running
   - Check network connectivity

2. **MinIO connection issues**
   - Verify MINIO_ENDPOINT and credentials
   - Check MinIO service is running
   - Ensure bucket exists

3. **Email not sending**
   - Check SMTP configuration
   - Verify email credentials
   - Test with MailHog in development

4. **Build failures**
   - Clear node_modules and reinstall
   - Check TypeScript errors
   - Verify all dependencies are installed

### Development Tips

- Use `docker-compose logs web` to view application logs
- Access Prisma Studio: `npm run db:studio`
- Check MailHog at http://localhost:8025 for email testing
- Use browser dev tools for debugging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is proprietary software for Content on Cue Media.