# Question Paper Generator

A Node.js application to generate question papers based on user input. Users can specify the total marks and difficulty distribution to generate a customized question paper.

## Getting Started

Follow these steps to set up and run the application:

### 1. Clone the Repository


git clone https://github.com/suzelkhan1177/Reelo-Coding-Assignment
cd question-paper-generator
### 2. Install Dependencies
bash
Copy code
npm install
### 3. Start the Server
bash
Copy code
npm start
The server will start on port 3000 by default.

### 4. Access the Application
Open your web browser and go to http://localhost:3000/generate-paper to view the form for generating question papers.
<div>
  <img src="https://github.com/user-attachments/assets/af59c91b-794c-49c6-bab9-01dde246d826" width="370" height="350px"> 
</div>


 ### 5. API Endpoints
POST http://localhost:3000/api/generate-paper
Description: Generates a question paper based on the provided total marks and difficulty distribution.

**Request Body:**
{
  "totalMarks": 100,
  "distribution": {
    "Easy": 20,
    "Medium": 50,
    "Hard": 30
  }
}

**Response:**

- **Success (200 OK):** Returns the generated question paper as JSON.
- **Error (400 Bad Request):** Returns an error message if required fields are missing.
- **Error (500 Internal Server Error):** Returns an error message for server issues.


## File Structure

- **`index.js`** - Main application file.
- **`controllers/controller.js`** - Contains the logic for generating the question paper.
- **`routers/router.js`** - Defines API routes and handlers.
- **`views/form.ejs`** - EJS template for the input form.
- **`views/paper.ejs`** - EJS template for displaying the generated question paper.
- **`data/questions.js`** - Contains sample questions.
