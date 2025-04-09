import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { motion } from 'framer-motion';
import { GeometricBackground } from '../ui/geometric-background';
import { ArrowLeft } from 'lucide-react';

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      window.location.href = 'https://blacbots.com/course/b4a1db86-cc09-43cc-9ec4-6f59895cb859/start';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <GeometricBackground>
      <div className="relative z-10 w-full max-w-md mx-auto px-4 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h2>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-white/60 mb-2 text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div>
              <label className="block text-white/60 mb-2 text-sm" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg px-4 py-2 font-medium hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
            <p className="text-center text-white/60 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-cyan-400 hover:text-cyan-300">
                Sign Up
              </Link>
            </p>
          </form>
        </motion.div>

        {/*  "Go Back to Main Page" Button (Bottom Left - Fixed) */}
        <Link to="/" className="fixed bottom-8 left-8 text-white/60 hover:text-white flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Go Back to Main Page
        </Link>
      </div>
    </GeometricBackground>
  );
}