# Copilot Instructions for @boneframework/native-components

This is an **Expo React Native component library** for the Bone Framework, providing reusable UI components and utilities for cross-platform (native + web) applications.

## Architecture Overview

### Core Layers
- **Components** (`components/`): Platform-specific UI components using `.native.tsx` (React Native) and `.web.tsx` (web) naming
- **Contexts** (`contexts/`): React Context API for state management (API, Auth, Cache, Colors, Settings, Theme)
- **Hooks** (`hooks/`): Custom hooks consuming contexts and managing side effects
- **API** (`api/`): HTTP clients using `apisauce` wrapper around axios, with built-in offline caching
- **Screens** (`screens/`): Full-page components for app navigation
- **Utilities** (`utilities/`): Helper functions (auth storage, caching, logging, JSON parsing)

### Data Flow Pattern
**API Call → Hook (useApi) → Context → Components**

Example: A screen dispatches an API call through `useApi(apiFunction)`, which updates context, triggering component re-renders.

## Key Patterns & Conventions

### 1. Platform-Specific Components
Use `.native.tsx` and `.web.tsx` extensions for platform divergence:
- `Animation.native.tsx` uses `lottie-react-native`
- `Animation.web.tsx` uses `lottie-react`
- `MapScreen.native.tsx` and `MapScreen.web.tsx` for native/web map implementations

**Import pattern:** `import Animation from './Animation'` (Expo auto-resolves `.native`/`.web`)

### 2. API Client & Caching
- Configured in `api/client.ts` using `apisauce` with `EXPO_PUBLIC_API_URL` env var
- Built-in offline fallback: if request fails, attempts to serve cached response
- Cache blacklist exists (commented out) for endpoints that shouldn't be cached
- API functions live in `api/{resource}.ts` and return Promise<apisauceResponse>

Example:
```typescript
// api/users.ts
const getUser = (id) => client.get(`/api/users/${id}`);
export default { getUser };

// Usage in hook
const { data, loading, error } = useApi(usersApi.getUser)(userId);
```

### 3. Forms with Formik + Validation
- `Form.tsx` wraps Formik with validation schema integration
- `FormField.tsx` components connect to Formik state
- Form components: `FormDateTimePicker`, `FormImagePicker`, `FormPicker`
- `SubmitButton.tsx` auto-disables when form is invalid

Pattern:
```typescript
<Form 
  initialValues={{email: ''}} 
  validationSchema={yupSchema} 
  onSubmit={handleSubmit}
>
  <FormField name="email" />
  <SubmitButton label="Submit" />
</Form>
```

### 4. Auth & Storage
- JWT tokens stored securely via `expo-secure-store` (platform-native keychain)
- User objects stored in `AsyncStorage`
- `AuthContext` manages `login()`, `logout()`, `updateUser()`, user state, and loading state
- `useAuth()` hook provides auth context with type safety
- `authStorage.ts` handles all secure/async storage operations

### 5. Context Consumers Pattern
`BoneNativeProvider` aggregates all contexts. External projects pass config:
```typescript
<BoneNativeProvider 
  api={apiConfig}
  cache={cacheInstance}
  colors={themeColors}
  settings={appSettings}
>
  <YourApp />
</BoneNativeProvider>
```

### 6. Reusable UI Components
- **Layout**: `Screen` (handles safe area + status bar), `Card`, `Background`
- **Input**: `TextInput`, `Picker`, `DateTimePicker`, `ImageInput`
- **Lists**: `ListItemSwipable`, `ListItemDeleteAction`, `ListItemSeparator`
- **Actions**: `Button`, `RoundIconButton`, `OfflineNotice`
- All follow React Native StyleSheet patterns with `useStyle()` hook for theme colors

## Development Workflows

### Environment Setup
```bash
pnpm install
# Uses Expo. Requires EXPO_PUBLIC_API_URL env var set
```

### Key Files to Know
- `package.json`: Dependencies include Formik, apisauce, expo-router, Lottie animations
- `tsconfig.json`: Extends `expo/tsconfig.base`, uses JSX mode
- Asset animations in `assets/animations/` (loader.json, email.json, done.json)

### Building & Publishing
- Published to npm as `@boneframework/native-components`
- Main entry: `src/Bone.ts`
- Semantic versioning in use (currently v1.0.60)

## Integration Points

### External Dependencies
- **Expo ecosystem**: router, auth-session, camera, location, notifications, secure-store, image-picker, linear-gradient
- **Forms**: Formik + Yup (validation assumed by consumers)
- **Animations**: lottie-react-native (native), lottie-react (web)
- **Async**: AsyncStorage + Expo SecureStore for persistence
- **Networking**: apisauce (axios wrapper)
- **UI**: React Native, safe-area-context

### Expected Consumer Setup
Consumers must provide:
- API client configuration (baseURL)
- Theme colors & settings contexts
- Cache implementation
- Auth token management

## Common Tasks

### Adding a New Component
1. Create `components/YourComponent.tsx`
2. For platform variance, use `YourComponent.native.tsx` + `YourComponent.web.tsx`
3. Export from component with appropriate platform extension
4. Use `useStyle()` for theme-aware styling

### Adding an API Endpoint
1. Create `api/{resource}.ts`
2. Use `client` from `api/client.ts`
3. Export functions that return `client.get()`, `client.post()`, etc.
4. Consume via `useApi(resourceApi.method)` in components

### Handling Authentication
1. Call `authContext.login(token)` after successful auth
2. Token auto-stored securely via `authStorage.storeAuthToken()`
3. Use `useAuth()` hook in components to access `user` and `isLoading`
4. Use `ApiInterceptor.tsx` to attach tokens to outgoing requests

## Notes
- No test suite configured yet (test script is placeholder)
- Caching implementation partially disabled (commented toggle in `api/client.ts`)
- This is a **library** not a full app—consumers handle routing, screens, and data contracts
