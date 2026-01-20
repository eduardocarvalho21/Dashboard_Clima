import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS 
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app) 

load_dotenv()

API_KEY = os.getenv("WEATHER_API_KEY")
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

@app.route('/api/clima', methods=['POST'])
def busca_clima():
    dados_recebidos = request.get_json()
    
    cidade = dados_recebidos.get('cidade', 'João Pessoa')

    parametros = {
        'q': cidade,
        'appid': API_KEY,
        'units': 'metric',
        'lang': 'pt_br'
    }

    try:
        response = requests.get(BASE_URL, params=parametros)
        
        if response.status_code == 200:
            dados_api = response.json()

            # Convertendo m/s para km/h
            velocidade_vento = dados_api['wind']['speed'] * 3.6

            resultado = {
                'cidade': dados_api['name'],
                'temperatura': int(dados_api['main']['temp']),
                'descricao': dados_api['weather'][0]['description'].capitalize(),
                'icone': dados_api['weather'][0]['icon'],
                'umidade': dados_api['main']['humidity'],
                'vento': int(velocidade_vento)
            }
            return jsonify(resultado), 200
            
        else:
            return jsonify({'erro': 'Cidade não encontrada ou erro na API'}), 404

    except Exception as e:
        return jsonify({'erro': f"Erro interno: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)