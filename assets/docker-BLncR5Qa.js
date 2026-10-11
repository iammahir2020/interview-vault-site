var e={domain:`devops`,slug:`docker`,title:`Docker`,order:2,summary:`Containers, images and building them well.`,questions:[{id:`docker-container-vs-vm`,domain:`devops`,topic:`docker`,title:`What is a container, and how is it different from a VM?`,difficulty:`easy`,tags:[`docker`,`containers`],explain:`A container packages an app with its dependencies, runtime and config so it behaves the same everywhere. A VM virtualises a whole operating system with its own kernel; a container **shares the host kernel** and isolates only the app layer, so it starts in seconds and is far lighter. An **image** is the packaged template; a **container** is a running instance of it.`,hook:`🏢 VMs are separate houses with their own foundations; containers are flats sharing one building's foundations.`,html:{explain:`<p>A container packages an app with its dependencies, runtime and config so it behaves the same everywhere. A VM virtualises a whole operating system with its own kernel; a container <strong>shares the host kernel</strong> and isolates only the app layer, so it starts in seconds and is far lighter. An <strong>image</strong> is the packaged template; a <strong>container</strong> is a running instance of it.</p>`,hook:`<p>🏢 VMs are separate houses with their own foundations; containers are flats sharing one building's foundations.</p>`}},{id:`docker-multi-stage`,domain:`devops`,topic:`docker`,title:`What is a multi-stage build, and why bother?`,difficulty:`medium`,tags:[`docker`,`images`,`security`],explain:"A Dockerfile with several `FROM` stages: one stage installs dependencies and builds with the full toolchain, and a final stage copies only the built output into a minimal runtime image. The production image is much smaller and doesn't ship dev dependencies or build tools, which helps deploy speed and attack surface.",hook:`🏗️ Build in the workshop, ship only the finished furniture.`,example:`\`\`\`dockerfile
FROM node:24 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-slim
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
CMD ["node", "dist/server.js"]
\`\`\``,html:{explain:`<p>A Dockerfile with several <code>FROM</code> stages: one stage installs dependencies and builds with the full toolchain, and a final stage copies only the built output into a minimal runtime image. The production image is much smaller and doesn't ship dev dependencies or build tools, which helps deploy speed and attack surface.</p>`,hook:`<p>🏗️ Build in the workshop, ship only the finished furniture.</p>`,example:`<div class="codeblock"><pre tabindex="0"><code class="language-dockerfile hljs"><span class="hljs-keyword">FROM</span> node:<span class="hljs-number">24</span> AS build
<span class="hljs-keyword">WORKDIR</span><span class="bash"> /app</span>
<span class="hljs-keyword">COPY</span><span class="bash"> package*.json ./</span>
<span class="hljs-keyword">RUN</span><span class="bash"> npm ci</span>
<span class="hljs-keyword">COPY</span><span class="bash"> . .</span>
<span class="hljs-keyword">RUN</span><span class="bash"> npm run build</span>

<span class="hljs-keyword">FROM</span> node:<span class="hljs-number">24</span>-slim
<span class="hljs-keyword">WORKDIR</span><span class="bash"> /app</span>
<span class="hljs-keyword">COPY</span><span class="bash"> --from=build /app/dist ./dist</span>
<span class="hljs-keyword">COPY</span><span class="bash"> --from=build /app/node_modules ./node_modules</span>
<span class="hljs-keyword">CMD</span><span class="bash"> [<span class="hljs-string">"node"</span>, <span class="hljs-string">"dist/server.js"</span>]</span>
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>`}},{id:`docker-layer-caching`,domain:`devops`,topic:`docker`,title:`How does Docker layer caching work?`,difficulty:`medium`,tags:[`docker`,`caching`,`ci`],explain:"Each instruction creates a cached layer, and a change invalidates that layer and everything after it. Order instructions from least to most frequently changed: copy `package*.json` and install **before** copying the source, so a code change doesn't re-run `npm install`.",hook:`🧁 Layers are a cake: change the bottom tier and you rebake everything above it.`,html:{explain:`<p>Each instruction creates a cached layer, and a change invalidates that layer and everything after it. Order instructions from least to most frequently changed: copy <code>package*.json</code> and install <strong>before</strong> copying the source, so a code change doesn't re-run <code>npm install</code>.</p>`,hook:`<p>🧁 Layers are a cake: change the bottom tier and you rebake everything above it.</p>`}}]};export{e as default};