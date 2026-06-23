import React, { useState } from 'react';

function App() {
  const [tema, setTema] = useState('synthwave');
  const alternarTema = () => {
    setTema(tema === 'synthwave' ? 'umbra' : 'synthwave');
  };

  const sessoesConhecimento = [
    {
      id: '01',
      tag: 'Front-end',
      titulo: 'Desenvolvimento de Interfaces',
      descricao: 'Criação de aplicações web responsivas, dinâmicas e acessíveis, focadas na experiência do usuário.',
      cards: [
        {
          nome: 'React.js',
          icone: '⚛️',
          desc: 'Construção de interfaces (SPAs), componentização, gerenciamento de estado e consumo de APIs.',
          tags: ['JavaScript', 'Hooks', 'Vite']
        },
        {
          nome: 'Tailwind CSS',
          icone: '🎨',
          desc: 'Estilização utilitária e ágil para criar designs modernos e adaptáveis a qualquer tela.',
          tags: ['CSS', 'Responsividade', 'UI']
        },
        {
          nome: 'Acessibilidade & UI',
          icone: '👁️',
          desc: 'Foco na estruturação de interfaces inclusivas e adaptadas para diferentes faixas etárias e necessidades visuais.',
          tags: ['Semântica', 'UX', 'Design Inclusivo']
        }
      ]
    },
    {
      id: '02',
      tag: 'Automação',
      titulo: 'Scripts & Inteligência Artificial',
      descricao: 'Desenvolvimento de automações para o dia a dia e integração com modelos de linguagem operando localmente.',
      cards: [
        {
          nome: 'Python Scripts',
          icone: '🐍',
          desc: 'Criação de bots (como integradores para Discord), rotinas de automação e manipulação via linha de comando.',
          tags: ['Python', 'Discord.py', 'CLI']
        },
        {
          nome: 'Ollama & LLMs',
          icone: '🧠',
          desc: 'Integração e execução de modelos de linguagem (IA) locais para bots de terminal e ferramentas de assistência.',
          tags: ['IA Local', 'Ollama', 'Prompting']
        },
        {
          nome: 'Visão Computacional',
          icone: '📷',
          desc: 'Estudos e implementações focadas em processamento e análise de imagens por algoritmos.',
          tags: ['Computer Vision', 'Python', 'OpenCV']
        }
      ]
    },
    {
      id: '03',
      tag: 'Segurança',
      titulo: 'Defesa & Blue Team',
      descricao: 'Estudo e aplicação de conceitos de segurança defensiva, focados em monitoramento e análise.',
      cards: [
        {
          nome: 'Monitoramento SIEM',
          icone: '📡',
          desc: 'Operação de soluções SIEM para agregação de logs, correlação de eventos em tempo real e criação de alertas de segurança.',
          tags: ['SIEM', 'Correlação', 'SOC']
        },
        {
          nome: 'Desenvolvimento SecTools',
          icone: '🛠️',
          desc: 'Criação de ferramentas próprias e scripts em Python com viés defensivo para automatizar análises.',
          tags: ['SecDev', 'Python', 'Automação']
        },
        {
          nome: 'Fundamentos Blue Team',
          icone: '🔐',
          desc: 'Aplicação de metodologias de proteção, mitigação de riscos e respostas a incidentes teóricos.',
          tags: ['Defesa', 'Hardening', 'CyberSec']
        }
      ]
    },
    {
      id: '04',
      tag: 'Game Dev',
      titulo: 'Modding & Engines',
      descricao: 'Compreensão da estrutura interna de jogos, conversão técnica de assets e estabilização de load orders.',
      cards: [
        {
          nome: 'Engines 3D',
          icone: '🎮',
          desc: 'Estudo das mecânicas fundamentais, física e programação de lógica de jogos em ambientes 3D.',
          tags: ['Unity', 'C#']
        },
        {
          nome: 'Conversão de Assets',
          icone: '⚙️',
          desc: 'Otimização de texturas e modelos, manipulação rigorosa e exportação para injeção in-game.',
          tags: ['BodySlide', 'Outfit Studio', 'Meshes']
        },
        {
          nome: 'Modelagem 3D & Blender',
          icone: '🧊',
          desc: 'Criação, edição e otimização de malhas 3D (meshes), topologia e mapeamento UV para integração em engines.',
          tags: ['Blender', '3D Modeling', 'Texturing']
        }
      ]
    }
  ];

 return (
   <div className={"min-h-screen font-sans bg-bgPrincipal transition-colors duration-500 bg-[var(--cor-fundo)] " + (tema === 'umbra' ? 'theme-umbra' : '')}>
    
    {/* Navbar e Troca de tema */}
    <header className="bg-white/1 border-b border-gray-800 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest text-white">
          S. CALD
        </div>
        <div className="hidden md:flex items-center space-x-5 text-sm text-gray-200">
          <a href="#sobre" className="hover:text-[var(--cor-primaria)] transition-colors">Sobre</a>
          <a href="#habilidades" className="hover:text-[var(--cor-primaria)] transition-colors">Habilidades</a>
          <a href="#contato" className="hover:text-[var(--cor-primaria)] transition-colors">Contato</a>

          <button onClick={alternarTema} className="ml-4 px-3 py-1.5 rounded-md bg-gray-700 text-gray-400 hover:text-white hover:border-[var(--cor-primaria)] transition-all duration-300 flex items-center gap-2 cursor-pointer">
            {tema === 'synthwave' ? '🔴 Dark Umbra' : '🟣 Synthwave'}
          </button>
        </div>
      </nav>
    </header>

    {/* Intro */}
    <main className="max-w-6xl mx-auto px-6 pt-12 pb-24"> 
      <section className="max-w-3xl mx-auto flex flex-col items-center space-y-6 mt-10 md:mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-[var(--cor-primaria)] pb-2 transition-all duration-500">
          Samuel Caldeira
        </h1>
        <p className="text-[var(--cor-primaria)] font-medium tracking-wide text-sm md:text-base transition-colors duration-500">
          Desenvolvedor | Automação | Segurança | Modding
        </p>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">

        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#habilidades" className="w-full sm:w-auto text-center bg-[var(--cor-primaria)] text-black font-bold px-8 py-3 rounded-md hover:opacity-80 transition-opacity duration-300">
           Ver habilidades
          </a>
          <a href="#contato" className="w-full sm:w-auto text-center border border-gray-700 text-gray-300 px-8 py-3 rounded-md hover:border-[var(--cor-primaria)] hover:text-[var(--cor-primaria)] transition-all duration-300">
            Entrar em contato
          </a>
        </div>
      </section>

      {/* Sobre e Skills */}
      <section className="mt-32 max-w-5xl mx-auto" id="sobre">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-3 mb-6">
              <span className="text-[var(--cor-primaria)] transition-colors duration-500"># </span> 
              Sobre Mim
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Sou um universitário da área de TI no 6º período, focado em criar soluções que unem código e criatividade. 
              No frontend, gosto de construir interfaces funcionais e de alto impacto utilizando o ecossistema React.js.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Além do desenvolvimento web, dedico meus estudos à automação com Python (incluindo integrações com LLMs locais) 
              e à segurança defensiva (Blue Team). Também tenho um forte interesse nos bastidores dos jogos e ferramentas de modding.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="bg-white/5 border border-gray-800 rounded-xl p-6 text-center hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">React.js</h3>
              <p className="text-sm text-[var(--cor-primaria)] font-medium transition-colors duration-500">Frontend</p>
            </div>
            
            <div className="bg-white/5 border border-gray-800 rounded-xl p-6 text-center hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">Python</h3>
              <p className="text-sm text-[var(--cor-primaria)] font-medium transition-colors duration-500">Automação & IA</p>
            </div>
            
            <div className="bg-white/5 border border-gray-800 rounded-xl p-6 text-center hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">Blue Team</h3>
              <p className="text-sm text-[var(--cor-primaria)] font-medium transition-colors duration-500">Cybersecurity</p>
            </div>
            
            <div className="bg-white/5 border border-gray-800 rounded-xl p-6 text-center hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">Modding</h3>
              <p className="text-sm text-[var(--cor-primaria)] font-medium transition-colors duration-500">Game Dev</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <div className="mt-32 max-w-5xl mx-auto px-6 pb-24 space-y-24" id="habilidades">
        {sessoesConhecimento.map((sessao) => (
          <section key={sessao.id} className="pt-8 border-t border-gray-800/30">
            <div className="mb-10 max-w-2xl">
              <p className="text-[var(--cor-primaria)] font-mono text-sm mb-3 transition-colors duration-500">
                {sessao.id} — {sessao.tag}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {sessao.titulo}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                {sessao.descricao}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessao.cards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-[#151921] border border-gray-800/50 rounded-2xl p-6 hover:border-[var(--cor-primaria)]/50 transition-all duration-300 flex flex-col group">
                  <div className="w-12 h-12 rounded-lg bg-[#1f2430] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {card.icone}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.nome}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-grow mb-6">
                    {card.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-bold text-gray-400 bg-[#0d1117] px-3 py-1.5 rounded border border-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </section>
        ))}

      </div>

      {/* Footer e Contato */}
      <footer className="mt-32 border-t border-gray-800/50 pt-16 pb-8 flex flex-col items-center text-center" id="contato">
        
        <h2 className="text-3xl font-bold text-white mb-6">
          Vamos conversar?
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
          Estou sempre aberto a novas oportunidades. Seja para colaborar em desenvolvimento, discutir arquiteturas de segurança ou trocar ideias sobre acessibilidade em interfaces, minha caixa de entrada está disponível.
        </p>
        
        {/* Links de Redes */}
        <div className="flex gap-6 mb-16">
          <a href="https://github.com/samuelcaldeirar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--cor-primaria)] transition-colors duration-300 text-sm font-bold tracking-widest">
            [ GITHUB ]
          </a>
          <a href="https://linkedin.com/in/samuel-caldeirar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--cor-primaria)] transition-colors duration-300 text-sm font-bold tracking-widest">
            [ LINKEDIN ]
          </a>
          <a href="mailto:samuelcaldrodrigues@gmail.com" className="text-gray-400 hover:text-[var(--cor-primaria)] transition-colors duration-300 text-sm font-bold tracking-widest">
            [ E-MAIL ]
          </a>
        </div>
        
        <p className="text-gray-600 text-xs font-mono">
          © {new Date().getFullYear()} Samuel Caldeira. Construído com React & Tailwind.
        </p>
        
      </footer>
    </main>

  </div>

 )
}

export default App;