# WonderVite Frontend Project

## Project Overview
- Next.js application with App Router architecture
- Authentication via Supabase
- Integration with Monite API for financial operations
- Uses shadcn/ui components
- TypeScript throughout

## Key Architecture Decisions
- App Router for routing and layouts
- Server Components by default, Client Components when needed
- Supabase for authentication and data storage
- React Query for server state management
- Context providers for global state

## Best Practices
- Keep server components as default, only use 'use client' when needed
- Place context providers at lowest possible level in component tree
- Use dynamic imports for client-side only features
- Provide loading states for dynamically imported components
- Each route using context needs its own provider instance
- Settings pages should be client components
- Match import/export styles (named vs default)
- Components using React Query must be wrapped in QueryClientProvider

## File Structure
```
app/                  # Next.js App Router pages and layouts
src/
  components/         # Reusable UI components
  contexts/          # React contexts
  hooks/             # Custom React hooks
  providers/         # Global providers
  types/             # TypeScript types
  utils/             # Utility functions
```

## Authentication Flow
1. Supabase handles auth via Auth UI
2. AuthProvider manages session state
3. Protected routes check session in middleware
4. Monite entity creation on first login

## Development Guidelines

### Development Server
- Start with `npm run dev`
- Runs on http://localhost:3000 by default
- Long-running process that will time out in the terminal after 30s (this is expected)
- Server will continue running despite the timeout message

- When using React Flow components:
  - Import Handle and Position from 'reactflow'
  - Add isConnectable prop to Handle components
  - Use 'use client' directive for flow components
  - Install reactflow package instead of @reactflow/core
- When using Recharts with Next.js:
  - Use 'use client' directive for chart components
  - Import specific chart components directly from 'recharts'
  - Use useChart hook for configuration
  - Wrap chart in a div with fixed height
- When using React Day Picker with Next.js:
  - Use 'use client' directive for calendar components
  - Import DayPicker directly from 'react-day-picker'
  - Do not pass children to DayPicker component
  - Use classNames prop for styling
- When using React Flow components:
  - Import Handle and Position from 'reactflow'
  - Add isConnectable prop to Handle components
  - Use 'use client' directive for flow components
  - Install reactflow package instead of @reactflow/core
- When using Recharts with Next.js:
  - Use 'use client' directive for chart components
  - Import specific chart components directly from 'recharts'
  - Use useChart hook for configuration
  - Wrap chart in a div with fixed height
- When mapping external data to internal types, use type assertions carefully
- For string enums, assert the type and provide a fallback:
```typescript
status: (externalStatus as 'pending' | 'completed' | 'failed') || 'pending'
```
- When handling JSON data that could be null, provide a type assertion and fallback:
```typescript
metadata: jsonData ? jsonData as Record<string, unknown> : undefined
```
- When mapping financial transaction types, determine type based on amount:
```typescript
type: amount >= 0 ? 'income' : 'expense'
```
- Run linting: `npm run lint`
- Run build: `npm run build`
- ESLint uses flat config format in eslint.config.js
- Additional .eslintrc.json for IDE support
- Use toast notifications for consistent error handling across components
- Keep error handling consistent with toast notifications
- Prefix error parameters with _ when only using for toast notifications
- Use both eslint.config.js and .eslintrc.json for better IDE and Next.js support
- Configure Next.js ESLint plugin in .eslintrc.json for proper integration
- Use ES modules for all JavaScript/TypeScript files
- Package.json requires "type": "module" for ES module support
- Prefer type aliases over empty interfaces
- Move non-component exports (variants, utils) to separate files
- Use Record<string, unknown> instead of Record<string, any>
- Prefix unused variables with _ to satisfy linting rules
- Split UI component files into component and variants files
- Keep form components focused on data handling, delegate UI to subcomponents
- Use proper typing for form values and onChange handlers
- Prefix error parameters with _ when only using for toast notifications
- Remove unused state setters when implementing placeholder hooks
- Implement proper error handling with toast notifications
- Use string literal types for status and type fields
- Keep metadata fields as Record<string, unknown>
- Ensure hook dependencies are properly managed with useCallback
- Prefix unused imports with _ to keep type information while satisfying linting
- Remove unused React imports when not using JSX
- Prefix unused props and handlers with _ in component parameters
- Prefix unused imports with _ to keep type information while satisfying linting
- Remove unused React imports when not using JSX
- Prefix unused props and handlers with _ in component parameters
- Keep placeholder components minimal but valid until implementation
- Remove unused imports and props when refactoring components
- Split form-related styles into separate variant files
- Use consistent naming for variant files (component-name-variants.ts)
- Remove unused className props when using cn utility
- Keep form components focused on structure, move styles to variants
- Prefix both state value and setter with _ when unused
- Move non-component styles and variants to separate files
- Keep placeholder components minimal with just a div until implementation
- Remove all unused imports in placeholder components
- Use try/catch with _error when error handling is not yet implemented
- Keep error handling consistent with toast notifications
- Prefix all unused props with _ in placeholder components
- Prefix unused handlers with _ in placeholder components
- Keep placeholder components focused on structure, not implementation
- Prefix both handler name and error parameter with _ in placeholder components
- Keep try/catch blocks in placeholder components for future error handling
- Use consistent error handling pattern in dialog components
- Keep dialog components focused on user interaction and state management
- Prefix both handler name and error parameter with _ in dialog components
- Keep try/catch blocks in dialog components for future error handling
- Split UI component files into component and variants files
- Use consistent naming for variant files (component-name-variants.ts)
- Remove unused className props when using cn utility
- Keep form components focused on structure, move styles to variants
- Move context defaults and constants to variant files
- Keep context providers focused on state management
- Configure ESLint to ignore _error variables in catch blocks
- Use caughtErrorsIgnorePattern for consistent error handling
- Move layout metadata and constants to variant files
- Keep layout components focused on structure and composition
- Prefix both state value and setter with _ when unused
- Move non-component styles and variants to separate files
- Keep placeholder components minimal with just a div until implementation
- Remove all unused imports in placeholder components
- Move context hooks and constants to variant files
- Export hooks from variant files to avoid fast refresh warnings
- Remove unused context imports when hooks are moved to variants
- Prefix unused constants with _ when only used for type information
- Prefix type aliases with _ when only used for other types
- Keep type definitions close to where they are used
- Move layout components to variant files to avoid fast refresh warnings
- Keep layout files minimal by importing from variant files
- Use .tsx extension for files containing JSX
- Import React components and types in variant files

