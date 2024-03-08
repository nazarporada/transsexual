const express = require('express');
const multer = require('multer');
const path = require('path');

// Initialize Express app
const app = express();

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Generate unique filenames
  }
});

// Initialize Multer upload middleware
const upload = multer({ storage: storage });

// Define route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  // If file upload is successful, send success response
  res.json({ message: 'File uploaded successfully', filename: req.file.filename });
});

// Set up server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});