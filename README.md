🖼️ AI Image Enhancer
A modern, responsive React web application that uses a powerful AI API to enhance, upscale, and improve the quality of your images instantly. Features a sleek interface with smooth animations powered by Framer Motion.

✨ Features
AI-Powered Enhancement: Leverages the AOS API for superior image upscaling and quality improvement.

Intuitive UI: Clean, modern interface built with Tailwind CSS for a seamless user experience.

Real-Time Previews: Side-by-side comparison of the original and enhanced images.

Smooth Animations: Elegant scrolling and UI animations implemented with Framer Motion.

Responsive Design: Works flawlessly on desktop, tablet, and mobile devices.

🚀 Live Demo
Check out the live application: [Your Live Demo Link Here]

🛠️ Tech Stack
Frontend Framework: React

Styling: Tailwind CSS

Animations: Framer Motion

HTTP Client: Axios

Image Processing API: AOS Technologies

📦 Installation & Local Setup
Follow these steps to set up the project locally on your machine.

Prerequisites
Node.js (v16 or higher)

npm 

Getting Started
Clone the repository

bash
git clone https://github.com/Tanmayachare/Image_Enhancer.git
cd Image_Enhancer
Install dependencies

bash
npm install

Environment Configuration

Create a .env file in the root directory.

Add your AOS API key:

text
REACT_APP_API_KEY=your_api_key_here
REACT_APP_BASE_URL=https://techhk.aoscdn.com

Start the development server

bash
npm run dev

Open your browser

The app will open on http://localhost:5173.

🏗️ Project Structure
text
src/
├── components/
│   ├── Download.jsx         # Download button component
|   ├── Enhancer.jsx         # Its like App.jsx for Enhancer
│   ├── Home.jsx             # Main parent component
│   ├── ImagePreview.jsx     # Side-by-side image comparison
│   ├── ImageUpload.jsx      # File upload handler
│   └── Loading.jsx          # Spinner animation
├── utils/
│   └── enhanceimageAPI.jsx  # All API interaction logic
└── App.jsx                  # Main app component

📖 How to Use
Upload: Click on the upload area to select an image file from your device.

Wait for Processing: The app will display a loading animation while the AI processes your image. This typically takes a few moments.

Compare: View the original and enhanced images side-by-side.

Download: Click the "Download" button to save the high-quality enhanced image to your device.

🔮 Future Enhancements
User authentication to save processing history.

Client-side image adjustments (e.g., brightness, contrast sliders).

Batch image processing.

Option to choose different enhancement styles.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request


🙋‍♂️ Author
Tanmay Achare

