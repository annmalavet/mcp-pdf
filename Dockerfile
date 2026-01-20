FROM node:20-slim

# App Runner expects the service to listen on $PORT
ENV NODE_ENV=production
WORKDIR /app

# Install the CLI at container build time
RUN npm i -g @mcp-z/mcp-pdf@latest

# Run it on the port App Runner provides
CMD ["sh", "-lc", "mcp-pdf --port=${PORT:-9010}"]
