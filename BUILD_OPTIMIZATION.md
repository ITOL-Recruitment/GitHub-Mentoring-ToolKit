1. Delete and regenerate `package-lock.json`:
   ```bash
   rm package-lock.json
   npm install
   git add package-lock.json
   git commit -m "Regenerate package-lock.json"
   git push
   ```

2. Force redeploy on Vercel with Node 20 explicitly set

3. Monitor the build logs at: https://vercel.com/daysiders-projects/git-hub-mentoring-tool-kit/deployments
