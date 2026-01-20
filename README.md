# ☁️ WeatherApp - Busca Clima

Uma aplicação web moderna e responsiva para consulta de previsão do tempo em tempo real. O projeto utiliza uma arquitetura separada com **Python (Flask)** no backend para processamento de dados e **React (Vite)** no frontend para uma interface ágil e elegante.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📸 Preview

![Interface do WeatherApp](./preview.png)

## 🚀 Tecnologias Utilizadas

### Frontend
- **React.js** com **Vite** (Alta performance)
- **Bootstrap 5** (Layout e Estilização)
- **Bootstrap Icons** (Ícones vetoriais)
- **CSS3 Personalizado** (Design Glassmorphism e tema Azul)

### Backend
- **Python 3**
- **Flask** (Microframework web)
- **Flask-CORS** (Para comunicação entre portas diferentes)
- **Requests** (Consumo de API externa)
- **Python-Dotenv** (Gerenciamento de variáveis de ambiente)

### API Externa
- **OpenWeatherMap** (Dados meteorológicos)

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [Python](https://www.python.org/) (v3.8 ou superior)
- [Git](https://git-scm.com/)

---

## 🔧 Como rodar o projeto

Siga os passos abaixo para configurar o ambiente de desenvolvimento.

# Pasta: cd backend

# Criar ambiente virtual
python -m venv venv

# Ativar o ambiente
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instale as dependências:

pip install flask flask-cors requests python-dotenv

# Arquivo .env:

WEATHER_API_KEY=sua_chave_aqui_sem_aspas

# Rode o servidor backend:

python app.py

# Pasta: cd frontend

# Instale as dependências do Node:

npm install

# Rode o frontend:

npm run dev

Autor
Eduardo Carvalho

LinkedIn: https://www.linkedin.com/in/eduardopereirapb/

GitHub: https://github.com/eduardocarvalho21
