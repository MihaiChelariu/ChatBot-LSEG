# Vite + React chatbot with JSON Server

## Setup Instructions

1. Clone the repository:
   Open a terminal or a comand prompt, navigate to the directory where you want to clone the repository then use the following command:<br>
   git clone https://github.com/MihaiChelariu/ChatBot-LSEG.git

3. Navigate to the project directory:<br>
   cd ./chatBot_LSEG/

4. Install node dependencies:<br>
   npm install

5. Start the JSON server (ensure it runs on a different port than the Vite server):<br>
   npx json-server --watch data/Chatbot-stockData.json --port 8000

6. Run the development server:<br>
   npm run dev

7. Access the Application:<br>
   Open your web browser and navigate to 'http://localhost:3001'.

# Additional Notes

   You may need to have Node.js and npm installed on your computer to run this app.
   
   JSON Server is used to simulate a REST API and fetch data for the app. Make sure it's running alongside the development server.
   
   The development server automatically reloads the application in the browser when you save changes to the source files.
