# Components

## Authentication Components

### MoniteAuth
- `MoniteSignupForm`: Business registration with required fields
  - Business name
  - Business type (individual/organization)
  - Tax ID
  - Address information
  - Contact details
- `MoniteEntitySetup`: Entity creation and verification
- `MoniteOnboarding`: Step-by-step onboarding process

## Layout Components

### DashboardLayout
Main application wrapper with:
- Responsive sidebar
- Header with notifications
- Content area management
- Monite entity status indicator

### Sidebar
Navigation component with:
- Collapsible menu
- Active state management
- User profile section
- Entity switcher

## Feature Components

### Bill Pay
- `BillPayHeader`: Section header with actions
- `TransactionsList`: Display bill listings
- `TransactionItem`: Individual bill display
- `StatusCard`: Financial metric display
- `MoniteBillSync`: Real-time bill sync status
- `MonitePaymentMethods`: Available payment methods
- `MonitePaymentFlow`: Payment processing workflow

### Invoice
- `InvoiceGenerator`: Multi-step form
- `InvoiceDetailsForm`: Line items management
- `CompanyDetailsForm`: Business information
- `PaymentDetailsForm`: Payment setup
- `MoniteInvoiceSync`: Real-time invoice sync
- `MoniteInvoiceStatus`: Invoice status tracker
- `MonitePaymentTerms`: Payment terms selector

### Banking
- `BankAccountVerification`: Account verification flow
- `BankConnectionStatus`: Connection status display
- `TransactionSync`: Real-time transaction sync
- `BalanceDisplay`: Real-time balance information
- `MoniteBankingDashboard`: Banking overview

### Payments
- `PaymentDialog`: Process payments
- `PaymentMethodSelector`: Payment method selection
- `MonitePaymentStatus`: Payment status tracker
- `MonitePaymentReceipt`: Payment confirmation

## Form Components
- `AddressForm`: Address input and validation
- `CardForm`: Credit card input with validation
- `BusinessInfoForm`: Company details form
- `TaxInfoForm`: Tax information form

## Monite Integration Components
- `MoniteProvider`: SDK context provider
- `MoniteEntityContext`: Entity management
- `MoniteWebhookHandler`: Real-time updates
- `MoniteErrorBoundary`: Error handling
- `MoniteStatusIndicator`: Connection status

## UI Components
All components use Shadcn/UI and Tailwind CSS for consistent styling:
- Buttons
- Inputs
- Cards
- Dialogs
- Tables
- Toast notifications