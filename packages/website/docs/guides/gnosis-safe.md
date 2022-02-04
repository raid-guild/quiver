# Add Gnosis Safe Integration

Quiver already integrates with Gnosis Safe Apps using safe-apps-web3modal wrapper around web3modal. All you need to do is add a manifest.json file to the root of your project. The manifest.json file should look like below, change the values as needed.

```json
{
  "short_name": "Safe App",
  "name": "Gnosis Safe App Starter",
  "description": "Describe your Safe App here",
  "iconPath": "logo.svg",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```
