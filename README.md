# ThreeJS, React3Fiber Tech Demo

My tech demo explores 3D modeling and animation using Three.js and React Three Fiber (R3F) within a React application.

## Overview of ThreeJS and React3Fiber

Three.js is a popular JavaScript library used for creating and displaying 3D computer graphics in web browsers.
React Three Fiber (R3F) is a React renderer for Three.js, designed to seamlessly integrate Three.js into React applications.

## How to run the demo code

1. Install Node.js / npm (https://nodejs.org/en).
2. Clone this repository.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install dependencies
5. Run `npm run dev` to start development server
6. Go to the corresponding localhost

## Toolchain

- Node.js / npm
- Vite
- Any IDE

## Tech Stack

- Three JS
- React Three Fibre
- Tailwind CSS
- Framer motion
  All of these technologies were used during development of my portfolio website, however the focus and explanation of this demo will be on the creation and manipulation of 3D models using 3js and r3f.

## Concepts covered

In this demo I will cover a few foundational concepts of 3JS and React3Fiber and how to use them to import, create and manipulate a 3D model. These concepts include:

1. Creating 3D Scenes: Initialization of a 3D scene using Three.js and R3F.
2. Importing 3D Models: Loading and displaying 3D models within the scene.
3. Lighting and Shadows: Adding lighting sources to the scene for realistic rendering.
4. Animation: Implementing animations for dynamic scene elements.
5. Interactivity: Adding user interaction to manipulate objects within the scene.

### Creating 3D Scenes: Initialization of a 3D scene using Three.js and R3F.

- Create two functional components one for the object itself and one for the object canvas
- In the object component create <mesh> where twe will use the imported model and can manipulate its size, position, lighting etc
- In the canvas component create <Canvas> where we can reference the object component and define orbit controls and camera

### Importing 3D Models: Loading and displaying 3D models within the scene.

- Download model from online in .gltf format
- Use useGLTF hook imported from "@react-three/drei" to save the imported model as a variable
- Create a primitive object in the mesh in the object functional component where we can reference the imported model and manipulate it
- Reference this object functional component on the canvas component to be displayed

### Lighting and Shadows: Adding lighting sources to the scene for realistic rendering.

- Inside the object functional component mesh we can define a variety of lights offered by threeJS which include ambiet lights, directional lights, point lights and spotlights
- These lights can be given an intensity, position, angle, shadows etc to manipulate how they interact with our model

### Animation: Implementing animations for dynamic scene elements.

- We can animate various property of the object such as position, rotation, scale, opacity and so forth which can be edited in the object component
- In the demo I go over how we can add autoRotate prop in the orbitControls in the canvas functional component to make an autorotation animation.

### Interactivity: Adding user interaction to manipulate objects within the scene.

- We can enable and disable user interactions such as dragging, hovering, tapping etc to trigger actions or animations
- In demo I go over adding props such as enableZoom, enableMan, min and max polar angle etc in the orbitControls to handle user interactions with the object being displayed on the browser

# References

- JavaScript Mastery 3D portfolio: https://www.youtube.com/watch?v=0fYi8SGA20k&t=6117s
- Car model, Floppy on SketchFab: https://sketchfab.com/3d-models/lancia-fulvia-rallye-5f02ef9e0daf481aba8c8b51216c0a6b
