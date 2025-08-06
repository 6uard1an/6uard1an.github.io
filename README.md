````md
# Virtual Windows 10 in the Browser

Simulates a Windows 10 desktop fully in your browser with games, apps, sound effects, and easter eggs.

---

## Features

- **Virtual Windows 10** desktop simulation in-browser  
- Play classic **Friv games** from the "Friv Games" folder on the desktop  
- Access a curated selection of **HTML games** via the Games🎮 app  
- Discover hidden **easter eggs** in the Documents folder  
- Click funny **meme sound effect buttons** on the desktop  

---

## Running Locally

Start a local HTTPS server on your network by running:

```powershell
.\start.ps1
````

---

## Deployment on GitHub Pages

If hosting on GitHub Pages under repo `Windows-10`, add this to `next.config.js`:

```js
module.exports = {
  basePath: '/Windows-10',
  assetPrefix: '/Windows-10/',
};
```

Then build and export your site. The URL will be:
`https://6uard1an.github.io/Windows-10/`

---

## Acknowledgements

* Huge thanks to [@dustinbrett](https://github.com/dustinbrett) for his amazing [Daedalos](https://github.com/dustinbrett/daedalos) project that inspired this.
* Thanks to [Flashpoint](https://bluemaxima.org/flashpoint/) for their vast archive of web games.
* Thanks to [Ruffle](https://ruffle.rs/) for enabling Flash content to run in modern browsers.

---

Enjoy exploring your virtual desktop!