## API Integration
- Monite API version: 2024-05-25
- Supabase for backend functions and data storage
- Environment variables required for both services

## Current Migration Status
- ✅ Migrated from Vite to Next.js App Router
- ✅ Migrated from Vite to Next.js App Router

## Next.js App Router Guidelines
- Pages using dynamic imports must be client components ('use client')
- Pages using hooks must be client components ('use client')
- Pages with dynamic imports should set ssr: false to avoid prerender errors
- Settings pages should be client components ('use client')
- Components imported by settings pages should be client components ('use client')
- Example dynamic import with loading state:
```typescript
const Component = dynamic(
  () => import('@/components/MyComponent').then(mod => mod.MyComponent),
  {
    loading: () => <LoadingComponent />,
    ssr: false
  }
);
```
- Dynamic route params in App Router are promises that must be awaited
- Page components with dynamic routes must be async functions
- Example dynamic route props:
```typescript
interface PageProps {
  params: Promise<{
    [key: string]: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  // Use resolvedParams
}
```
- When using dynamic imports with named exports, use the .then() syntax:
```typescript
const Component = dynamic(
  () => import('@/components/MyComponent').then(mod => mod.MyComponent),
  {
    loading: () => <LoadingComponent />,
    ssr: false
  }
);
```
- Dynamic route params are passed to page components as props
- Client components should receive params through props from server components
- For dynamic route parameters, use interface Props = { params: Promise<{ [key: string]: string }> }
- For pages that need search params, add searchParams: Promise<{ [key: string]: string | string[] | undefined }>
- Keep page components as server components by default
- Keep page components minimal, delegating logic to imported components
- Page components with dynamic routes must be async functions and await their params
- Use interface for page props:
```typescript
interface PageParams {
  [key: string]: string;
}

interface Props {
  params: Promise<PageParams>;
}
```
- Use interface for page props:
```typescript
interface PageParams {
  [key: string]: string;
}

interface Props {
  params: PageParams;
}
```
- Dynamic route params are passed to page components as props
- Client components should receive params through props from server components
- For dynamic route parameters, use type Props = { params: { [key: string]: string } }
- For pages that need search params, add searchParams: { [key: string]: string | string[] | undefined }
- Keep page components as server components by default
- Keep page components minimal, delegating logic to imported components
- Page components with dynamic routes should be async functions
- Use interface for page props:
```typescript
interface PageParams {
  [key: string]: string;
}

interface Props {
  params: PageParams;
}
```
- Use simple type for page props:
```typescript
type Props = {
  params: {
    [key: string]: string;
  };
};
```
- Use interface for page props:
```typescript
interface PageParams {
  [key: string]: string;
}

interface Props {
  params: PageParams;
}
```
- ✅ Converted to server components where possible
- ✅ Updated routing to use App Router conventions
- ✅ Integrated Supabase auth with Next.js middleware
- 🔄 Ongoing: Moving remaining React components to server components where possible
- 🔄 Ongoing: Optimizing data fetching with server components

## Important URLs
- Monite API Docs: https://api.sandbox.monite.com/docs
- Supabase Dashboard: https://zwtxebgyiknysfmpeejy.supabase.co
- GitHub Repository: https://github.com/WonderlandStudio1990/WonderVite-frontend
