<div id="agenthub-dashboard-root"></div>

<script type="module">
// Production React Dashboard for AgentHub - Single File
// Fonts: Syne (headings), DM Mono (code)

const { createRoot } = ReactDOM;
const root = createRoot(document.getElementById('agenthub-dashboard-root'));

// 🔧 Design System (Dark Theme: #0a0a0a bg, orange/cyan/purple agents)
const COLORS = {
  claude: '#FF6B35',   // Orange
  codex: '#00D4FF',    // Cyan
  gemini: '#9B59B6',   // Purple
  bg: '#0a0a0a',
  card: '#1a1a1a',
  text: '#e0e0e0',
  accent: '#FF6B35'
};

function Dot({ color, pulse }) {
  return <div style={{
    width: 12, height: 12, borderRadius: '50%',
    background: color, boxShadow: pulse ? '0 0 20px currentColor' : 'none',
    animation: pulse ? 'pulse 1.5s infinite' : 'none',
    '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.5 } }
  }} />;
}

function Badge({ children, color }) {
  return <span style={{
    background: `${color}20`, color, padding: '4px 8px',
    borderRadius: 4, fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
    letterSpacing: 0.5
  }}>{children}</span>;
}

function Card({ children, color }) {
  return <div style={{
    background: COLORS.card, border: `2px solid ${color}30`, borderRadius: 12,
    padding: 20, backdropFilter: 'blur(10px)'
  }}>{children}</div>;
}

function StatCard({ title, value, sparkline, color }) {
  return <Card color={color}>
    <div style={{ fontFamily: 'DM Mono', fontSize: 32, color: COLORS.text, fontWeight: 700 }}>{value}</div>
    <div style={{ fontFamily: 'Syne', fontSize: 14, opacity: 0.7 }}>{title}</div>
    {sparkline}
  </Card>;
}

function AgentCard({ name, load, latency, color, status }) {
  return <Card color={color}>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', mb: 12 }}>
      <Dot color={color} pulse={status === 'live'} />
      <div>
        <div style={{ fontFamily: 'Syne', fontSize: 18, fontWeight: 600 }}>{name}</div>
        <Badge color={color}>{status.toUpperCase()}</Badge>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, opacity: 0.6, mb: 4 }}>Load</div>
        <div className="load-bar" style={{ height: 4, background: `${color}20`, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: `${load}%`, height: '100%', background: color, transition: 'width 0.3s' }} />
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, opacity: 0.6, mb: 4 }}>Latency</div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{latency}ms</div>
      </div>
    </div>
  </Card>;
}

// 📊 Data Simulation (Replace with /stats API)
function mkSeries(n = 60) { return Array(n).fill(0).map((_, i) => ({ t: i, v: 30 + Math.random() * 50 })); }
function mkCostSeries(n = 60) { return Array(n).fill(0).map((_, i) => ({ t: i, v: 0.5 + Math.random() * 2 })); }
function mkHistory(n = 20) {
  const agents = ['claude', 'codex', 'gemini'];
  return Array(n).fill(0).map(() => ({
    id: Math.random().toString(36).slice(2),
    agent: agents[Math.floor(Math.random() * 3)],
    prompt: ['User login', 'API refactor', 'DB query', 'Frontend', 'ML model'][Math.floor(Math.random() * 5)],
    tokens: 800 + Math.random() * 1200,
    latency: 1200 + Math.random() * 800,
    cost: (0.8 + Math.random() * 2).toFixed(3),
    status: Math.random() > 0.05 ? 'success' : 'error'
  }));
}

