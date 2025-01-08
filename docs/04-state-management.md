# State Management

## Authentication State

### Supabase Auth
- User session management
- Token handling
- Permission checks
- Protected routes

### Monite Auth
- Entity authentication
- API token management
- Webhook verification
- Real-time status updates

## Application State
- React Query for server state
- Context for global settings
- Local state for UI components

## Data Fetching

### React Query Implementation
```typescript
const { data, isLoading } = useQuery({
  queryKey: ['monite-entity'],
  queryFn: fetchMoniteEntity,
});
```

### Mutations
```typescript
const mutation = useMutation({
  mutationFn: createMoniteEntity,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['monite-entity'] });
  },
});
```

## Monite Integration
- Entity management
- Real-time updates
- Webhook handling
- Error tracking

## Caching Strategy
- React Query caching with 5-minute stale time
- Local storage persistence for user preferences
- Cache invalidation on mutations
- Optimistic updates for better UX

## Global State
- Theme settings via Context
- User preferences
- Application configuration
- Toast notifications for feedback
- Monite entity status
- Banking connection status