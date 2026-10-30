import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowRight, Menu, X, Instagram, ArrowUpRight, MessageCircle, ChevronRight, Layers3, Printer, Building2, PanelTop, CarFront, Sparkles } from "lucide-react";

// Fotografias ilustrativas da biblioteca Pexels, selecionadas pela correspondência
// visual ao serviço. Não representam trabalhos realizados pela Sulprint.
const pexels = (photoId: number, width = 1100) =>
  `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const photos = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  fachada: pexels(36903743), // vitrine e fachada de loja real, com letreiro na testeira
  adesivos: pexels(11337086), // vitrine envidraçada com adesivos de identificação
  lonas: pexels(35903833), // instalação de banner/lona em grande formato no prédio
  letras: pexels(9660918), // letreiro aplicado em fachada comercial
  envelopamento: pexels(33794255), // veículo com envelopamento publicitário
  impressao: pexels(20042067), // impressora gráfica profissional de grande formato
  banner: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85"
};
const services=[
 {title:"Fachadas e ACM",desc:"Presença marcante para o seu negócio.",image:photos.fachada,icon:Building2},
 {title:"Adesivos e vitrines",desc:"Personalidade para ambientes e vitrines.",image:photos.adesivos,icon:Layers3},
 {title:"Banners e lonas",desc:"Sua mensagem em grandes formatos.",image:photos.lonas,icon:PanelTop},
 {title:"Letras caixa",desc:"Destaque e sofisticação para sua marca.",image:photos.letras,icon:Sparkles},
 {title:"Envelopamento",desc:"Transforme superfícies em publicidade.",image:photos.envelopamento,icon:CarFront},
 {title:"Impressão digital",desc:"Cores e acabamentos de alta qualidade.",image:photos.impressao,icon:Printer}
];
function Brand(){return <a className="brand" href="#inicio" aria-label="Sulprint - início"><span className="brand-mark"><i/><i/><i/><i/></span><span className="brand-words"><strong>SUL<br/>PRINT</strong><small>COMUNICAÇÃO VISUAL</small></span></a>}
function ContactButton({children="Solicitar orçamento",className=""}:{children?:React.ReactNode,className?:string}){return <a className={`btn btn-pink ${className}`} href="#contato"><MessageCircle size={17}/>{children}<ArrowRight size={17}/></a>}
export const Route=createFileRoute("/")({head:()=>({meta:[{title:"Sulprint | Comunicação Visual que marca presença"},{name:"description",content:"Fachadas, ACM, adesivos, lonas, letras caixa, envelopamento e impressão digital. Conheça as soluções de comunicação visual da Sulprint."},{property:"og:title",content:"Sulprint Comunicação Visual"},{property:"og:description",content:"Sua marca ganha presença com comunicação visual de impacto."}]}),component:Home});
function Home(){
 const [menu,setMenu]=useState(false);
 const [facadePosition,setFacadePosition]=useState(50);
 const facadeDragging=useRef(false);
 const updateFacadeFromPointer=(event:React.PointerEvent<HTMLDivElement>)=>{
   const bounds=event.currentTarget.getBoundingClientRect();
   if(bounds.width>0){
     setFacadePosition(Math.max(0,Math.min(100,Math.round(100*(event.clientX-bounds.left)/bounds.width))));
   }
 };
 const startFacadeDrag=(event:React.PointerEvent<HTMLDivElement>)=>{
   if(event.pointerType==="mouse" && event.button!==0)return;
   facadeDragging.current=true;
   event.currentTarget.setPointerCapture(event.pointerId);
   updateFacadeFromPointer(event);
 };
 const moveFacadeDrag=(event:React.PointerEvent<HTMLDivElement>)=>{
   if(facadeDragging.current)updateFacadeFromPointer(event);
 };
 const stopFacadeDrag=(event:React.PointerEvent<HTMLDivElement>)=>{
   if(!facadeDragging.current)return;
   updateFacadeFromPointer(event);
   facadeDragging.current=false;
   if(event.currentTarget.hasPointerCapture(event.pointerId)){
     event.currentTarget.releasePointerCapture(event.pointerId);
   }
 };
 return <div className="site">
  <header className="header"><div className="container nav"><Brand/><nav className={menu?"navlinks open":"navlinks"} aria-label="Menu principal">{[["Início","#inicio"],["Serviços","#servicos"],["Sobre","#sobre"],["Como funciona","#processo"],["Contato","#contato"]].map(([t,h])=><a key={h} href={h} onClick={()=>setMenu(false)}>{t}</a>)}</nav><ContactButton className="header-cta"/><button className="menu-toggle" aria-label={menu?"Fechar menu":"Abrir menu"} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
  <main>
   <section className="hero" id="inicio"><div className="hero-image" style={{backgroundImage:`linear-gradient(90deg,rgba(11,15,54,.96) 0%,rgba(11,15,54,.84) 43%,rgba(11,15,54,.17) 100%),url('${photos.hero}')`}}/><div className="hero-lines" aria-hidden="true"><i/><i/><i/></div><div className="container hero-inner"><div className="hero-content"><span className="eyebrow light">COMUNICAÇÃO VISUAL QUE TRANSFORMA</span><h1>Sua marca ganha presença com <em>comunicação visual de impacto.</em></h1><p>Fachadas, adesivos, lonas, letras caixa, envelopamento e impressão digital. Soluções completas para destacar sua marca e atrair olhares.</p><div className="hero-actions"><ContactButton/></div></div></div><div className="hero-sign" aria-hidden="true"><div className="hero-sign-logo"><span className="hero-sign-mark"><i/><i/><i/></span><strong>SUL<br/>PRINT</strong></div><small>COMUNICAÇÃO VISUAL</small></div><img className="hero-person" src="/equipe-sulprint.svg?v=20261030-3" alt="Representante da Sulprint usando polo da empresa, com braços cruzados" loading="eager" fetchPriority="high" /><div className="hero-stamp">SUA MARCA<br/><strong>EM EVIDÊNCIA</strong><ArrowUpRight size={24}/></div></section>
   <section className="services section" id="servicos"><div className="container"><div className="section-top"><div><span className="eyebrow">NOSSOS SERVIÇOS</span><h2>Soluções completas<br/>em <em>comunicação visual.</em></h2></div><div className="section-aside"><p>Da ideia à instalação, desenvolvemos soluções que dão forma à identidade da sua empresa.</p><a className="text-link" href="#contato">Solicitar um projeto <ArrowUpRight size={17}/></a></div></div><div className="services-grid">{services.map(s=>{const Icon=s.icon;return <article key={s.title} className="service-card"><div className="service-image"><img src={s.image} alt={`Exemplo ilustrativo de ${s.title.toLowerCase()}`} loading="lazy"/></div><div className="service-detail"><span className="service-icon"><Icon size={20}/></span><div><h3>{s.title}</h3><p>{s.desc}</p></div></div></article>})}</div></div></section>
   <section className="manifesto" id="sobre"><div className="container manifesto-inner"><div><span className="eyebrow light">MAIS QUE IMPRESSÃO</span><h2>Não é só aparecer.<br/>É ser <em>lembrado.</em></h2></div><p>A comunicação visual certa conecta sua empresa às pessoas. Na Sulprint, cada detalhe é pensado para expressar o melhor da sua marca.</p><a className="btn btn-outline" href="#contato">Vamos criar juntos <ArrowUpRight size={18}/></a></div></section>
   <section className="facade-transform section" id="transforme-sua-fachada">
    <div className="container">
      <div className="facade-transform-heading">
        <div>
          <span className="eyebrow">TRANSFORME SUA FACHADA</span>
          <h2>O impacto de um bom projeto começa <em>na fachada.</em></h2>
          <p>Arraste a imagem e veja a mesma fachada com e sem o letreiro da Sulprint.</p>
        </div>
      </div>
      <div className="facade-compare-card">
        <div className="facade-compare-stage" role="group" aria-label="Comparação interativa: a mesma fachada, com ou sem a marca Sulprint" onPointerDown={startFacadeDrag} onPointerMove={moveFacadeDrag} onPointerUp={stopFacadeDrag} onPointerCancel={()=>{facadeDragging.current=false}} onLostPointerCapture={()=>{facadeDragging.current=false}}>
          <img className="facade-compare-photo" src="/fachada-sulprint-antes.svg?v=20261030-4" alt="Antes: a mesma fachada comercial, com o revestimento azul-marinho e sem o letreiro Sulprint" loading="lazy"/>
          <div className="facade-compare-after" style={{clipPath:`inset(0 0 0 ${facadePosition}%)`}} aria-hidden="true">
            <img className="facade-compare-photo" src="/fachada-sulprint-depois.svg?v=20261030-4" alt="" loading="lazy"/>
          </div>
          <span className="facade-compare-tag facade-compare-tag-before" style={{opacity:facadePosition>16?1:0}}>ANTES</span>
          <span className="facade-compare-tag facade-compare-tag-after" style={{opacity:facadePosition<84?1:0}}>DEPOIS</span>
          <div className="facade-compare-divider" style={{left:`${facadePosition}%`}} aria-hidden="true">
            <span className="facade-compare-grip">↔</span>
          </div>
        </div>
        <div className="facade-compare-footer">
          <div className="facade-compare-caption">
            <span className="facade-compare-caption-icon"><ArrowRight size={21}/></span>
            <span><strong>Arraste a imagem para comparar.</strong><small>A mesma fachada, com e sem o letreiro Sulprint. Simulação ilustrativa.</small></span>
          </div>
          <input className="facade-compare-range" type="range" min="0" max="100" step="1" value={facadePosition} onChange={event=>setFacadePosition(Number(event.target.value))} aria-label="Comparar fachada: arraste para mostrar mais ou menos do letreiro Sulprint" />
          <ContactButton className="facade-compare-cta">Quero transformar minha fachada</ContactButton>
        </div>
      </div>
    </div>
   </section>
   <section className="process section" id="processo"><div className="container"><div className="section-top"><div><span className="eyebrow">COMO FUNCIONA</span><h2>Do seu projeto à instalação,<br/><em>sem complicação.</em></h2></div><p className="section-aside">Um processo simples para transformar sua ideia em uma comunicação visual que faz diferença.</p></div><div className="steps">{[{n:"01",title:"Conte sua ideia",text:"Fale sobre o seu negócio e o que você precisa."},{n:"02",title:"Receba sua proposta",text:"Alinhamos as possibilidades para o seu projeto."},{n:"03",title:"Produção cuidadosa",text:"Seu material ganha forma com atenção aos detalhes."},{n:"04",title:"Sua marca em destaque",text:"É hora de transformar sua presença visual."}].map(s=><div className="step" key={s.n}><span className="step-no">{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><ChevronRight className="step-chevron"/></div>)}</div></div></section>
   <section className="contact" id="contato"><div className="contact-art" style={{backgroundImage:`linear-gradient(90deg,#10143f 0%,rgba(16,20,63,.94) 52%,rgba(16,20,63,.4) 100%),url('${photos.banner}')`}}/><div className="container contact-inner"><div><span className="eyebrow light">VAMOS CONVERSAR?</span><h2>Vamos dar vida<br/>ao seu <em>projeto?</em></h2><p>Conte o que você imagina. A Sulprint ajuda a transformar suas ideias em comunicação visual.</p></div><div className="contact-panel"><span className="contact-pill">ORÇAMENTO PERSONALIZADO</span><h3>Pronto para destacar sua marca?</h3><p>O link direto de orçamento será configurado na próxima etapa. Enquanto isso, conheça nosso Instagram.</p><a className="btn btn-pink" href="https://www.instagram.com/sulprintbr/" target="_blank" rel="noopener noreferrer"><Instagram size={19}/> Visitar Instagram <ArrowUpRight size={18}/></a></div></div></section>
  </main>
  <footer className="footer"><div className="container footer-inner"><Brand/><span>Comunicação visual feita para destacar a sua marca.</span><a href="https://www.instagram.com/sulprintbr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Sulprint"><Instagram size={20}/></a></div><div className="container footer-bottom">© {new Date().getFullYear()} Sulprint Comunicação Visual. <span>Projeto em desenvolvimento · imagens ilustrativas</span></div></footer>
 </div>
}