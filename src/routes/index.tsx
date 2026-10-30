import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X, Instagram, ArrowUpRight, MessageCircle, ChevronRight, CheckCircle2, Layers3, Printer, Building2, PanelTop, CarFront, PenTool, Sparkles } from "lucide-react";

const img=(id:string,w=1200)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const photos={
 hero:img("photo-1486406146926-c627a92ad1ab",1800),
 fachada:img("photo-1497366754035-f200968a6e72"),
 adesivos:img("photo-1545291730-faff8ca1d4b0"),
 lonas:img("photo-1504307651254-35680f356dfd"),
 letras:img("photo-1441986300917-64674bd600d8"),
 envelopamento:img("photo-1492144534655-ae79c964c9d7"),
 impressao:img("photo-1561070791-2526d30994b5"),
 p1:img("photo-1441986300917-64674bd600d8"),
 p2:img("photo-1497366754035-f200968a6e72"),
 p3:img("photo-1486406146926-c627a92ad1ab"),
 p4:img("photo-1492144534655-ae79c964c9d7"),
 p5:img("photo-1517248135467-4c7edcad34c4"),
 p6:img("photo-1561070791-2526d30994b5"),
 banner:img("photo-1504307651254-35680f356dfd",1800)
};
const services=[
 {title:"Fachadas e ACM",desc:"Presença marcante para o seu negócio.",image:photos.fachada,icon:Building2},
 {title:"Adesivos e vitrines",desc:"Personalidade para ambientes e vitrines.",image:photos.adesivos,icon:Layers3},
 {title:"Banners e lonas",desc:"Sua mensagem em grandes formatos.",image:photos.lonas,icon:PanelTop},
 {title:"Letras caixa",desc:"Destaque e sofisticação para sua marca.",image:photos.letras,icon:Sparkles},
 {title:"Envelopamento",desc:"Transforme superfícies em publicidade.",image:photos.envelopamento,icon:CarFront},
 {title:"Impressão digital",desc:"Cores e acabamentos de alta qualidade.",image:photos.impressao,icon:Printer}
];
const projects=[
 {name:"Identidade que atrai",type:"Fachada comercial",image:photos.p1},
 {name:"Destaque em cada detalhe",type:"Comunicação de ambiente",image:photos.p2},
 {name:"Marcas que se destacam",type:"Fachada e revestimento",image:photos.p3},
 {name:"Movimento que comunica",type:"Envelopamento",image:photos.p4},
 {name:"Experiências de marca",type:"Sinalização",image:photos.p5},
 {name:"Cor em grande formato",type:"Impressão",image:photos.p6}
];
function Brand(){return <a className="brand" href="#inicio" aria-label="Sulprint - início"><span className="brand-mark"><i/><i/><i/><i/></span><span className="brand-words"><strong>SUL<br/>PRINT</strong><small>COMUNICAÇÃO VISUAL</small></span></a>}
function ContactButton({children="Solicitar orçamento",className=""}:{children?:React.ReactNode,className?:string}){return <a className={`btn btn-pink ${className}`} href="#contato"><MessageCircle size={17}/>{children}<ArrowRight size={17}/></a>}
export const Route=createFileRoute("/")({head:()=>({meta:[{title:"Sulprint | Comunicação Visual que marca presença"},{name:"description",content:"Fachadas, ACM, adesivos, lonas, letras caixa, envelopamento e impressão digital. Conheça as soluções de comunicação visual da Sulprint."},{property:"og:title",content:"Sulprint Comunicação Visual"},{property:"og:description",content:"Sua marca ganha presença com comunicação visual de impacto."}]}),component:Home});
function Home(){
 const [menu,setMenu]=useState(false);
 const [active,setActive]=useState(0);
 return <div className="site">
  <header className="header"><div className="container nav"><Brand/><nav className={menu?"navlinks open":"navlinks"} aria-label="Menu principal">{[["Início","#inicio"],["Serviços","#servicos"],["Projetos","#projetos"],["Sobre","#sobre"],["Como funciona","#processo"],["Contato","#contato"]].map(([t,h])=><a key={h} href={h} onClick={()=>setMenu(false)}>{t}</a>)}</nav><ContactButton className="header-cta"/><button className="menu-toggle" aria-label={menu?"Fechar menu":"Abrir menu"} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
  <main>
   <section className="hero" id="inicio"><div className="hero-image" style={{backgroundImage:`linear-gradient(90deg,rgba(11,15,54,.96) 0%,rgba(11,15,54,.84) 43%,rgba(11,15,54,.17) 100%),url('${photos.hero}')`}}/><div className="hero-lines" aria-hidden="true"><i/><i/><i/></div><div className="container hero-inner"><div className="hero-content"><span className="eyebrow light">COMUNICAÇÃO VISUAL QUE TRANSFORMA</span><h1>Sua marca ganha presença com <em>comunicação visual de impacto.</em></h1><p>Fachadas, adesivos, lonas, letras caixa, envelopamento e impressão digital. Soluções completas para destacar sua marca e atrair olhares.</p><div className="hero-actions"><ContactButton/><a className="btn btn-outline" href="#projetos">Ver projetos <ArrowUpRight size={18}/></a></div><div className="hero-perks"><span><CheckCircle2/> Atendimento personalizado</span><span><PenTool/> Projetos sob medida</span><span><Sparkles/> Acabamento profissional</span></div></div></div><div className="hero-stamp">SUA MARCA<br/><strong>EM EVIDÊNCIA</strong><ArrowUpRight size={24}/></div></section>
   <section className="services section" id="servicos"><div className="container"><div className="section-top"><div><span className="eyebrow">NOSSOS SERVIÇOS</span><h2>Soluções completas<br/>em <em>comunicação visual.</em></h2></div><div className="section-aside"><p>Da ideia à instalação, desenvolvemos soluções que dão forma à identidade da sua empresa.</p><a className="text-link" href="#contato">Solicitar um projeto <ArrowUpRight size={17}/></a></div></div><div className="services-grid">{services.map(s=>{const Icon=s.icon;return <a key={s.title} className="service-card" href="#contato"><div className="service-image"><img src={s.image} alt={s.title} loading="lazy"/></div><div className="service-detail"><span className="service-icon"><Icon size={20}/></span><div><h3>{s.title}</h3><p>{s.desc}</p></div><span className="circle-arrow"><ArrowRight size={18}/></span></div></a>})}</div></div></section>
   <section className="manifesto" id="sobre"><div className="container manifesto-inner"><div><span className="eyebrow light">MAIS QUE IMPRESSÃO</span><h2>Não é só aparecer.<br/>É ser <em>lembrado.</em></h2></div><p>A comunicação visual certa conecta sua empresa às pessoas. Na Sulprint, cada detalhe é pensado para expressar o melhor da sua marca.</p><a className="btn btn-outline" href="#contato">Vamos criar juntos <ArrowUpRight size={18}/></a></div></section>
   <section className="projects section" id="projetos"><div className="container"><div className="section-top"><div><span className="eyebrow">INSPIRAÇÃO PARA SUA MARCA</span><h2>Ideias que ganham vida<br/>e geram <em>grandes resultados.</em></h2></div><p className="section-aside">Explore possibilidades de comunicação visual para diferentes tipos de negócio. <small>Imagens ilustrativas; portfólio real será incluído posteriormente.</small></p></div><div className="projects-grid">{projects.slice(0,6).map((p,i)=><button className={`project ${active===i?"is-active":""}`} key={p.name} onClick={()=>setActive(i)} aria-label={`Ver projeto ilustrativo: ${p.name}`}><img src={p.image} alt={p.name} loading="lazy"/><span className="project-caption"><small>{p.type}</small><strong>{p.name}</strong></span><span className="project-plus"><ArrowUpRight size={19}/></span></button>)}</div></div></section>
   <section className="process section" id="processo"><div className="container"><div className="section-top"><div><span className="eyebrow">COMO FUNCIONA</span><h2>Do seu projeto à instalação,<br/><em>sem complicação.</em></h2></div><p className="section-aside">Um processo simples para transformar sua ideia em uma comunicação visual que faz diferença.</p></div><div className="steps">{[{n:"01",title:"Conte sua ideia",text:"Fale sobre o seu negócio e o que você precisa."},{n:"02",title:"Receba sua proposta",text:"Alinhamos as possibilidades para o seu projeto."},{n:"03",title:"Produção cuidadosa",text:"Seu material ganha forma com atenção aos detalhes."},{n:"04",title:"Sua marca em destaque",text:"É hora de transformar sua presença visual."}].map(s=><div className="step" key={s.n}><span className="step-no">{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><ChevronRight className="step-chevron"/></div>)}</div></div></section>
   <section className="contact" id="contato"><div className="contact-art" style={{backgroundImage:`linear-gradient(90deg,#10143f 0%,rgba(16,20,63,.94) 52%,rgba(16,20,63,.4) 100%),url('${photos.banner}')`}}/><div className="container contact-inner"><div><span className="eyebrow light">VAMOS CONVERSAR?</span><h2>Vamos dar vida<br/>ao seu <em>projeto?</em></h2><p>Conte o que você imagina. A Sulprint ajuda a transformar suas ideias em comunicação visual.</p></div><div className="contact-panel"><span className="contact-pill">ORÇAMENTO PERSONALIZADO</span><h3>Pronto para destacar sua marca?</h3><p>O link direto de orçamento será configurado na próxima etapa. Enquanto isso, conheça nosso Instagram.</p><a className="btn btn-pink" href="https://www.instagram.com/sulprintbr/" target="_blank" rel="noopener noreferrer"><Instagram size={19}/> Visitar Instagram <ArrowUpRight size={18}/></a></div></div></section>
  </main>
  <footer className="footer"><div className="container footer-inner"><Brand/><span>Comunicação visual feita para destacar a sua marca.</span><a href="https://www.instagram.com/sulprintbr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Sulprint"><Instagram size={20}/></a></div><div className="container footer-bottom">© {new Date().getFullYear()} Sulprint Comunicação Visual. <span>Projeto em desenvolvimento · imagens ilustrativas</span></div></footer>
 </div>
}