# Docker Configuration

The `Dockerfile` uses a multi-stage build pattern to minimize image size:
- **Stage 1:** Node.js 18 Alpine → installs dependencies and builds static site
- **Stage 2:** Nginx 1.25 Alpine → serves the built `dist/` folder on port 3000

## Build the Container

```bash
docker build -t static-landing:latest .
```

## Run the Container

```bash
docker run -p 3000:3000 static-landing:latest
```

Access the site at `http://localhost:3000`

## Run with Custom Configuration

```bash
# Mount custom nginx.conf
docker run -p 3000:3000 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  static-landing:latest
```

## Health Check

Kubernetes and Docker Compose will automatically monitor the container health via:
```bash
curl -f http://localhost:3000/ || exit 1
```

The image includes a built-in HEALTHCHECK that runs every 30 seconds.
