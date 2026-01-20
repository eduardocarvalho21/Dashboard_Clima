import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState(null)
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  const buscarClima = async (e) => {
    e.preventDefault()
    if (!cidade) return
    setLoading(true)
    setErro('')
    setClima(null)

    try {
      const response = await fetch('http://127.0.0.1:5000/api/clima', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cidade })
      })
      const data = await response.json()
      
      if (response.ok) {
        setClima(data)
      } else {
        setErro(data.erro || 'Cidade não encontrada')
      }
    } catch {
      setErro('Erro de conexão')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="main-container">
      
      {/* Header */}
      <div className="app-header">
        <div className="logo-area">
           <i className="bi bi-cloud logo-icon"></i>
        </div>
        <h1 className="app-title">Weather<span style={{fontWeight: '700'}}>App</span></h1>
        <p className="app-subtitle">Previsão do tempo em tempo real</p>
      </div>

      {/* Barra de pesquisa */}
      <form onSubmit={buscarClima} className="search-bar">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Digite o nome da cidade..."
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? '...' : <i className="bi bi-search"></i>}
        </button>
      </form>

      <div className="content-card">
        
        {erro ? (
            <div className="text-danger">{erro}</div>
        ) : clima ? (
            <div className="result-container">
                <h2 className="city-header">{clima.cidade}</h2>
                <p className="text-uppercase text-muted small letter-spacing-1 mb-4">{clima.descricao}</p>
                
                <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
                    <img src={`http://openweathermap.org/img/wn/${clima.icone}@2x.png`} style={{width: '80px'}} alt="icon" />
                    <div className="main-temp">{clima.temperatura}°</div>
                </div>

               <div className="weather-badge-row">

              <div className="info-pill">
                  <i className="bi bi-droplet-fill text-primary fs-5"></i>
                  <span>Umidade: <strong>{clima.umidade}%</strong></span>
              </div>

              <div className="info-pill">
                  <i className="bi bi-wind text-secondary fs-5"></i>
                  <span>Vento: <strong>{clima.vento} km/h</strong></span>
              </div>

            </div>
            </div>
        ) : (
            <div className="empty-state">
                <div className="position-relative d-inline-block mb-3">
                    <i className="bi bi-cloud empty-state-icon"></i>
                    <i className="bi bi-geo-alt-fill text-warning position-absolute bottom-0 end-0 fs-3"></i>
                </div>
                <h3 className="empty-title">Pesquise uma cidade</h3>
                <p className="empty-desc">
                    Digite o nome de uma cidade acima para ver as condições climáticas atuais
                </p>
            </div>
        )}

      </div>

    </div>
  )
}

export default App