// 🖥️ Main App
const App = () => {
  const [tab, setTab] = React.useState('overview');
  const [rps, setRps] = React.useState(mkSeries());
  const [costs, setCosts] = React.useState({
    claude: mkCostSeries(), codex: mkCostSeries(), gemini: mkCostSeries()
  });
  const [loads, setLoads] = React.useState({ claude: 45, codex: 72, gemini: 28 });
  const [history, setHistory] = React.useState(mkHistory());

  React.useEffect(() => {
    const id = setInterval(() => {
      setRps(p => [...p.slice(-59), { t: 'now', v: 20 + Math.random() * 80 }]);
      setCosts(c => ({
        claude: [...c.claude.slice(-59), { t: 'now', v: 1.2 + Math.random() * 0.8 }],
        codex: [...c.codex.slice(-59), { t: 'now', v: 0.8 + Math.random() * 0.4 }],
        gemini: [...c.gemini.slice(-59), { t: 'now', v: 0.3 + Math.random() * 0.2 }]
      }));
      setLoads({
        claude: 30 + Math.random() * 50,
        codex: 50 + Math.random() * 40,
        gemini: 20 + Math.random() * 30
      });
      setHistory(h => [...h.slice(0, 19), {
        id: Math.random().toString(36).slice(2),
        agent: ['claude', 'codex', 'gemini'][Math.floor(Math.random() * 3)],
        prompt: ['User login API', 'DB optimization', 'Frontend refactor'][Math.floor(Math.random() * 3)],
        tokens: Math.floor(500 + Math.random() * 1500),
        latency: Math.floor(800 + Math.random() * 1200),
        cost: (0.5 + Math.random() * 1.5).toFixed(3),
        status: Math.random() > 0.1 ? 'success' : 'error'
      }]);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font-family: 'DM Mono', monospace; 
        background: linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 100%); 
        color: #e0e0e0; min-height: 100vh; padding: 24px; 
      }
      .tabs { display: flex; gap: 8px; margin-bottom: 24px; }
      .tab { padding: 12px 24px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,107,53,0.3); border-radius: 8px; cursor: pointer; transition: all 0.2s; }
      .tab.active { background: #FF6B3520; border-color: #FF6B35; }
      .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
      .load-bar { height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; }
      @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 20px currentColor} 50%{opacity:0.5;box-shadow:0 0 0 currentColor} }
    `}</style>

    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      <header style={{ textAlign: 'center', mb: 40 }}>
        <h1 style={{ fontFamily: 'Syne', fontSize: 48, background: 'linear-gradient(135deg, #FF6B35, #00D4FF, #9B59B6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 8 }}>AgentHub</h1>
        <p style={{ fontSize: 18, opacity: 0.8 }}>Live AI Agent Orchestration Dashboard</p>
      </header>

      <div className="tabs">
        {['overview', 'agents', 'logs', 'costs'].map(t => (
          <div key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </div>
        ))}
      </div>

      {tab === 'overview' && <>
        <div className="grid">
          <StatCard title="RPS" value={rps[rps.length-1]?.v?.toFixed(0) || 0} color={COLORS.accent}>
            <svg width="80" height="20" viewBox="0 0 80 20">
              <path d={rps.slice(-10).map((p,i) => `L ${i*8} ${20-p.v/5}`).join(' ')} stroke={COLORS.text} strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </StatCard>
          <StatCard title="Total Cost" value={`$${Object.values(costs).reduce((sum, s) => sum + s[s.length-1].v, 0).toFixed(2)}`} color="#10B981">
            <svg width="80" height="20"><path d={Object.values(costs).map(s => s.slice(-1)[0].v).map((v,i) => `L ${i*40} ${20-v*5}`).join(' ')} stroke="#10B981" strokeWidth="2" fill="none"/></svg>
          </StatCard>
          <StatCard title="Success Rate" value="99.8%" color="#3B82F6">
            <svg width="80" height="20"><circle cx="10" cy="10" r="6" fill="#10B981"/><circle cx="40" cy="10" r="6" fill="#F59E0B"/><circle cx="70" cy="10" r="6" fill="#EF4444"/></svg>
          </StatCard>
          <StatCard title="Active Sessions" value={Math.floor(12 + Math.random()*8)} color="#8B5CF6">
            <div style={{fontSize:12}}>Claude:23 Codex:15 Gemini:8</div>
          </StatCard>
        </div>
        <div style={{display:'flex', gap:24, mt:24}}>
          <div style={{flex:1}}>
            <h3 style={{fontFamily:'Syne', mb:16}}>Requests/sec</h3>
            <svg width="100%" height="200" viewBox="0 0 600 200">
              <path d={rps.map((p,i) => `L ${i*10} ${200-p.v*2}`).join(' ')} stroke="#FF6B35" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <line x1="0" y1="200" x2="600" y2="200" stroke="#333" strokeWidth="1"/>
            </svg>
          </div>
          <div style={{flex:1}}>
            <h3 style={{fontFamily:'Syne', mb:16}}>Routing %</h3>
            <svg width="100%" height="200" viewBox="0 0 300 200">
              <path d="M 50 50 Q 100 100 150 50 Q 200 0 250 50" stroke="#FF6B35" strokeWidth="20" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 50 100 Q 100 150 150 100 Q 200 50 250 100" stroke="#00D4FF" strokeWidth="20" fill="none"/>
              <path d="M 50 150 Q 100 180 150 150 Q 200 120 250 150" stroke="#9B59B6" strokeWidth="20" fill="none"/>
            </svg>
          </div>
        </div>
      </>}

      {tab === 'agents' && <div className="grid">
        <AgentCard name="Claude 4.6 Sonnet" load={loads.claude} latency={(1400 + Math.random()*600).toFixed(0)} color={COLORS.claude} status="live" />
        <AgentCard name="Codex GPT-5.2" load={loads.codex} latency={Math.floor(2200 + Math.random()*400)} color={COLORS.codex} status="live" />
        <AgentCard name="Gemini 3.0 Pro" load={loads.gemini} latency={Math.floor(900 + Math.random()*500)} color={COLORS.gemini} status="warning" />
      </div>}

      {tab === 'logs' && <Card color={COLORS.accent}>
        <div style={{fontFamily:'Syne', fontSize:18, mb:16}}>Live Request Log</div>
        <div style={{maxHeight:'60vh', overflow:'auto', fontSize:13, fontFamily:'DM Mono'}}>
          {history.map(row => <div key={row.id} style={{display:'grid', gridTemplateColumns:'100px 1fr 80px 80px 80px 80px 60px', gap:12, padding:'8px 0', borderBottom:'1px solid #333'}}>
            <Badge color={COLORS[row.agent]}>{row.agent.toUpperCase()}</Badge>
            <div>{row.prompt}</div>
            <div>{row.tokens.toLocaleString()}</div>
            <div>{row.latency}ms</div>
            <div>${row.cost}</div>
            <Badge color={row.status === 'success' ? '#10B981' : '#EF4444'}>{row.status}</Badge>
          </div>)}
        </div>
      </Card>}

      {tab === 'costs' && <>
        <div className="grid">
          <StatCard title="Claude $/1k" value="3.00" color={COLORS.claude} />
          <StatCard title="Codex $/1k" value="2.00" color={COLORS.codex} />
          <StatCard title="Gemini $/1k" value="0.80" color={COLORS.gemini} />
          <StatCard title="Total Today" value="$247.32" color="#10B981" />
        </div>
        <div style={{mt:24}}>
          <h3 style={{fontFamily:'Syne', mb:16}}>Cost Intelligence</h3>
          <svg width="100%" height="300" viewBox="0 0 1200 300">
            <path d={costs.claude.map((p,i) => `L ${i*20} ${300-p.v*100}`).join(' ')} stroke={COLORS.claude} strokeWidth="3" fill="none"/>
            <path d={costs.codex.map((p,i) => `L ${i*20} ${300-p.v*100}`).join(' ')} stroke={COLORS.codex} strokeWidth="3" fill="none"/>
            <path d={costs.gemini.map((p,i) => `L ${i*20} ${300-p.v*100}`).join(' ')} stroke={COLORS.gemini} strokeWidth="3" fill="none"/>
          </svg>
        </div>
      </>}
    </div>
  </>;
};

root.render(<App />);
</script>