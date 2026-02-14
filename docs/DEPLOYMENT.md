# Deployment & Monitoring

## Deployment Targets

### 1. Netlify (Recommended for Astro)

1. Install Astro adapter: `npm install @astrojs/netlify`
2. Update `astro.config.mjs`:
   ```javascript
   import netlify from '@astrojs/netlify/functions';
   export default defineConfig({
     output: 'server',
     adapter: netlify(),
   });
   ```
3. Connect repository to Netlify dashboard.

### 2. Vercel (Zero-config)

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import project in Vercel dashboard.
3. Vercel auto-detects Astro and configures build settings.

### 3. Docker / Kubernetes

**Build & Push to Registry:**
```bash
docker build -t myregistry/static-landing:1.0.0 .
docker push myregistry/static-landing:1.0.0
```

**Deploy to Kubernetes:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: static-landing
spec:
  replicas: 3
  selector:
    matchLabels:
      app: static-landing
  template:
    metadata:
      labels:
        app: static-landing
    spec:
      containers:
      - name: static-landing
        image: myregistry/static-landing:1.0.0
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 30
```

**Run with Docker Compose:**  
See `wiring/docker-compose.yml` to integrate with the full Seed & Source stack.

1. Build the site: `npm run build`
2. Sync to S3: `aws s3 sync dist/ s3://my-landing-bucket/ --delete`
3. Create CloudFront distribution pointing to S3 bucket.

---

## Monitoring & Logging

### Nginx Access Logs
```bash
docker logs <container-id>
```

### Kubernetes Logs
```bash
kubectl logs deployment/static-landing
kubectl logs -f deployment/static-landing # Follow logs
```

### Error Tracking (Sentry)
Initialize in layout:
```astro
---
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: import.meta.env.PUBLIC_SENTRY_DSN,
  environment: import.meta.env.MODE,
});
---
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm install` fails | Clear cache: `npm cache clean --force` |
| Build takes too long | Check `src/` for large assets; optimize images |
| Nginx throws 404 for routes | Verify `try_files` in `nginx.conf` (included) |
| Docker build fails | Ensure `package-lock.json` or `pnpm-lock.yaml` exists |
| Health check fails | Check port 3000 is exposed; verify `curl http://localhost:3000/` works |
| Assets not loading in Docker | Verify `COPY --from=builder /app/dist .` in Dockerfile |
