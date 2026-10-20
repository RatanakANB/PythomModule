var e=`# 🏗️ Frontend System Design & Information Architecture

> **Project:** \`my-next-fastapi-app\`
> **Stack:** Next.js (App Router) · TypeScript · TailwindCSS · FastAPI (Backend)
> **Principle:** *Reusable. Modular. Maintainable. Zero Spaghetti.*

---

## Table of Contents

1. [Philosophy & Core Principles](#1-philosophy--core-principles)
2. [Project File Tree](#2-project-file-tree)
3. [How the Structure Fights Spaghetti Code](#3-how-the-structure-fights-spaghetti-code)
4. [Folder & File Reference Table](#4-folder--file-reference-table)
5. [Architecture Diagrams](#5-architecture-diagrams)
   - [5.1 High-Level System Overview](#51-high-level-system-overview)
   - [5.2 Data Flow: Client → Server → FastAPI](#52-data-flow-client--server--fastapi)
   - [5.3 Component Dependency Graph](#53-component-dependency-graph)
   - [5.4 Feature Module Internal Structure](#54-feature-module-internal-structure)
   - [5.5 State Management Flow](#55-state-management-flow)
   - [5.6 Routing & Layout Hierarchy](#56-routing--layout-hierarchy)
   - [5.7 API Layer Architecture](#57-api-layer-architecture)
   - [5.8 Reusability Decision Tree](#58-reusability-decision-tree)
   - [5.9 Maintainability: Change Impact Isolation](#59-maintainability-change-impact-isolation)
6. [Design Patterns Used](#6-design-patterns-used)
7. [Developer Guidelines](#7-developer-guidelines)

---

## 1. Philosophy & Core Principles

This architecture is designed around **four non-negotiable pillars**:

| Pillar | Definition | Anti-Pattern it Prevents |
|---|---|---|
| **Reusability** | Write once, use everywhere without duplication | Copy-paste logic scattered across files |
| **Modularity** | Each unit has a single, clear responsibility | God-components / God-files doing everything |
| **Maintainability** | Change one place, nothing else breaks unexpectedly | Tight coupling, implicit dependencies |
| **Scalability** | Add new features without restructuring existing code | Flat folders that collapse under growth |

> **Mental Model:** Think of the codebase as a city. \`app/\` is the road map. \`features/\` are the districts. \`components/ui/\` are the building blocks (bricks & glass). \`lib/\` is the city's infrastructure (water, electricity). You never rewire the whole city to fix one building.

---

## 2. Project File Tree

\`\`\`
my-next-fastapi-app/
├── src/
│   ├── app/                          # 🗺️  Routing ONLY — layouts, pages, special files
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   ├── page.tsx
│   │   │   ├── users/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── layout.tsx                # Root layout (html, body, providers)
│   │   ├── page.tsx                  # Home page
│   │   ├── loading.tsx               # Global loading skeleton
│   │   ├── error.tsx                 # Global error boundary
│   │   └── not-found.tsx             # 404 page
│   │
│   ├── components/                   # 🧱  Reusable, stateless UI building blocks
│   │   ├── ui/                       # Primitive components (shadcn/ui style)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── table.tsx
│   │   │   └── modal.tsx
│   │   └── common/                   # Shared layout pieces
│   │       ├── navbar.tsx
│   │       └── sidebar.tsx
│   │
│   ├── features/                     # 🏘️  Vertical feature slices (scales best)
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── actions/
│   │   │   └── types.ts
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── actions/
│   │   └── users/
│   │       ├── components/
│   │       ├── hooks/
│   │       └── actions/
│   │
│   ├── hooks/                        # 🪝  Global cross-cutting custom hooks
│   │   ├── useAuth.ts
│   │   ├── useDebounce.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── lib/                          # ⚙️  Core utilities & API communication layer
│   │   ├── api/
│   │   │   ├── client.ts             # Base typed HTTP client
│   │   │   ├── auth.ts
│   │   │   ├── users.ts
│   │   │   └── products.ts
│   │   ├── actions/
│   │   │   ├── auth-actions.ts
│   │   │   └── user-actions.ts
│   │   ├── utils/
│   │   │   ├── cn.ts
│   │   │   ├── format.ts
│   │   │   └── validators.ts
│   │   ├── constants.ts
│   │   └── cache.ts
│   │
│   ├── providers/                    # 🌐  Global React context providers
│   │   ├── AuthProvider.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── QueryProvider.tsx
│   │   └── index.tsx
│   │
│   ├── types/                        # 🔷  Global TypeScript type definitions
│   │   ├── index.ts
│   │   ├── api.ts
│   │   └── user.ts
│   │
│   ├── store/                        # 🗄️  Global client-side state
│   │   └── useUserStore.ts
│   │
│   └── styles/
│       └── globals.css               # Tailwind + custom design tokens
│
├── public/
├── middleware.ts                     # Auth guards, redirects, i18n
├── next.config.ts
├── tsconfig.json
├── .env.local
└── openapi-ts.config.ts              # Auto-type-gen from FastAPI OpenAPI spec
\`\`\`

---

## 3. How the Structure Fights Spaghetti Code

### 3.1 Separation of Concerns via Layer Isolation

The project is organized in **horizontal layers** (by technical role) **and** **vertical slices** (by business feature). This dual-axis system means:

- A **UI change** only touches \`components/\` or \`features/*/components/\`
- An **API change** only touches \`lib/api/\`
- A **new feature** is self-contained inside \`features/<n>/\`
- A **global state** change only touches \`store/\` or \`providers/\`

No change should require editing more than **2 layers** at once under normal circumstances.

### 3.2 The \`features/\` Vertical Slice Pattern

Instead of organizing by file type alone (\`all hooks here, all components there\`), the \`features/\` directory groups files **by business domain**. This means:

- The \`auth\` feature owns its own components, hooks, actions, and types
- Deleting a feature = deleting one folder
- Onboarding a new developer = pointing them to one folder for full context

### 3.3 \`components/ui/\` as a Design System Foundation

Primitive components in \`components/ui/\` are **stateless, headless, and prop-driven**. They carry no business logic. This means:

- They can be tested in isolation
- They can be reused across every feature
- Changing a \`Button\` style propagates everywhere automatically

### 3.4 \`lib/api/\` as the Single Source of Truth for Backend Communication

All HTTP calls are funneled through \`lib/api/client.ts\`. No \`fetch()\` calls exist inside components. This means:

- Error handling is standardized in one place
- Auth headers are injected once
- Mocking for tests is done by replacing one file

### 3.5 TypeScript Types as Contracts

\`types/api.ts\` holds types auto-generated from FastAPI's OpenAPI spec via \`openapi-ts\`. This creates a **compile-time contract** between frontend and backend — if the API changes shape, TypeScript will scream before the app breaks in production.

---

## 4. Folder & File Reference Table

### \`src/app/\` — Routing Layer

| File/Folder | Purpose | How to Build | How to Use | How to Maintain |
|---|---|---|---|---|
| \`app/layout.tsx\` | Root HTML shell, injects \`<Providers>\` | Wrap \`children\` with all global providers | Never add business logic here | Only touch when adding a new global provider |
| \`app/page.tsx\` | Home route (\`/\`) | Import feature components, compose the page | Acts as glue between route and features | Swap feature components as needed |
| \`app/(auth)/login/page.tsx\` | Login route, grouped under auth | Import \`LoginForm\` from \`features/auth/components/\` | Route group \`(auth)\` has no URL impact | Add new auth pages (register, reset) as siblings |
| \`app/(dashboard)/layout.tsx\` | Dashboard shell with sidebar | Import \`Sidebar\`, \`Navbar\` from \`components/common/\` | Applies to all routes under \`(dashboard)\` | Change sidebar/nav here for dashboard-wide layout |
| \`app/loading.tsx\` | Suspense fallback | Return a skeleton component | Next.js auto-displays during navigation | Replace skeleton design per route if needed |
| \`app/error.tsx\` | Error boundary | \`"use client"\` + \`useEffect\` to log errors | Next.js auto-wraps route in error boundary | Customize error UI or add error reporting |
| \`app/not-found.tsx\` | 404 page | Static component with navigation links | Auto-triggered by \`notFound()\` helper | Brand/copy updates only |

---

### \`src/components/\` — Primitive UI Layer

| File/Folder | Purpose | How to Build | How to Use | How to Maintain |
|---|---|---|---|---|
| \`ui/button.tsx\` | Generic Button primitive | Accept \`variant\`, \`size\`, \`disabled\`, \`onClick\` props | \`<Button variant="primary">Save</Button>\` | Extend variants via \`cva()\` (class-variance-authority) |
| \`ui/card.tsx\` | Container card primitive | Accept \`children\`, optional \`header\`, \`footer\` | Wrap any content block | Change border-radius/shadow in one place |
| \`ui/table.tsx\` | Data table primitive | Accept \`columns[]\`, \`data[]\`, \`onSort\` | Used by any feature that lists data | Add pagination/sort props without touching consumers |
| \`ui/modal.tsx\` | Dialog/overlay primitive | Controlled via \`isOpen\` + \`onClose\` props | Wrap any modal content | Change animation/backdrop here globally |
| \`common/navbar.tsx\` | Top navigation bar | Import from \`store\` for user state, \`lib/api\` for auth | Placed in \`app/layout.tsx\` or dashboard layout | Update links, add notification bell here |
| \`common/sidebar.tsx\` | Dashboard sidebar | Navigation links + collapse state | Used in \`(dashboard)/layout.tsx\` | Add/remove menu items here |

> **Rule:** A component in \`components/ui/\` **must never** import from \`features/\`, \`lib/api/\`, or \`store/\`. Data flows **in** via props only.

---

### \`src/features/\` — Business Domain Layer

| Feature Subfolder | Purpose | How to Build | How to Use | How to Maintain |
|---|---|---|---|---|
| \`features/auth/components/\` | Auth-specific UI (LoginForm, RegisterForm) | Compose from \`components/ui/\` primitives + \`hooks/\` | Import in \`app/(auth)/*/page.tsx\` | Add new auth UI here, never in \`app/\` |
| \`features/auth/hooks/\` | e.g. \`useLogin()\`, \`useSession()\` | Call \`lib/api/auth.ts\` functions, manage loading/error state | Used inside auth components only | Change auth logic without touching UI |
| \`features/auth/actions/\` | Server Actions for auth mutations | \`"use server"\` functions that call FastAPI | Called from forms via \`action={}\` | Replace with API calls if moving to client-side |
| \`features/auth/types.ts\` | Auth-specific types (LoginPayload, SessionUser) | Extend from \`types/api.ts\` global types | Imported only within \`features/auth/\` | Sync with backend schema changes |
| \`features/users/components/\` | UserCard, UserTable, UserFilters | Compose from \`components/ui/\` + user data | Imported in \`app/(dashboard)/users/\` pages | Feature-isolated: change without risk |
| \`features/dashboard/hooks/\` | e.g. \`useDashboardMetrics()\` | Fetch from \`lib/api/\`, transform for display | Used by dashboard components only | Swap data source without touching components |

> **Rule:** Features **can** import from \`components/ui/\`, \`lib/\`, \`hooks/\`, and \`types/\`. Features **must never** import from each other directly. Cross-feature communication goes through \`store/\` or \`providers/\`.

---

### \`src/hooks/\` — Global Cross-Cutting Hooks

| File | Purpose | How to Build | How to Use | How to Maintain |
|---|---|---|---|---|
| \`useAuth.ts\` | Access current user session globally | Read from \`AuthProvider\` context | \`const { user, logout } = useAuth()\` | Update when auth provider changes |
| \`useDebounce.ts\` | Delay state updates for search inputs | Generic \`<T>(value: T, delay: number)\` | \`const debouncedSearch = useDebounce(query, 300)\` | Pure utility — rarely needs changing |
| \`useLocalStorage.ts\` | Persist state across sessions | Wrap \`useState\` + \`localStorage\` with SSR guard | \`const [theme, setTheme] = useLocalStorage("theme", "dark")\` | Add type safety if extending |

> **Rule:** Hooks in \`hooks/\` are **domain-agnostic**. If a hook is specific to \`auth\` or \`users\`, it lives in \`features/*/hooks/\` instead.

---

### \`src/lib/\` — Infrastructure Layer

| File/Folder | Purpose | How to Build | How to Use | How to Maintain |
|---|---|---|---|---|
| \`lib/api/client.ts\` | Base HTTP client wrapping \`fetch\` | Add default headers (auth token), base URL, error handling | All other \`lib/api/*.ts\` files import this | Change auth header strategy here once |
| \`lib/api/auth.ts\` | Auth API calls (\`login\`, \`logout\`, \`refresh\`) | Typed functions calling \`client.ts\` endpoints | Used by \`features/auth/hooks/\` | Update when FastAPI auth routes change |
| \`lib/api/users.ts\` | Users CRUD API calls | Typed functions returning \`User[]\` or \`User\` | Used by \`features/users/hooks/\` | Update endpoint paths/types here |
| \`lib/actions/auth-actions.ts\` | Server Actions for auth (Next.js) | \`"use server"\`, call \`lib/api/auth.ts\`, revalidate cache | Used in \`<form action={loginAction}>\` | Swap to client-side if architecture changes |
| \`lib/utils/cn.ts\` | Merge Tailwind classes safely | \`clsx\` + \`tailwind-merge\` combined | \`cn("base-class", conditional && "extra")\` | Rarely changes |
| \`lib/utils/format.ts\` | Date, currency, number formatters | Pure functions with \`Intl\` API | \`formatCurrency(1999, "USD")\` | Add new formatters as needed |
| \`lib/utils/validators.ts\` | Zod schemas or validation helpers | Reusable Zod schemas for forms | Import in form components | Update schema when API contracts change |
| \`lib/constants.ts\` | App-wide constants (routes, config keys) | \`export const ROUTES = { LOGIN: "/login" }\` | \`import { ROUTES } from "@/lib/constants"\` | Single source of truth for magic strings |
| \`lib/cache.ts\` | React \`cache()\` wrappers for Server Components | Cache expensive data fetches | Used in Server Component data loaders | Add new cache entries per resource |

---

### \`src/providers/\` — Global Context Layer

| File | Purpose | How to Build | How to Use | How to Maintain |
|---|---|---|---|---|
| \`AuthProvider.tsx\` | Provides session/user context tree-wide | Fetch session on mount, expose via Context | Wrap in \`app/layout.tsx\` via \`providers/index.tsx\` | Update session fetch logic here |
| \`ThemeProvider.tsx\` | Light/dark mode context | Read from \`useLocalStorage\`, apply CSS class to \`<html>\` | Controls entire app theme | Add new themes/tokens here |
| \`QueryProvider.tsx\` | TanStack Query client context | Initialize \`QueryClient\` with defaults | Enables \`useQuery\` / \`useMutation\` everywhere | Tune stale time, retry logic here globally |
| \`index.tsx\` | Composes all providers in order | Nest: \`Auth > Theme > Query > children\` | Single import in \`app/layout.tsx\`: \`<Providers>\` | Add new providers without touching layout |

---

### \`src/types/\` — Type Contract Layer

| File | Purpose | How to Build | How to Use | How to Maintain |
|---|---|---|---|---|
| \`types/api.ts\` | **Auto-generated** from FastAPI OpenAPI spec | Run \`openapi-ts\` CLI against FastAPI \`/openapi.json\` | Import everywhere you call the API | Regenerate after any FastAPI schema change |
| \`types/user.ts\` | Frontend-specific user type extensions | Extend from \`api.ts\` + add UI state fields | Import in user feature + components | Sync with \`features/auth/types.ts\` |
| \`types/index.ts\` | Re-exports all global types | Barrel export: \`export * from "./user"\` etc. | \`import { User } from "@/types"\` | Update barrel when adding new type files |

---

### \`src/store/\` — Global Client State

| File | Purpose | How to Build | How to Use | How to Maintain |
|---|---|---|---|---|
| \`useUserStore.ts\` | Zustand store for user preferences/UI state | \`create<StoreType>((set) => ({ ... }))\` | \`const { preferences, setPreference } = useUserStore()\` | Add slices for new global state needs |

> **Rule:** \`store/\` is for **client-side UI state** only (modals open, filters selected, user preferences). **Server state** (data from API) lives in TanStack Query cache, not Zustand.

---

### Root Config Files

| File | Purpose | Why It Matters |
|---|---|---|
| \`middleware.ts\` | Auth guards, redirects, i18n routing | Runs at Edge before any component renders — protect routes here |
| \`next.config.ts\` | Next.js config, rewrites, image domains | Central build configuration |
| \`tsconfig.json\` | Path aliases (\`@/*\` → \`src/*\`) | Enables clean imports without \`../../../../\` hell |
| \`.env.local\` | Secrets and environment-specific config | Never committed to git — contains API URLs, keys |
| \`openapi-ts.config.ts\` | Auto-generates \`types/api.ts\` from FastAPI | Keeps frontend types in sync with backend automatically |

---

## 5. Architecture Diagrams

### 5.1 High-Level System Overview

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#3b82f6', 'primaryTextColor': '#e2e8f0', 'primaryBorderColor': '#60a5fa', 'lineColor': '#93c5fd', 'secondaryColor': '#1e3a5f', 'tertiaryColor': '#0f172a', 'edgeLabelBackground': '#1e293b', 'clusterBkg': '#0f1f35', 'clusterBorder': '#2563eb', 'titleColor': '#bfdbfe', 'nodeTextColor': '#e2e8f0', 'fontFamily': 'monospace'}}}%%
graph LR
    subgraph Browser["🌐 Browser — Next.js App Router"]
        A[App Router\\nRoute Resolution] --> B[Providers Layer\\nAuth · Theme · Query]
        B --> C[Layouts and Pages\\napp/ files]
        C --> D[Feature Components\\nfeatures/]
        D --> E[UI Primitives\\ncomponents/ui/]
    end

    subgraph Infra["⚙️ Infrastructure — lib/"]
        F[api/client.ts\\nBase HTTP Client] --> G[api/auth.ts\\napi/users.ts\\napi/products.ts]
        H[actions/\\nServer Actions]
        I[utils/\\ncn · format · validators]
    end

    subgraph State["🗄️ State Layers"]
        K[TanStack Query\\nServer State Cache]
        L[Zustand Store\\nClient UI State]
        M[React Context\\nProviders]
    end

    subgraph Backend["🐍 FastAPI"]
        N[REST Endpoints]
        O[openapi.json]
    end

    D -->|calls| G
    D -->|reads| K
    D -->|reads| L
    D -->|reads| M
    G -->|HTTP fetch| N
    O -->|openapi-ts generates| P[types/api.ts]
    H -->|Server Action| N
    K -->|caches responses| G
\`\`\`

---

### 5.2 Data Flow: Client → Server → FastAPI

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#10b981', 'primaryTextColor': '#d1fae5', 'primaryBorderColor': '#34d399', 'lineColor': '#6ee7b7', 'secondaryColor': '#064e3b', 'tertiaryColor': '#022c22', 'edgeLabelBackground': '#052e16', 'clusterBkg': '#052e16', 'clusterBorder': '#059669', 'titleColor': '#a7f3d0', 'nodeTextColor': '#d1fae5', 'fontFamily': 'monospace'}}}%%
graph LR
    A([User Interaction\\neg Submit Form]) --> B{Server Action\\nor Client Fetch?}

    B -->|Server Action| C[lib/actions/\\nauth-actions.ts\\nuse server]
    B -->|Client Fetch| D[features/auth/hooks/\\nuseLogin.ts\\nuseMutation]

    C -->|calls| E[lib/api/auth.ts\\nlogin function]
    D -->|calls| E

    E -->|uses| F[lib/api/client.ts\\nBase HTTP Client\\nheaders · baseURL · errors]

    F -->|POST /auth/login| G[FastAPI\\n/auth/login]

    G -->|200 OK + JWT| F
    F -->|typed User + token| E
    E -->|returns to| H[AuthProvider\\nsetSession]
    H -->|context update| I([All components\\nrerender with session])

    G -->|422 Validation Error| F
    F -->|throws AppError| J([Error Boundary\\nor Toast notification])
\`\`\`

---

### 5.3 Component Dependency Graph

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#8b5cf6', 'primaryTextColor': '#ede9fe', 'primaryBorderColor': '#a78bfa', 'lineColor': '#c4b5fd', 'secondaryColor': '#3b0764', 'tertiaryColor': '#1e0a3c', 'edgeLabelBackground': '#1e1b2e', 'clusterBkg': '#170d2e', 'clusterBorder': '#7c3aed', 'titleColor': '#ddd6fe', 'nodeTextColor': '#ede9fe', 'fontFamily': 'monospace'}}}%%
graph LR
    subgraph AppLayer["📄 app/ — Route Layer"]
        P1[page.tsx\\nDashboard]
        P2[page.tsx\\nUsers]
        P3[page.tsx\\nLogin]
    end

    subgraph FeatureLayer["🏘️ features/ — Domain Layer"]
        F1[dashboard/components/\\nDashboardMetrics]
        F2[users/components/\\nUserTable · UserCard]
        F3[auth/components/\\nLoginForm]
        F4[dashboard/hooks/\\nuseDashboardMetrics]
        F5[users/hooks/\\nuseUsers]
        F6[auth/hooks/\\nuseLogin]
    end

    subgraph UILayer["🧱 components/ — Primitive Layer"]
        U1[ui/Button]
        U2[ui/Card]
        U3[ui/Table]
        U4[ui/Modal]
        U5[common/Navbar]
        U6[common/Sidebar]
    end

    subgraph LibLayer["⚙️ lib/ — Infrastructure"]
        L1[api/auth.ts]
        L2[api/users.ts]
        L3[utils/cn.ts]
        L4[constants.ts]
    end

    P1 --> F1
    P2 --> F2
    P3 --> F3

    F1 --> F4
    F1 --> U2
    F2 --> F5
    F2 --> U3
    F2 --> U4
    F3 --> F6
    F3 --> U1

    F4 --> L2
    F5 --> L2
    F6 --> L1

    U1 --> L3
    U2 --> L3
    U3 --> L3
\`\`\`

---

### 5.4 Feature Module Internal Structure

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#f59e0b', 'primaryTextColor': '#fef3c7', 'primaryBorderColor': '#fbbf24', 'lineColor': '#fcd34d', 'secondaryColor': '#78350f', 'tertiaryColor': '#3d1a06', 'edgeLabelBackground': '#1c1000', 'clusterBkg': '#1c1203', 'clusterBorder': '#d97706', 'titleColor': '#fde68a', 'nodeTextColor': '#fef3c7', 'fontFamily': 'monospace'}}}%%
graph LR
    subgraph FeatureModule["features/users/ — Complete Vertical Slice"]

        subgraph Components["📦 components/"]
            C1[UserTable.tsx]
            C2[UserCard.tsx]
            C3[UserFilters.tsx]
            C4[UserEditModal.tsx]
        end

        subgraph Hooks["🪝 hooks/"]
            H1[useUsers.ts\\nfetch list]
            H2[useUser.ts\\nfetch single]
            H3[useUpdateUser.ts\\nmutation]
        end

        subgraph Actions["⚡ actions/"]
            A1[update-user-action.ts\\nServer Action]
            A2[delete-user-action.ts\\nServer Action]
        end

        T1[types.ts\\nUser · UserFilters\\nUpdateUserPayload]
    end

    C1 -->|uses| H1
    C2 -->|uses| H2
    C4 -->|uses| H3
    C3 -->|feeds filters into| C1
    H3 -->|or calls| A1
    H1 -->|typed by| T1
    H2 -->|typed by| T1
    A1 -->|typed by| T1
    C1 -->|renders rows of| C2
\`\`\`

---

### 5.5 State Management Flow

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#06b6d4', 'primaryTextColor': '#cffafe', 'primaryBorderColor': '#22d3ee', 'lineColor': '#67e8f9', 'secondaryColor': '#164e63', 'tertiaryColor': '#0a2535', 'edgeLabelBackground': '#082030', 'clusterBkg': '#061825', 'clusterBorder': '#0891b2', 'titleColor': '#a5f3fc', 'nodeTextColor': '#cffafe', 'fontFamily': 'monospace'}}}%%
graph LR
    subgraph ServerState["🌐 Server State — TanStack Query"]
        SQ1[useQuery\\nfetchUsers\\ncached + stale-while-revalidate]
        SQ2[useMutation\\nupdateUser\\nauto-invalidates cache]
        SQ3[QueryClient\\nconfigured in QueryProvider]
    end

    subgraph ClientState["🖥️ Client State — Zustand"]
        ZS1[useUserStore\\nselectedUserId\\nfilterState\\nuiPreferences]
        ZS2[useModalStore\\nopenModals map]
    end

    subgraph ContextState["🌳 Context — React Providers"]
        CP1[AuthProvider\\ncurrentUser · session token]
        CP2[ThemeProvider\\ntheme: light / dark]
    end

    subgraph Components["🧩 Component Consumers"]
        CC1[UserTable]
        CC2[UserFilters]
        CC3[Navbar]
        CC4[UserEditModal]
    end

    SQ1 -->|users data array| CC1
    SQ1 -->|total count| CC2
    ZS1 -->|active filter values| CC2
    ZS2 -->|isOpen boolean| CC4
    CP1 -->|currentUser| CC3
    CP2 -->|theme class| CC3

    CC2 -->|setFilter action| ZS1
    CC4 -->|onSubmit triggers| SQ2
    SQ2 -->|invalidateQueries| SQ1
\`\`\`

---

### 5.6 Routing & Layout Hierarchy

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#3b82f6', 'primaryTextColor': '#bfdbfe', 'primaryBorderColor': '#60a5fa', 'lineColor': '#93c5fd', 'secondaryColor': '#1e3a5f', 'tertiaryColor': '#0f172a', 'edgeLabelBackground': '#0f1f35', 'clusterBkg': '#0f1f35', 'clusterBorder': '#1d4ed8', 'titleColor': '#bfdbfe', 'nodeTextColor': '#dbeafe', 'fontFamily': 'monospace'}}}%%
graph LR
    ROOT["app/layout.tsx\\nRoot Layout\\nhtml + body + Providers"]

    ROOT --> HOME["app/page.tsx\\nHome Route /"]
    ROOT --> AUTH_GROUP["app/(auth)/\\nAuth Route Group\\nNo URL prefix"]
    ROOT --> DASH_GROUP["app/(dashboard)/\\nDashboard Route Group\\nNo URL prefix"]
    ROOT --> NOT_FOUND["app/not-found.tsx\\n404 Page"]

    AUTH_GROUP --> AUTH_LAYOUT["(auth)/layout.tsx\\nCentered card layout"]
    AUTH_LAYOUT --> LOGIN["(auth)/login/page.tsx\\nRoute: /login"]

    DASH_GROUP --> DASH_LAYOUT["(dashboard)/layout.tsx\\nSidebar + Topbar shell"]
    DASH_LAYOUT --> DASH_HOME["(dashboard)/page.tsx\\nRoute: /dashboard"]
    DASH_LAYOUT --> USERS["(dashboard)/users/page.tsx\\nRoute: /users"]
    USERS --> USER_DETAIL["(dashboard)/users/id/page.tsx\\nRoute: /users/123"]

    ROOT --> LOADING["app/loading.tsx\\nSuspense Skeleton"]
    ROOT --> ERROR["app/error.tsx\\nError Boundary"]
\`\`\`

---

### 5.7 API Layer Architecture

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#ef4444', 'primaryTextColor': '#fee2e2', 'primaryBorderColor': '#f87171', 'lineColor': '#fca5a5', 'secondaryColor': '#7f1d1d', 'tertiaryColor': '#3d0a0a', 'edgeLabelBackground': '#1c0a0a', 'clusterBkg': '#1c0808', 'clusterBorder': '#dc2626', 'titleColor': '#fecaca', 'nodeTextColor': '#fee2e2', 'fontFamily': 'monospace'}}}%%
graph LR
    subgraph APILayer["lib/api/ — API Communication Layer"]
        CLIENT["client.ts\\nBase HTTP Client\\nInjects Bearer token\\nSets NEXT_PUBLIC_API_URL\\nHandles 401 refresh\\nStandardizes AppError"]

        AUTH_API["auth.ts\\nlogin()\\nlogout()\\nrefreshToken()\\ngetSession()"]

        USERS_API["users.ts\\ngetUsers()\\ngetUser(id)\\ncreateUser()\\nupdateUser()\\ndeleteUser()"]

        PRODUCTS_API["products.ts\\ngetProducts()\\ncreateProduct()"]
    end

    subgraph TypeContracts["types/ — Auto-Generated Contracts"]
        OPENTS["types/api.ts\\nAUTO-GENERATED\\nfrom FastAPI OpenAPI spec"]
    end

    subgraph Consumers["🧩 Consumers"]
        HOOKS["features/hooks/\\nuseQuery · useMutation wrappers"]
        ACTIONS["lib/actions/\\nuse server Server Actions"]
    end

    subgraph FastAPI["🐍 FastAPI Backend"]
        EP1[POST /auth/login]
        EP2[POST /auth/logout]
        EP3[GET POST /users]
        EP4[GET PATCH DELETE /users/id]
        OPENAPI[GET /openapi.json]
    end

    AUTH_API -->|extends| CLIENT
    USERS_API -->|extends| CLIENT
    PRODUCTS_API -->|extends| CLIENT

    CLIENT -->|HTTP| FastAPI

    HOOKS -->|imports| AUTH_API
    HOOKS -->|imports| USERS_API
    ACTIONS -->|imports| AUTH_API
    ACTIONS -->|imports| USERS_API

    AUTH_API -.->|typed by| OPENTS
    USERS_API -.->|typed by| OPENTS

    OPENAPI -->|openapi-ts CLI| OPENTS
\`\`\`

---

### 5.8 Reusability Decision Tree

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#22c55e', 'primaryTextColor': '#dcfce7', 'primaryBorderColor': '#4ade80', 'lineColor': '#86efac', 'secondaryColor': '#14532d', 'tertiaryColor': '#052e16', 'edgeLabelBackground': '#021a0d', 'clusterBkg': '#021a0d', 'clusterBorder': '#16a34a', 'titleColor': '#bbf7d0', 'nodeTextColor': '#dcfce7', 'fontFamily': 'monospace'}}}%%
graph LR
    START([New Code to Write]) --> Q1{Is it UI\\nrelated?}

    Q1 -->|Yes| Q2{Does it contain\\nbusiness logic?}
    Q1 -->|No| Q5{Is it an\\nHTTP call?}

    Q2 -->|No — pure visual| Q3{Used in\\n2 or more features?}
    Q2 -->|Yes — has data logic| FEAT_COMP["features/name/components/\\nFeature-specific component"]

    Q3 -->|Yes| UI_PRIM["components/ui/\\nPrimitive component"]
    Q3 -->|Shared layout piece| COMMON["components/common/\\nNavbar · Sidebar"]
    Q3 -->|No — one feature only| FEAT_COMP

    Q5 -->|Yes| Q6{Shared across\\nfeatures?}
    Q6 -->|No| FEAT_HOOK["features/name/hooks/\\nFeature-specific hook"]
    Q6 -->|Yes| LIB_API["lib/api/resource.ts\\nShared API function"]

    Q5 -->|No| Q7{Pure utility\\nfunction?}
    Q7 -->|Yes| LIB_UTILS["lib/utils/\\nformat · validators · cn"]

    Q7 -->|No| Q8{What kind of\\nglobal state?}
    Q8 -->|Server data cache| QUERY["TanStack Query\\nin feature hook"]
    Q8 -->|Client UI state| STORE["store/\\nZustand store"]
    Q8 -->|Cross-cutting context| PROVIDER["providers/\\nNew Provider"]
\`\`\`

---

### 5.9 Maintainability: Change Impact Isolation

\`\`\`mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#6366f1', 'primaryTextColor': '#e0e7ff', 'primaryBorderColor': '#818cf8', 'lineColor': '#a5b4fc', 'secondaryColor': '#1e1b4b', 'tertiaryColor': '#0f0d2a', 'edgeLabelBackground': '#0d0b25', 'clusterBkg': '#0d0b25', 'clusterBorder': '#4f46e5', 'titleColor': '#c7d2fe', 'nodeTextColor': '#e0e7ff', 'fontFamily': 'monospace'}}}%%
graph LR
    subgraph S1["Scenario A — Redesign Button"]
        SA1["Edit\\ncomponents/ui/button.tsx"] -->|propagates automatically| SA2["All features\\nusing Button update instantly"]
        SA1 -->|zero touch needed in| SA3["lib/ · store/ · types/\\ncompletely unchanged"]
    end

    subgraph S2["Scenario B — FastAPI Schema Change"]
        SB1["Regenerate types/api.ts\\nvia openapi-ts CLI"] -->|TS errors pinpoint| SB2["lib/api/ files\\nfix call signatures only"]
        SB2 -->|no further changes| SB3["Components and hooks\\ncompletely unchanged"]
    end

    subgraph S3["Scenario C — Add New Feature: Products"]
        SC1["Create\\nfeatures/products/"] -->|self-contained slice| SC2["components/\\nhooks/\\nactions/\\ntypes.ts"]
        SC2 -->|wire one route| SC3["app/dashboard/products/\\npage.tsx only"]
        SC3 -->|zero side effects on| SC4["auth/ · users/\\ndashboard/ untouched"]
    end

    subgraph S4["Scenario D — Replace Auth Strategy"]
        SD1["Edit lib/api/auth.ts\\nand AuthProvider.tsx"] -->|same interface kept| SD2["features/auth/hooks/\\nstill call same functions"]
        SD2 -->|zero UI changes| SD3["LoginForm component\\ncompletely unchanged"]
    end
\`\`\`

---

## 6. Design Patterns Used

| Pattern | Where Applied | Why |
|---|---|---|
| **Container / Presenter** | \`features/*/hooks/\` fetch data; \`features/*/components/\` render it | Separates data concerns from rendering concerns |
| **Barrel Exports** | \`types/index.ts\`, \`providers/index.tsx\` | Clean imports, hide internal structure |
| **Adapter Pattern** | \`lib/api/client.ts\` wrapping native \`fetch\` | Swap HTTP implementation without changing callers |
| **Vertical Slice Architecture** | \`features/\` directory | Feature cohesion over technical layer cohesion |
| **Factory Pattern** | \`providers/index.tsx\` composing all providers | Single point of provider assembly |
| **Single Source of Truth** | \`lib/constants.ts\` for routes/keys, \`types/api.ts\` for types | Eliminate magic strings and type drift |
| **Command Pattern** | \`lib/actions/\` Server Actions | Encapsulate mutations as discrete, reusable commands |
| **Repository Pattern** | \`lib/api/*.ts\` files | Abstract data access behind consistent interface |

---

## 7. Developer Guidelines

### DO

- Import UI primitives from \`@/components/ui/\` everywhere
- Put all \`fetch\` calls inside \`lib/api/*.ts\` — never inline in components
- Co-locate feature-specific code inside \`features/<n>/\`
- Use \`@/lib/utils/cn.ts\` for all Tailwind class merging
- Auto-generate \`types/api.ts\` after every FastAPI schema change
- Use \`@/lib/constants.ts\` for all route strings — never hardcode \`/dashboard\`
- Keep \`app/\` files thin — they are glue, not logic

### DON'T

- Import from one \`feature/\` inside another \`feature/\` directly
- Put \`fetch()\` calls inside React components or page files
- Add business logic to \`components/ui/\` primitives
- Store server data (API responses) in Zustand — use TanStack Query
- Hardcode API base URLs in component files — use \`lib/constants.ts\`
- Create new top-level folders without discussing architecture impact

### The Golden Rule

> **If you're not sure where code belongs, ask:** *"If I need to delete this feature tomorrow, can I delete a single folder?"*
>
> If the answer is **yes** → your code is correctly placed.
> If the answer is **no** → your logic is coupled where it shouldn't be.

---

*Document maintained by the Frontend Architecture team. Regenerate diagrams and update tables whenever a new top-level directory is introduced.*
`;export{e as default};