import React, { useState, useEffect } from 'react';
import minhafoto from "C:\Users\thiag\Downloads\thiago-gama-marçal-portfolio\src\public\thiago.jpeg";
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  Terminal, 
  Database, 
  BarChart3, 
  Server,
  ExternalLink,
  ChevronDown,
  Brain,
  Cpu
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-display font-bold text-xl tracking-tight">
              TGM<span className="text-blue-500">.</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
                <a href="#projects" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Projetos</a>
                <a href="#contact" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Contato</a>
              </div>
            </div>
            <div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium border border-blue-500/20">
              Desenvolvedor & Suporte de TI
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Thiago Gama Marçal
              <span className="block text-2xl md:text-4xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Sistemas de Informação & Automação
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={`text-xl md:text-2xl mb-10 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Bacharel em SI utilizando a base da Automação Industrial para criar soluções inteligentes através de Dados e IA.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                Ver Projetos <ChevronDown size={18} />
              </a>
              <a 
                href="#contact" 
                className={`px-8 py-3 rounded-xl font-medium transition-all border flex items-center justify-center gap-2 ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-slate-300 hover:bg-slate-100 text-slate-900'}`}
              >
                Entrar em Contato
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Sobre Mim</h2>
              <div className={`space-y-4 text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <p>
                  Sou <strong>Bacharel em Sistemas de Informação</strong> e possuo formação técnica em <strong>Automação Industrial</strong>, uma combinação que me permite unir a visão lógica de processos com a gestão de infraestrutura de TI.
                </p>
                <p>
                  Atualmente, atuo no suporte de TI do <strong>Hospital Viver Mais</strong>, onde foco na eficiência operacional e na resolução de problemas críticos de tecnologia. Tenho experiência prática no gerenciamento e suporte do sistema <strong>Tasy</strong>.
                </p>
                <p>
                  Meu objetivo é continuar evoluindo na intersecção entre tecnologia e análise, utilizando meu background em automação para aprimorar o suporte técnico e a entrega de soluções inteligentes para o negócio.
                </p>
                <p className="pt-2 italic text-base opacity-90">
                  ⚽ Fora da tecnologia, sou pai do Théo e um entusiasta do Flamengo.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Brain className="text-blue-500" size={24} />
                    <h3 className="font-semibold">Dados & IA</h3>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Python (Pandas/NumPy), SQL, Power BI</p>
                </div>

                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Server className="text-indigo-500" size={24} />
                    <h3 className="font-semibold">Infraestrutura & Suporte</h3>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Gestão de Redes, Firewalls, Suporte Nível 2 e Sistemas Hospitalares (Tasy)</p>
                </div>

                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Cpu className="text-emerald-500" size={24} />
                    <h3 className="font-semibold">Automação</h3>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Lógica de Programação Industrial, Scripts de Automação e Otimização de Processos</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={`aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <img 
                  src={minhafoto} 
                  alt="Thiago Gama Marçal" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className={`absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl backdrop-blur-md border ${darkMode ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-200'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-medium text-sm">Disponível para projetos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Projetos Recentes</h2>
            <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Alguns dos trabalhos que desenvolvi para resolver problemas reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Automação de Relatórios Tasy"
              description="Script desenvolvido para automatizar a extração e formatação de relatórios do sistema hospitalar Tasy, reduzindo o tempo manual em 80%."
              tags={['Python', 'Pandas', 'Automação']}
              icon={<Database size={24} />}
              darkMode={darkMode}
            />
            <ProjectCard 
              title="Sistema de Senhas"
              description="Aplicação web para gerenciamento de filas e chamadas de senhas em clínicas, melhorando o fluxo de atendimento aos pacientes."
              tags={['React', 'Node.js', 'WebSocket']}
              icon={<Terminal size={24} />}
              darkMode={darkMode}
            />
            <ProjectCard 
              title="Análise de Dados"
              description="Dashboard interativo para visualização de métricas de atendimento e performance da equipe de suporte."
              tags={['Power BI', 'SQL', 'Data Viz']}
              icon={<BarChart3 size={24} />}
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className={`py-12 border-t ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display font-bold mb-2">Vamos conversar?</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Estou sempre aberto a novas oportunidades e conexões.
              </p>
            </div>
            
            {/* <div className="flex gap-6">
              <SocialLink href="#" icon={<Github size={24} />} label="GitHub" darkMode={darkMode} />
              <SocialLink href="#" icon={<Linkedin size={24} />} label="LinkedIn" darkMode={darkMode} />
              <SocialLink href="thiagogmarcal@gmail.com" icon={<Mail size={24} />} label="Email" darkMode={darkMode} />
            </div>
          </div> */}

          <div className="flex gap-6">
  <SocialLink 
    href="https://github.com/thgama1" 
    icon={<Github size={24} />} 
    label="GitHub" 
    darkMode={darkMode} 
  />
  <SocialLink 
    href="https://www.linkedin.com/in/thiago-gama-marcal/" 
    icon={<Linkedin size={24} />} 
    label="LinkedIn" 
    darkMode={darkMode} 
  />
  <SocialLink 
    href="https://www.instagram.com/_thgama/" 
    icon={<Instagram size={24} />} 
    label="Instagram" 
    darkMode={darkMode} 
  />
  <SocialLink 
    href="mailto:thiagogmarcal@gmail.com" 
    icon={<Mail size={24} />} 
    label="Email" 
    darkMode={darkMode} 
  />
</div>
          
          <div className={`mt-12 pt-8 border-t text-center text-sm ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
            <p>&copy; {new Date().getFullYear()} Thiago Gama Marçal. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tags, icon, darkMode }: { 
  title: string; 
  description: string; 
  tags: string[]; 
  icon: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-6 rounded-2xl border transition-all duration-300 group ${
        darkMode 
          ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50 hover:shadow-blue-500/10' 
          : 'bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-xl'
      }`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
        darkMode ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-500/20' : 'bg-slate-100 text-blue-600 group-hover:bg-blue-50'
      }`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <a href="#" className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
        darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
      }`}>
        Ver Detalhes <ExternalLink size={16} />
      </a>
    </motion.div>
  );
}

function SocialLink({ href, icon, label, darkMode }: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
  darkMode: boolean;
}) {
  return (
    <a 
      href={href}
      className={`p-3 rounded-full transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white' 
          : 'bg-white text-slate-600 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md'
      }`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

