import { Mail, Linkedin, Github, Instagram, FileText } from 'lucide-react';

const Card = ({ children, className = '', href, ...props }) => {
  const baseStyles = "bg-white rounded-3xl shadow-lg transition-all hover:shadow-lg hover:-translate-y-0.5 p-6 overflow-hidden";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} block ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

const instagramPosts = [
  { img: "instagram/1.png", link: "https://www.instagram.com/p/C4LHhhPBnKP/?img_index=1" },
  { img: "instagram/2.png", link: "https://www.instagram.com/p/C37t2mSu7bS/?img_index=1" },
  { img: "instagram/3.png", link: "https://www.instagram.com/p/C352rgWvmcn/" },
  { img: "instagram/4.png", link: "https://www.instagram.com/p/DDhfOWROUq8/" },
  { img: "instagram/5.png", link: "https://www.instagram.com/p/C41JNVKPfdH/?img_index=1" },
  { img: "instagram/6.png", link: "https://www.instagram.com/p/DEQ4Vthh6gS/" }
];

const computariaPosts = [
  { img: "computaria/1.jpg", link: "https://www.instagram.com/p/DMTVhtxJf0H/" },
  { img: "computaria/2.jpg", link: "https://www.instagram.com/p/DGGQPFHMjEf/" },
  { img: "computaria/3.jpg", link: "https://www.instagram.com/p/CwSpXmivMaO/" },
  { img: "computaria/4.jpg", link: "https://www.instagram.com/p/CpnP-ZHOF1h/" },
  { img: "computaria/5.jpg", link: "https://www.instagram.com/p/Ciq4YbcrbIX/" },
  { img: "computaria/6.jpg", link: "https://www.instagram.com/p/Ciqyaclr3HL/" }
];

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center p-10 md:p-10 bg-gray-50">
      
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[500px_1fr] gap-8">
        
        <aside className="md:sticky md:top-5 self-start">
          <div className="flex flex-col items-start gap-6 h-full py-4 px-2">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-caccp-red flex items-center justify-center shadow-inner shrink-0 transition-transform hover:scale-105">
               <img src={`${import.meta.env.BASE_URL}icone.svg`} alt="CACCP" className="w-full h-auto p-6" />
            </div>

            <div className="text-left">
              <h1 className="text-[44px] font-extrabold text-gray-950 tracking-tight leading-none">
                CACCP - UFV
              </h1>
              <p className="text-[20px] text-[#565656] mt-4 leading-[1.6]">
                Centro Acadêmico de Ciência da Computação da Universidade Federal de Viçosa
              </p>
              
              <div className="flex gap-3 mt-3">
                <a href="https://github.com/caccpufv" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-xl hover:bg-caccp-red transition shadow-sm hover:shadow-md"><Github size={22} className="text-white" /></a>
                <a href="http://linkedin.com/company/caccp-ufv" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-xl hover:bg-caccp-red transition shadow-sm hover:shadow-md"><Linkedin size={22} className="text-white" /></a>
                <a href="mailto:caccp@ufv.br" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-xl hover:bg-caccp-red transition shadow-sm hover:shadow-md"><Mail size={22} className="text-white" /></a>
              </div>
            </div>
          </div>
        </aside>

        <section className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card href="https://instagram.com/caccp.ufv" className="aspect-square hover:border-caccp-red border-2 border-transparent flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4 w-full">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white p-1.5 shadow-sm">
                  <Instagram className="w-full h-full" />
                </div>
                <span className="font-normal text-sm text-gray-800 leading-none">@caccp.ufv</span>
              </div>
              <div className="bg-[#0095F6] text-white text-xs font-bold px-5 py-2 rounded-xl shadow-sm transition-colors hover:bg-[#0074cc] mt-1">Seguir</div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 flex-1 content-end">
              {instagramPosts.map((post, index) => (
                <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="group aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-inner">
                  <img src={`${import.meta.env.BASE_URL}${post.img}`} alt="Post do Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </a>
              ))}
            </div>
          </Card>

          <Card href="https://drive.google.com/drive/folders/1C5ncYnR4Avk0WW9KQdPKHzMDovgNx-Aq?usp=sharing" className="aspect-square hover:border-caccp-red border-2 border-transparent flex flex-col justify-between relative group overflow-hidden bg-gray-50">
            <div className="relative z-10 p-2">
              <h3 className="text-3xl font-bold text-gray-800">
                Documentos
              </h3>
              <p className="text-gray-500 mt-2">
                <br></br>
                <br></br>Acesse os documentos públicos do CA:
                <br></br>1 - Atas;
                <br></br>2 - Estatuto e regimentos;
                <br></br>3 - Prestação de contas;
                <br></br>4 - Entre outros.
              </p>
            </div>

            <span className="inline-flex items-center text-gray-500 font-semibold text-sm border-b border-gray-500 pb-0.5 group-hover:border-gray-500 transition-colors">
              Abrir Drive
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>

            <div className="absolute -bottom-12 -right-12 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
              <div className="absolute bottom-4 right-4 w-40 h-48 bg-gray-200 rounded-xl border-2 border-white shadow-sm rotate-6"></div>
              <div className="absolute bottom-2 right-2 w-40 h-48 bg-gray-100 rounded-xl border-2 border-white shadow-md rotate-3"></div>
              <div className="relative w-40 h-48 bg-white rounded-xl border-2 border-gray-100 shadow-xl flex flex-col items-center justify-center gap-2">
                <FileText className="text-gray-400 w-12 h-12" />
                <div className="w-16 h-2 bg-gray-100 rounded-full"></div>
                <div className="w-10 h-2 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </Card>
          
          <Card href="https://forms.gle/sQr8WEAzWKVApmHi8" className="aspect-square hover:border-caccp-red border-transparent flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute inset-0">
              <img src={`${import.meta.env.BASE_URL}ouvidoria.png`} alt="Telefone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>

            <div className="mt-auto mr-auto bg-black/20 p-2 rounded-full backdrop-blur-md hover:bg-black/40 transition">
              <span className="block border-white border-t-2 border-r-2 w-3 h-3 rotate-45 mr-1 mt-0.5" />
            </div>
          </Card>
          
          <Card href="https://drive.google.com/drive/folders/1aHYfvVksm1b695eqvBLtO7htXFprdtK6?usp=sharing" className="aspect-square hover:border-caccp-red border-transparent flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute inset-0">
              <img src={`${import.meta.env.BASE_URL}images.png`} alt="Eventos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>

            <div className="relative z-10 -mt-4">
              <h3 className="text-white font-bold text-3xl drop-shadow-md">
                Fotos dos <br/> Eventos
              </h3>
            </div>

            <div className="relative z-10 mt-auto mr-auto bg-black/10 p-2 rounded-full backdrop-blur-md hover:bg-white/40 transition">
              <span className="block border-white border-t-2 border-r-2 w-3 h-3 rotate-45 mr-1 mt-0.5" />
            </div>
          </Card>

          <Card href="https://www.instagram.com/computaria.ufv/" className="aspect-square hover:border-caccp-red border-2 border-transparent flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4 w-full">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white p-1.5 shadow-sm">
                  <Instagram className="w-full h-full" />
                </div>
                <span className="font-normal text-sm text-gray-800 leading-none">@computaria.ufv</span>
              </div>
              <div className="bg-[#0095F6] text-white text-xs font-bold px-5 py-2 rounded-xl shadow-sm transition-colors hover:bg-[#0074cc] mt-1">Seguir</div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 flex-1 content-end">
              {computariaPosts.map((post, index) => (
                <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="group aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-inner">
                  <img src={`${import.meta.env.BASE_URL}${post.img}`} alt="Post da Computaria" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </a>
              ))}
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App