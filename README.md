MyPerro - 3D Animated Web Experience I built this interactive website using React and integrated custom 3D animations to bring the user experience to life.

Check out the live site: myperro-clone-swart.vercel.app

What I used:

React: My core framework for building the UI and managing the component structure.

Three.js: This did all the heavy lifting for rendering the 3D animations and creating an immersive, interactive environment.

CSS: Kept it clean with standard CSS (index.css) for custom, responsive styling and layout control.

Vite: Used as the build tool for a blazing-fast development environment.

Key Sections I Developed:

The 3D Hero/Home Section: The focal point of the app, utilizing Three.js to render animations (like the 3D elements related to dog.webp) right in the browser.

The Band Section: A custom component (band.jsx) designed to smoothly present content and transition alongside the 3D canvas.

Note: For better understanding and maintainability, I named all the components, files, and classes with well-defined, meaningful names.

How it's organized:

src/components: Where the modular UI logic lives (e.g., home.jsx, header.jsx, footer.jsx, and band.jsx).

src/assets/img: Houses all the local media assets, including dog.webp, background.webp, and video.webp.

App.jsx: The "brain" of the app that structures the layout and mounts the Three.js canvas alongside the React components.

index.css: Where all the global styles and custom design rules are scoped.

Want to run it locally? Clone it: git clone https://github.com/utkarsh01-byte/myperro.git (Update this link if your repo name is different!)

Installation: npm install

Start the dev server: npm run dev
