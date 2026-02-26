# ---- Base ----
FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.23.0 --activate
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
# Copy workspace root files needed by pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/homepage/package.json ./apps/homepage/package.json
RUN pnpm install --frozen-lockfile

# ---- Build ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app ./
COPY apps/homepage ./apps/homepage
RUN pnpm --filter homepage build

# ---- Runner ----
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=builder /app/apps/homepage/.next/standalone ./
# Copy static assets
COPY --from=builder /app/apps/homepage/.next/static ./apps/homepage/.next/static
# Copy public assets
COPY --from=builder /app/apps/homepage/public ./apps/homepage/public
# Copy Application Insights preload script
COPY apps/homepage/appinsights.cjs ./appinsights.cjs

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_OPTIONS="--require=./appinsights.cjs"

CMD ["node", "apps/homepage/server.js"]
