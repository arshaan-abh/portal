FROM node:21.2.0 as build
WORKDIR /app
COPY package.json  ./
RUN npm install -g pnpm
RUN pnpm i
COPY . .
RUN pnpm run build

FROM node:21.2.0-alpine
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=build /app/next.config.js ./
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next ./.next
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm","run", "start"]

