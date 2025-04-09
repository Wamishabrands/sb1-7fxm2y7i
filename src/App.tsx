import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Circle, Palette, Pencil, Layout } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { GeometricBackground } from './components/ui/geometric-background';
import { SignUp } from './components/auth/signup';
import { SignIn } from './components/auth/signin';

function Home() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <GeometricBackground>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">
              Design Excellence
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Wamisha Brands
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Academy
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed tracking-wide max-w-2xl mx-auto"
          >
            Master the art of graphic design with industry experts. Transform your creative passion into professional excellence.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white/[0.03] backdrop-blur-lg p-6 rounded-xl border border-white/[0.08]"
            >
              <Palette className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Brand Design</h3>
              <p className="text-white/60">Create compelling brand identities that leave lasting impressions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/[0.03] backdrop-blur-lg p-6 rounded-xl border border-white/[0.08]"
            >
              <Layout className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Digital Design</h3>
              <p className="text-white/60">Master digital tools and create stunning visual content.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-white/[0.03] backdrop-blur-lg p-6 rounded-xl border border-white/[0.08]"
            >
              <Pencil className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Illustration</h3>
              <p className="text-white/60">Develop your illustration skills and bring ideas to life.</p>
            </motion.div>
          </div>

          <Link to="/signup">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
            >
              Start Learning Today
            </motion.button>
          </Link>
        </div>
      </div>
    </GeometricBackground>
  );
}

function EmbeddedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate('/');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', width: '100%', maxWidth: '100%' }}>
      <iframe
        src="https://blacbots.com/course/b4a1db86-cc09-43cc-9ec4-6f59895cb859/start"
        title="Graphic Design Mastery with Canva"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-modals allow-downloads allow-presentation allow-top-navigation-by-user-action allow-storage-access-by-user-action"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          borderRadius: "0",
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/embedded-page" element={<EmbeddedPage />} />
        {/* Wildcard route to handle all other routes and redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
