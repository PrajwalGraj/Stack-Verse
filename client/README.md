# StackVerse Frontend

React frontend for the StackVerse course selling platform.

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Custom CSS** - Design system with CSS variables

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React Context (AuthContext)
├── pages/         # Page components
├── App.jsx        # Main app component
├── main.jsx       # Entry point
└── index.css      # Global styles & design system
```

## 🎨 Design System

The project uses a custom CSS design system with:
- CSS custom properties for consistent theming
- Utility classes for common patterns
- Responsive design patterns
- StackVerse brand colors and typography

## 🔗 API Integration

The frontend communicates with the backend API running on `http://localhost:3000` with endpoints for:
- User authentication (signup/login)
- Admin authentication
- Course management
- User course enrollment

## 🚀 Available Scripts

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
