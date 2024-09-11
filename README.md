# Minimal-Image-Gallery

## Overview

Welcome to **Minimal-Image-Gallery**, a React application designed to showcase advanced performance optimization techniques. This project focuses on demonstrating key concepts such as **lazy loading**, **code splitting**, and **manual chunking** to ensure a smooth and efficient user experience.

## Project Description

The Minimal-Image-Gallery uses **React Router** to navigate between multiple image categories. Each category is loaded dynamically to enhance performance and responsiveness. The application is built with a focus on performance optimization through several advanced techniques:

- **Lazy Loading**: Components are loaded only when they are needed, which helps reduce the initial bundle size and speeds up the initial page load.
- **Code Splitting**: The application code is split into smaller chunks that are loaded on demand, rather than all at once. This approach minimizes the amount of code that needs to be loaded initially.
- **Manual Chunking**: Custom chunking strategies are employed to further optimize how different parts of the application are bundled and loaded, ensuring that large libraries or modules are handled efficiently.

Each section of the gallery contains 4 images, and these sections are implemented as separate components. This setup allows us to apply and test the aforementioned optimization techniques in a practical scenario.

## Goals

This project aims to:

- **Demonstrate Understanding**: Showcase my grasp of performance optimization concepts by applying them in a real-world React application.
- **Study and Practice**: Provide a practical implementation of lazy loading, code splitting, and manual chunking.
- **Share Knowledge**: Share the implementation and insights with the community, contributing to the collective understanding of these important techniques.

## Features

- **Dynamic Loading**: Components and images are loaded dynamically to enhance performance.
- **Performance Profiling**: Utilizes React Profiler to monitor and optimize performance.
- **Responsive Design**: Ensures a seamless experience across different devices and screen sizes.

## Getting Started

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/yourusername/Minimal-Image-Gallery.git
cd Minimal-Image-Gallery
npm install
