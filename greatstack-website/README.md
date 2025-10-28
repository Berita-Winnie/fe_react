🏠 Real Estate Portfolio Website

A modern and responsive real estate portfolio website built with React, Tailwind CSS, and Framer Motion. The website showcases real estate projects, customer testimonials, and includes a working contact form that allows users to send messages directly to the portfolio owner.

✨ Features

🏗️ Projects Showcase – Displays completed and ongoing real estate projects with smooth sliding animations.

💬 Testimonials Section – Real client stories and feedback.

🎞️ Framer Motion Animations – Smooth transitions and interactive UI animations throughout the site.

📧 Contact Form Integration – Users can send emails directly using Web3Forms
API.

📱 Fully Responsive Design – Optimized for all devices (desktop, tablet, and mobile).

⚡ Dynamic UI – Built using React Hooks (useState, useEffect) for interactivity and responsiveness.

🛠️ Tech Stack

Frontend: React, Tailwind CSS, Framer Motion

Form Handling: Web3Forms API

State Management: React Hooks (useState, useEffect)

Notifications: React Toastify

🚀 Getting Started
Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

Installation

# Clone the repository

git clone https://github.com/your-username/real-estate-portfolio.git

# Navigate into the project directory

cd real-estate-portfolio

# Install dependencies

npm install

# Start the development server

npm run dev

The app will be available at http://localhost:5173
(if using Vite).

⚙️ Environment Variables

You’ll need an access key from Web3Forms
to enable the contact form.

Create a .env file in the project root and add:

VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here

📂 Folder Structure
src/
┣ assets/ # Images and icons
┣ components/ # Reusable React components
┣ App.jsx # Main app structure
┣ index.css # Global styles
┗ main.jsx # Entry point

🎨 UI Highlights

Minimal and elegant design with Tailwind CSS

Motion-based transitions for sections (header, projects, testimonials)

Smooth scroll and subtle hover effects for better UX

🧠 Learning Takeaways

Implementing Framer Motion animations

Handling forms and API requests with fetch()

Managing component state with React Hooks

Structuring a modern, responsive React project

📝 License

This project is licensed under the MIT License — feel free to use, modify, or improve it.
