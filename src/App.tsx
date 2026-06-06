import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X, ArrowRight, Star, Droplet, ShieldCheck, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-mesa-light flex flex-col items-center justify-center p-6"
          >
            <motion.div
              animate={{ rotate: [-20, 20, -20] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Leaf size={56} className="text-mesa-green mb-6" strokeWidth={1} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-serif font-semibold tracking-[0.3em] text-mesa-green"
            >
              MESA
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-xs tracking-widest text-mesa-green-light uppercase"
            >
              Menyiapkan Pengalaman Natural...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-mesa-light font-sans text-mesa-dark overflow-x-hidden relative transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100 flex flex-col'}`}>
        {/* Background Decorative Elements */}
        <div className="fixed top-[-100px] left-[-100px] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-mesa-accent-1 rounded-full blur-[80px] md:blur-[120px] opacity-60 z-0 pointer-events-none"></div>
        <div className="fixed bottom-[-50px] right-[-100px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-mesa-accent-2 rounded-full blur-[100px] md:blur-[140px] opacity-70 z-0 pointer-events-none"></div>

        {/* Navigation */}
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
            isScrolled ? 'bg-white/20 backdrop-blur-md border-b border-white/40 py-4 shadow-sm' : 'bg-transparent py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="text-2xl font-serif font-semibold tracking-widest text-mesa-green">
              MESA
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10 text-sm tracking-widest uppercase font-bold text-mesa-green-light">
              <a href="#filosofi" className="hover:text-mesa-green transition-colors">Filosofi</a>
              <a href="#manfaat" className="hover:text-mesa-green transition-colors">Manfaat</a>
              <a href="#produk" className="hover:text-mesa-green transition-colors">Produk</a>
              <a href="#ulasan" className="hover:text-mesa-green transition-colors">Ulasan</a>
            </div>

            <div className="hidden md:block">
              <button className="border border-mesa-green text-mesa-green px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-mesa-green hover:text-white transition-all duration-300">
                Belanja Sekarang
              </button>
            </div>

            {/* Mobile hamburger */}
            <button 
              className="md:hidden text-mesa-green"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div 
          className={`fixed inset-0 bg-mesa-light z-40 pt-24 px-6 md:hidden flex flex-col space-y-6 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#filosofi" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif border-b border-mesa-green/20 pb-4 text-mesa-dark">Filosofi</a>
          <a href="#manfaat" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif border-b border-mesa-green/20 pb-4 text-mesa-dark">Manfaat</a>
          <a href="#produk" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif border-b border-mesa-green/20 pb-4 text-mesa-dark">Produk</a>
          <a href="#ulasan" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif border-b border-mesa-green/20 pb-4 text-mesa-dark">Ulasan</a>
          
          <button onClick={() => setMobileMenuOpen(false)} className="bg-mesa-green text-white px-6 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-center w-full mt-4">
            Belanja Sekarang
          </button>
        </motion.div>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className=""
              >
                <span className="text-sm font-semibold tracking-[0.3em] uppercase mb-4 block text-mesa-green">
                  Kemurnian Alam, Relevansi Masa Kini
                </span>
                <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 text-mesa-dark">
                  Kembalikan <br />
                  <span className="italic font-normal text-mesa-green">Cahaya Alami</span> <br />
                  Kulitmu.
                </h1>
                <p className="text-lg text-mesa-green-light leading-relaxed mb-10 max-w-[440px]">
                  Diformulasikan secara eksklusif dengan 100% bahan botani pilihan untuk merawat, menutrisi, dan melindungi kulit wajah secara paripurna.
                </p>
                <div className="flex items-center gap-6">
                  <a href="#produk" className="bg-mesa-green text-white px-10 py-4 rounded-full text-sm font-medium tracking-wide shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center group">
                    Temukan Produk
                    <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="relative"
              >
                <div className="aspect-[4/5] relative w-full max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-mesa-green/5 rounded-[40px] rotate-6 transform transition-transform md:group-hover:rotate-12"></div>
                  <div className="relative w-full h-full glass-card rounded-[40px] p-6 lg:p-8 flex flex-col justify-between overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop" 
                      alt="MESA Natural Serum" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mesa-light/90 via-transparent to-transparent"></div>
                    <div className="relative z-10 flex justify-between items-start">
                      <div className="bg-white/80 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter text-mesa-green backdrop-blur-md">Best Seller</div>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="relative z-10 glass-panel p-6 rounded-3xl mt-auto"
                    >
                      <div className="flex items-center space-x-1 mb-2 text-yellow-500">
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                      </div>
                      <p className="text-sm font-serif font-medium leading-snug">"Teksturnya sangat ringan, kulit terasa jauh lebih sehat."</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Filosofi Section */}
          <section id="filosofi" className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square relative w-full max-w-lg mx-auto group">
                  <div className="absolute inset-0 bg-mesa-green/5 rounded-[40px] -rotate-3 transition-transform duration-500 group-hover:-rotate-6"></div>
                  <div className="w-full h-full glass-card rounded-[40px] overflow-hidden p-4 relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=1000&auto=format&fit=crop" 
                      alt="Natural Beauty" 
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 leading-tight text-mesa-dark">Keindahan yang Berasal dari <span className="italic text-mesa-green">Kebaikan Bumi</span>.</h2>
                <p className="text-mesa-green-light text-lg mb-6 leading-relaxed">
                  Kami percaya bahwa alam telah menyediakan semua yang dibutuhkan oleh kulit. Di MESA, kami menolak penggunaan bahan kimia agresif. Setiap tetes produk kami adalah hasil ekstraksi dari tumbuhan organik pilihan.
                </p>
                <p className="text-mesa-green-light text-lg leading-relaxed">
                  Tujuan kami bukan mengubah wajah Anda, melainkan menonjolkan kecantikan alami yang sudah ada, membuatnya bersinar lebih terang dan sehat.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Manfaat Section */}
          <section id="manfaat" className="py-24 px-6 md:px-12 relative z-10 glass-panel border-t border-white/40">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-center max-w-2xl mx-auto mb-16"
              >
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-mesa-green block mb-4">Kenapa MESA?</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-mesa-dark">Standar Baru Perawatan Kulit</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    icon: <Leaf size={28} strokeWidth={1.5} />,
                    title: "100% Vegan & Natural",
                    desc: "Tanpa paraben, tanpa sulfat. Formulanya sepenuhnya bersumber dari alam, aman untuk semua jenis kulit."
                  },
                  {
                    icon: <Droplet size={28} strokeWidth={1.5} />,
                    title: "Hidrasi Mendalam",
                    desc: "Molekul bahan aktif kami meresap ke lapisan kulit terdalam, mengunci kelembapan hingga 24 jam."
                  },
                  {
                    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
                    title: "Teruji Dermatologis",
                    desc: "Telah melewati serangkaian uji klinis, terbukti tidak memicu iritasi bahkan pada kulit sensitif."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="h-full relative"
                  >
                    <div className="glass-card p-10 rounded-[40px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out flex flex-col items-start h-full">
                      <div className="w-14 h-14 bg-mesa-cream rounded-full flex items-center justify-center text-mesa-green mb-6 border border-mesa-green/10">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-serif font-medium mb-3 text-mesa-dark">{item.title}</h3>
                      <p className="text-mesa-green-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section id="produk" className="py-24 px-6 md:px-12 relative z-10 glass-panel border-t border-white/40">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-mesa-dark">Koleksi <span className="italic text-mesa-green">Eksklusif</span></h2>
                  <p className="text-mesa-green-light max-w-md text-lg leading-relaxed">
                    Rangkaian produk pilihan MESA untuk rutinitas perawatan kulit yang elegan dan efektif.
                  </p>
                </motion.div>
                <motion.a 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  href="#" 
                  className="flex items-center text-sm font-bold tracking-widest uppercase text-mesa-green hover:underline underline-offset-8 transition-colors"
                >
                  Lihat Semuanya <ArrowRight size={16} className="ml-2" />
                </motion.a>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Botanical Restoring Serum",
                    price: "Rp 350.000",
                    cat: "Serum Wajah",
                    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    name: "Purifying Green Cleanser",
                    price: "Rp 210.000",
                    cat: "Pembersih",
                    img: "https://images.unsplash.com/photo-1615397323136-128a30dbf3e5?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    name: "Intense Moisture Creme",
                    price: "Rp 420.000",
                    cat: "Pelembap",
                    img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
                  }
                ].map((product, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group cursor-pointer glass-card rounded-[40px] p-6 flex flex-col justify-between"
                  >
                    <div className="aspect-[4/5] overflow-hidden rounded-[24px] mb-6 relative transition-all duration-500">
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 mix-blend-overlay"
                      />
                      <div className="absolute inset-0 bg-mesa-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex justify-between items-start flex-1">
                      <div>
                        <span className="text-[10px] font-bold text-mesa-green uppercase tracking-widest mb-2 block">{product.cat}</span>
                        <h3 className="text-xl font-serif font-medium text-mesa-dark">{product.name}</h3>
                      </div>
                      <span className="text-lg font-medium text-mesa-green">{product.price}</span>
                    </div>
                    <button className="w-full mt-6 py-3 border border-mesa-green/20 rounded-2xl text-mesa-green font-medium hover:bg-mesa-green hover:text-white transition-colors">Tambah ke Keranjang</button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="ulasan" className="py-24 px-6 md:px-12 relative z-10 glass-panel border-t border-white/40">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center glass-card rounded-[40px] p-12 md:p-20 relative"
            >
              <Sparkles className="mx-auto mb-8 text-mesa-green/40 absolute top-12 left-1/2 -translate-x-1/2" size={32} strokeWidth={1} />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pt-10"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-light leading-snug mb-10 text-mesa-dark italic">
                  "Semenjak menggunakan MESA, kulit saya bebas dari masalah kusam dan kering. Pendekatan naturalnya membuat saya jatuh cinta pada pandangan pertama."
                </h2>
                <div className="flex items-center justify-center flex-col">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
                    alt="Customer" 
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white shadow-lg"
                  />
                  <p className="font-bold text-xs uppercase tracking-widest text-mesa-green">Aline Daniera</p>
                  <p className="text-sm text-mesa-green-light mt-1">Verified Customer</p>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </main>

        {/* Footer */}
        <footer className="glass-panel border-t border-white/40 pt-20 pb-10 px-6 md:px-12 relative z-10 mt-auto">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-serif font-semibold tracking-widest text-mesa-green mb-6">MESA</h3>
              <p className="max-w-sm text-mesa-green-light mb-8 leading-relaxed">
                Membawa kemurnian alam langsung ke meja rias Anda. Skincare eksklusif untuk perawatan natural dan autentik.
              </p>
              <div className="flex space-x-4">
                <input type="email" placeholder="Alamat email Anda" className="bg-white/40 backdrop-blur-md border border-white/60 px-4 py-3 rounded-full text-sm outline-none focus:ring-1 focus:ring-mesa-green flex-grow max-w-[250px] text-mesa-dark placeholder-mesa-green/50" />
                <button className="bg-mesa-green text-white px-6 py-3 rounded-full text-xs tracking-widest uppercase hover:scale-105 active:scale-95 transition-all">
                  Daftar
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold uppercase tracking-widest text-xs mb-6">Eksplorasi</h4>
              <ul className="space-y-4 opacity-70 text-sm">
                <li><a href="#filosofi" className="hover:text-mesa-green transition-colors">Filosofi</a></li>
                <li><a href="#produk" className="hover:text-mesa-green transition-colors">Katalog Produk</a></li>
                <li><a href="#manfaat" className="hover:text-mesa-green transition-colors">Bahan Natural</a></li>
                <li><a href="#ulasan" className="hover:text-mesa-green transition-colors">Ulasan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold uppercase tracking-widest text-xs mb-6">Bantuan</h4>
              <ul className="space-y-4 opacity-70 text-sm">
                <li><a href="#" className="hover:text-mesa-green transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-mesa-green transition-colors">Pengiriman & Retur</a></li>
                <li><a href="#" className="hover:text-mesa-green transition-colors">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-mesa-green transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-mesa-green text-xs border-t border-mesa-green/20 pt-8 mt-8">
            <p>&copy; {new Date().getFullYear()} MESA Skincare. Hak Cipta Dilindungi.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
              <a href="#" className="hover:text-mesa-dark transition-colors">Instagram</a>
              <a href="#" className="hover:text-mesa-dark transition-colors">Pinterest</a>
              <a href="#" className="hover:text-mesa-dark transition-colors">TikTok</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

