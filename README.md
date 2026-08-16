# 🤖 Mini Gemini AI

A full-stack AI-powered chatbot application that integrates **Google Gemini AI** with a modern **React frontend** and a **FastAPI backend**. The application allows users to interact with Gemini through a clean and responsive chat interface and receive intelligent AI-generated responses in real time.

---

## 🌟 Features

* 🤖 **AI-Powered Chat** – Interact with Google's Gemini AI model.
* 💬 **Real-Time Conversations** – Send prompts and receive AI-generated responses.
* ⚡ **FastAPI Backend** – High-performance Python backend for handling API requests.
* ⚛️ **React Frontend** – Responsive and interactive user interface.
* 🔐 **API Key Security** – Gemini API key is stored using environment variables.
* 🧠 **Natural Language Understanding** – Ask questions, generate content, explain concepts, and more.
* 📱 **Responsive UI** – Works across desktop and mobile screen sizes.
* 🛡️ **Error Handling** – Handles API and server-side errors gracefully.

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Python
* FastAPI
* Uvicorn

### AI

* Google Gemini API
* Google Gen AI SDK

### Development Tools

* Git & GitHub
* Visual Studio Code
* npm
* Python Virtual Environment

---

## ⚙️ Prerequisites

Before running the project, make sure the following are installed:

* **Python 3.9+**
* **Node.js 18+**
* **npm**
* **Git**
* A **Google Gemini API Key**

---


# 📡 API Example

The backend can expose an endpoint for generating Gemini responses.

### Request

```http
POST /chat
Content-Type: application/json
```

Example:

```json
{
  "message": "Explain machine learning in simple terms."
}
```

### Response

```json
{
  "response": "Machine learning is a branch of artificial intelligence..."
}
```

---

# 🖥️ Application Usage

1. Start the FastAPI backend.
2. Start the React frontend.
3. Open the application in your browser.
4. Enter a question or prompt.
5. Submit the prompt.
6. The frontend sends the request to FastAPI.
7. FastAPI communicates with Gemini.
8. Gemini generates the response.
9. The response is displayed in the chat interface.

---

# 🧪 Example Prompts

You can use prompts such as:

```text
Explain artificial intelligence in simple words.
```

```text
Write a Python program to check whether a number is prime.
```

```text
Explain the difference between SQL and NoSQL.
```

```text
Give me 5 project ideas for computer engineering students.
```

```text
What is the difference between machine learning and deep learning?
```

---

# 🔒 Security

The project follows basic API-key security practices.

* API keys are stored in `.env`.
* `.env` should not be committed to GitHub.
* API requests are processed through the backend.
* Sensitive credentials should never be placed directly in frontend code.

---

# 🐛 Troubleshooting

### Backend does not start

Make sure the virtual environment is activated and dependencies are installed:

```bash
pip install -r requirements.txt
```

Then run:

```bash
uvicorn main:app --reload
```

### Gemini API error

Check that:

```text
GEMINI_API_KEY
```

is correctly configured in the `.env` file.

Also verify that the selected Gemini model is available for your API account.

### Frontend cannot connect to backend

Make sure both servers are running:

```text
Frontend → http://localhost:5173
Backend  → http://127.0.0.1:8000
```

Also verify that the frontend is sending requests to the correct backend URL.

---

# 🚀 Future Enhancements

Possible improvements include:

* 🔐 User authentication
* 💾 Chat history
* 🗂️ Multiple conversation sessions
* 🌙 Dark/light theme
* 🎤 Voice input
* 🔊 AI voice responses
* 📎 File/document upload
* 🧠 Conversation memory
* 🌐 Multi-language support
* 📱 Improved mobile experience
* ☁️ Cloud deployment
* 📊 Usage analytics

---

# 📚 Learning Outcomes

Through this project, the following concepts can be learned:

* Building a **full-stack web application**
* React component development
* REST API development using FastAPI
* Connecting frontend and backend applications
* Integrating a Generative AI API
* Working with environment variables
* Handling API requests and responses
* Error handling
* Git and GitHub project management
* AI application development

---

# 👩‍💻 Author

**Mahek Mulla**

Computer Engineering Student

---

# ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **educational and development purposes**.
