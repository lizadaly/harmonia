const { defineConfig } = require('@playwright/test')

// Serves dist/, matching the production layout. Expects `npm run build` to have been run.
module.exports = defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: 'http://127.0.0.1:8792',
    trace: 'retain-on-failure'
  },
  webServer: {
    // http.server's default listen backlog of 5 drops connections under parallel workers
    command: 'python3 -c "import http.server as h; h.ThreadingHTTPServer.request_queue_size = 128; ' +
      'h.test(h.SimpleHTTPRequestHandler, h.ThreadingHTTPServer, port=8792, bind=\'127.0.0.1\')"',
    cwd: 'dist',
    url: 'http://127.0.0.1:8792/',
    reuseExistingServer: false
  }
})
