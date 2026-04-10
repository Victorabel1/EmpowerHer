/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  BookOpen, 
  Users, 
  MessageSquare, 
  User, 
  Menu, 
  Bell, 
  ArrowRight, 
  Search, 
  Filter, 
  Download, 
  HelpCircle, 
  Phone, 
  Mail, 
  Plus,
  Star,
  CheckCircle2,
  Play,
  Lock,
  Heart,
  MessageCircle,
  Share2,
  Rocket,
  Sparkles,
  Mic,
  Send,
  Paperclip,
  AlertCircle,
  GraduationCap,
  Calendar,
  ChevronRight,
  MoreHorizontal,
  ThumbsUp,
  Siren
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const TopBar = ({ title = "EmpowerHer" }: { title?: string }) => (
  <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md flex justify-between items-center px-6 h-16 border-b border-outline-variant/10">
    <div className="flex items-center gap-4">
      <button className="text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95">
        <Menu size={24} />
      </button>
      <h1 className="text-2xl font-bold text-primary font-headline tracking-tight">{title}</h1>
    </div>
    <div className="flex items-center gap-2">
      <button className="text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95">
        <Bell size={24} />
      </button>
      <div className="w-8 h-8 rounded-full bg-primary-fixed overflow-hidden border border-primary/10">
        <img 
          src="https://picsum.photos/seed/woman1/100/100" 
          alt="Profile" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </header>
);

const BottomNav = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/courses', icon: BookOpen, label: 'Courses' },
    { path: '/mentors', icon: Users, label: 'Mentors' },
    { path: '/social', icon: MessageSquare, label: 'Social' },
    { path: '/chat', icon: Sparkles, label: 'Chat' },
    { path: '/support', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-1 pb-6 pt-3 bg-surface-container-lowest shadow-[0_-8px_24px_rgba(15,82,56,0.1)] rounded-t-[1.5rem] border-t border-outline-variant/10">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center px-2 py-1.5 transition-all duration-200 rounded-[1.5rem]",
              isActive ? "bg-primary-fixed text-primary" : "text-on-surface-variant hover:text-primary"
            )}
          >
            <item.icon size={18} fill={isActive ? "currentColor" : "none"} />
            <span className="text-[9px] font-medium tracking-wide uppercase mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="pt-20 pb-40 px-6 max-w-2xl mx-auto"
  >
    {children}
  </motion.div>
);

// --- Screens ---

const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-4 bg-primary rounded-full mb-6 shadow-xl">
          <Rocket className="text-on-primary" size={40} />
        </div>
        <h1 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-2">EmpowerHer</h1>
        <p className="text-on-surface-variant text-lg px-4">Your journey to empowerment starts here</p>
      </div>

      <div className="w-full max-w-md bg-surface-container-lowest asymmetric-card p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary-fixed rounded-full blur-3xl opacity-30"></div>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold tracking-wide text-on-surface ml-1 uppercase">Email or Phone</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
              <input 
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary transition-all placeholder:text-outline/60" 
                placeholder="Enter your email or phone" 
                type="text"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="block text-sm font-semibold tracking-wide text-on-surface uppercase">Password</label>
              <button type="button" className="text-xs font-semibold text-primary hover:underline">Forgot Password?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
              <input 
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary transition-all placeholder:text-outline/60" 
                placeholder="••••••••" 
                type="password"
              />
            </div>
          </div>
          <button className="w-full py-4 px-6 bg-primary text-on-primary font-headline font-bold text-lg rounded-2xl shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all flex justify-center items-center gap-2 group">
            <span>Sign In</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </form>

        <div className="my-8 flex items-center justify-center space-x-4">
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
          <span className="text-xs font-semibold text-outline uppercase tracking-widest">or continue with</span>
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low rounded-xl font-semibold text-sm hover:bg-surface-container-high transition-colors">
            <span className="text-blue-600 font-bold">G</span>
            <span>Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low rounded-xl font-semibold text-sm hover:bg-surface-container-high transition-colors">
            <span className="text-blue-800 font-bold">f</span>
            <span>Facebook</span>
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-on-surface-variant font-medium">
          Don't have an account? 
          <button className="text-secondary font-bold hover:underline ml-1">Create an Account</button>
        </p>
      </div>
    </div>
  );
};

const HomeScreen = () => (
  <PageWrapper>
    <section className="mb-8">
      <h2 className="text-4xl font-extrabold font-headline text-primary tracking-tight leading-tight">
        Welcome back, Adaora.
      </h2>
      <p className="text-on-surface-variant font-medium mt-1">Your journey of growth is blooming. Here is where your ambition meets action today.</p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="asymmetric-card bg-surface-container-lowest p-8 editorial-shadow flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-primary-fixed rounded-xl">
            <GraduationCap className="text-primary" size={24} />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-outline">Progress</span>
        </div>
        <div>
          <div className="text-5xl font-black text-primary font-headline mb-1">12</div>
          <div className="text-on-surface-variant font-medium">Courses Completed</div>
        </div>
      </div>
      <div className="asymmetric-card bg-primary text-on-primary p-8 editorial-shadow flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-primary-container rounded-xl">
            <Star className="text-on-primary" size={24} />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase opacity-70">Achievements</span>
        </div>
        <div>
          <div className="text-5xl font-black font-headline mb-1">04</div>
          <div className="text-primary-fixed font-medium">Certificates Earned</div>
        </div>
      </div>
      <div className="asymmetric-card bg-secondary-container text-on-secondary-container p-8 editorial-shadow flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-secondary rounded-xl">
            <Sparkles className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase opacity-70">Capabilities</span>
        </div>
        <div>
          <div className="text-5xl font-black font-headline mb-1">08</div>
          <div className="text-on-secondary-container font-medium">Skills Mastered</div>
        </div>
      </div>
    </div>

    <section className="mb-12">
      <h3 className="text-2xl font-bold text-primary font-headline mb-6">Weekly Goal</h3>
      <div className="bg-surface-container-low rounded-xl p-8 editorial-shadow">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold">Active Learning</span>
          <span className="text-primary font-bold">75%</span>
        </div>
        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-surface-variant" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
            <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.9" strokeDashoffset="138.2" strokeWidth="12" strokeLinecap="round"></circle>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-black font-headline text-on-surface">15/20</span>
            <span className="text-xs font-medium text-outline uppercase tracking-wider">Hours</span>
          </div>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed text-center mb-6">
          Adaora, you are only 5 hours away from reaching your goal! Keep pushing, the community is rooting for you.
        </p>
        <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold tracking-wide active:scale-95 transition-all">
          Log Today's Hours
        </button>
      </div>
    </section>

    <section className="mb-12">
      <h3 className="text-2xl font-bold text-primary font-headline mb-6">My Roadmap</h3>
      <div className="bg-surface-container-lowest rounded-xl p-8 editorial-shadow border border-outline-variant/10">
        <div className="relative">
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-outline-variant/30"></div>
          <div className="space-y-12 relative">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-primary-fixed rounded-full flex items-center justify-center z-10">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Completed</span>
                <h4 className="text-xl font-bold font-headline mb-2">Introduction to Financial Literacy</h4>
                <p className="text-on-surface-variant text-sm">Foundational concepts of budgeting and savings tailored for small business owners.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded-full flex items-center justify-center z-10 border-4 border-surface">
                <Play className="text-white" size={20} fill="currentColor" />
              </div>
              <div className="flex-grow p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 block">Currently Learning</span>
                <h4 className="text-xl font-bold font-headline mb-2">Sustainable Agriculture Techniques</h4>
                <p className="text-on-surface-variant text-sm mb-4">Mastering organic farming methods and crop rotation for high-yield harvests.</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-stone-200 overflow-hidden">
                    <img src="https://picsum.photos/seed/sarah/100/100" alt="Mentor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-xs font-semibold text-on-surface-variant italic">Mentored by Dr. Sarah</span>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-start opacity-50">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-variant rounded-full flex items-center justify-center z-10">
                <Lock className="text-outline" size={20} />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1 block">Up Next</span>
                <h4 className="text-xl font-bold font-headline mb-1">Micro-Enterprise Management</h4>
                <p className="text-on-surface-variant text-sm">Scaling your hobby into a sustainable small-scale commercial enterprise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="mt-12 rounded-full p-6 bg-gradient-to-r from-tertiary-container to-tertiary flex flex-wrap items-center justify-between gap-4 editorial-shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center">
          <Users className="text-tertiary" size={24} />
        </div>
        <div>
          <h5 className="text-white font-bold font-headline">Community Pulse</h5>
          <p className="text-tertiary-fixed text-xs">42 women from Lagos just finished 'Digital Marketing Basics'.</p>
        </div>
      </div>
      <button className="px-6 py-2 bg-white text-tertiary rounded-full font-bold text-sm active:scale-95 transition-transform">Celebrate Them</button>
    </div>
  </PageWrapper>
);

const SupportScreen = () => (
  <PageWrapper>
    <section className="relative overflow-hidden bg-secondary-container rounded-xl p-8 shadow-lg mb-10">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-on-secondary-container leading-tight">Need immediate help?</h2>
          <p className="text-on-secondary-container/80 text-lg font-medium">Our counselors are available 24/7 for support and guidance.</p>
        </div>
        <button className="bg-on-secondary-container text-surface flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg active:scale-90 transition-transform shadow-xl">
          <Siren className="text-white" size={24} />
          Emergency Assistance
        </button>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>
    </section>

    <div className="space-y-2 mb-8">
      <span className="text-primary font-bold tracking-widest uppercase text-[10px]">Knowledge Base</span>
      <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">Support & Resources</h2>
    </div>

    <div className="grid grid-cols-1 gap-6 mb-10">
      <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between shadow-sm border-l-4 border-primary">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg">
            <BookOpen className="text-primary" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-on-surface font-headline">Resource Library</h3>
          <p className="text-on-surface-variant leading-relaxed">Access our comprehensive collection of downloadable guides, legal frameworks, and health manuals designed specifically for you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-surface-container-low rounded-lg flex items-center gap-3 group cursor-pointer hover:bg-primary-fixed transition-colors">
              <Download className="text-primary" size={20} />
              <span className="text-sm font-semibold">Entrepreneurship 101</span>
            </div>
            <div className="p-4 bg-surface-container-low rounded-lg flex items-center gap-3 group cursor-pointer hover:bg-primary-fixed transition-colors">
              <Download className="text-primary" size={20} />
              <span className="text-sm font-semibold">Rights & Legal Aid</span>
            </div>
          </div>
        </div>
        <button className="mt-8 text-primary font-bold flex items-center gap-2 group">
          View all resources 
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      </div>

      <div className="bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between shadow-lg">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-headline">Common Questions</h3>
          <ul className="space-y-4 mt-6">
            {["How do I find a mentor?", "Are the courses free?", "Privacy of my data?"].map((q, i) => (
              <li key={i} className="flex items-start gap-3 border-b border-on-primary/10 pb-3">
                <HelpCircle className="text-primary-fixed" size={18} />
                <span className="text-sm font-medium">{q}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-6 bg-surface text-primary py-3 rounded-xl font-bold active:scale-95 transition-all">
          Search FAQs
        </button>
      </div>
    </div>

    <section className="bg-surface-container-low rounded-xl p-8 mb-10">
      <h3 className="text-2xl font-bold text-on-surface mb-8 font-headline">Reach Out to Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full mb-4">
            <MessageCircle className="text-green-700" size={20} />
          </div>
          <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
          <p className="text-[10px] text-on-surface-variant mb-4">Fastest response time</p>
          <button className="text-primary font-bold text-sm hover:underline">+234 800 EMPOWER</button>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full mb-4">
            <Phone className="text-blue-700" size={20} />
          </div>
          <h4 className="font-bold text-lg mb-1">Direct Call</h4>
          <p className="text-[10px] text-on-surface-variant mb-4">Talk to an agent now</p>
          <button className="text-primary font-bold text-sm hover:underline">0800 123 4567</button>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-amber-100 flex items-center justify-center rounded-full mb-4">
            <Mail className="text-amber-700" size={20} />
          </div>
          <h4 className="font-bold text-lg mb-1">Email Support</h4>
          <p className="text-[10px] text-on-surface-variant mb-4">For detailed inquiries</p>
          <button className="text-primary font-bold text-sm hover:underline">help@empowerher.ng</button>
        </div>
      </div>
    </section>
  </PageWrapper>
);

const CoursesScreen = () => (
  <PageWrapper>
    <section className="mb-8">
      <h1 className="font-headline text-4xl font-extrabold text-primary mb-2 leading-tight">
        Your Journey of <br/><span className="text-secondary">Growth Begins.</span>
      </h1>
      <p className="text-on-surface-variant max-w-md mb-8">Discover courses tailored to empower your future, from traditional craftsmanship to digital innovation.</p>
      
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
          <input 
            className="w-full pl-12 pr-4 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary placeholder:text-outline-variant text-on-surface transition-all" 
            placeholder="Search for courses..." 
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-primary text-on-primary px-6 py-4 rounded-xl font-medium flex items-center gap-2 active:scale-95 transition-all">
            <Filter size={18} />
            Filter
          </button>
          <div className="bg-surface-container-low p-1 rounded-xl flex items-center flex-1">
            <button className="flex-1 py-3 bg-surface-container-lowest text-primary rounded-lg font-semibold text-sm shadow-sm">Free</button>
            <button className="flex-1 py-3 text-on-surface-variant font-medium text-sm">Premium</button>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="font-headline text-2xl font-bold text-on-surface">Vocational Skills</h2>
          <p className="text-sm text-on-surface-variant mt-1">Master traditional crafts and local industries</p>
        </div>
        <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline">
          View All <ChevronRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {[
          { title: "Advanced Tailoring & Design", dur: "8 Weeks", level: "Intermediate", type: "Free", img: "tailor" },
          { title: "Sustainable Agriculture", dur: "12 Weeks", level: "Beginner", type: "Premium", img: "farm" },
          { title: "Artisanal Soap Production", dur: "4 Weeks", level: "Beginner", type: "Free", img: "soap" }
        ].map((course, i) => (
          <div key={i} className="asymmetric-card bg-surface-container-lowest group overflow-hidden transition-all hover:shadow-xl border border-outline-variant/10">
            <div className="h-48 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={`https://picsum.photos/seed/${course.img}/600/400`} 
                alt={course.title}
                referrerPolicy="no-referrer"
              />
              <div className={cn(
                "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                course.type === "Free" ? "bg-secondary-container text-on-secondary-container" : "bg-primary-fixed text-primary"
              )}>
                {course.type}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline text-lg font-bold leading-tight mb-2">{course.title}</h3>
              <div className="flex items-center gap-4 text-xs font-medium text-outline">
                <div className="flex items-center gap-1"><Calendar size={14} /> {course.dur}</div>
                <div className="flex items-center gap-1"><Rocket size={14} /> {course.level}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </PageWrapper>
);

const MentorsScreen = () => (
  <PageWrapper>
    <section className="mb-8">
      <h2 className="font-headline text-2xl font-bold mb-6 text-primary tracking-tight">Featured Mentor</h2>
      <div className="relative overflow-hidden asymmetric-card bg-primary-container text-on-primary-container p-8 group editorial-shadow">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full -mr-20 -mt-20 blur-3xl opacity-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <img 
              src="https://picsum.photos/seed/mentor1/400/400" 
              alt="Mentor" 
              className="w-full aspect-square object-cover asymmetric-card shadow-xl ring-4 ring-primary-fixed/30"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Spotlight</span>
              <div className="flex text-primary-fixed">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <h3 className="font-headline text-3xl font-extrabold mb-2">Amina Yusuf</h3>
            <p className="text-primary-fixed text-lg font-medium mb-4">Founder, TechSheGrow Lagos</p>
            <p className="text-on-primary-container/90 text-sm leading-relaxed mb-6">
              Amina has over 15 years of experience in scaling social enterprises across West Africa. She specializes in strategic planning.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold shadow-lg active:scale-95 transition-all text-sm">
                Request Mentorship
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 gap-6">
      {[
        { name: "Nneka Obi", role: "Finance Strategy • Abuja", rating: "4.9", mentees: "12", img: "mentor2" },
        { name: "Sarah Williams", role: "UI/UX Design • Port Harcourt", rating: "5.0", mentees: "8", img: "mentor3" }
      ].map((mentor, i) => (
        <div key={i} className="bg-surface-container-lowest asymmetric-card shadow-sm hover:shadow-xl transition-all p-6 flex flex-col border border-outline-variant/10">
          <div className="flex items-start justify-between mb-4">
            <img 
              src={`https://picsum.photos/seed/${mentor.img}/200/200`} 
              alt={mentor.name} 
              className="w-20 h-20 object-cover asymmetric-card ring-2 ring-primary-fixed"
              referrerPolicy="no-referrer"
            />
            <div className="text-right">
              <div className="flex items-center justify-end text-secondary">
                <Star size={12} fill="currentColor" />
                <span className="text-xs font-bold ml-1">{mentor.rating}</span>
              </div>
              <p className="text-[10px] text-outline font-bold uppercase tracking-tighter">{mentor.mentees} Mentorees</p>
            </div>
          </div>
          <h4 className="font-headline text-xl font-bold text-primary">{mentor.name}</h4>
          <p className="text-secondary font-medium text-sm mb-3">{mentor.role}</p>
          <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold hover:bg-primary-container active:scale-95 transition-all mt-4">
            Request Mentorship
          </button>
        </div>
      ))}
    </section>
  </PageWrapper>
);

const SocialScreen = () => (
  <PageWrapper>
    <section className="bg-surface-container-lowest rounded-xl p-5 editorial-shadow mb-6">
      <div className="flex gap-4 items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0">
          <img src="https://picsum.photos/seed/me/100/100" alt="Me" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <button className="flex-1 bg-surface-container-low text-left px-6 py-3 rounded-full text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors">
          Share your progress, Amina...
        </button>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-outline-variant/15">
        <button className="flex items-center gap-2 px-3 py-2 text-primary font-medium hover:bg-primary-fixed/30 rounded-xl transition-colors">
          <BookOpen size={18} />
          <span className="text-xs">Photo</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-secondary font-medium hover:bg-secondary-fixed/30 rounded-xl transition-colors">
          <HelpCircle size={18} />
          <span className="text-xs">Ask Question</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-tertiary font-medium hover:bg-tertiary-fixed/30 rounded-xl transition-colors">
          <Sparkles size={18} />
          <span className="text-xs">Win</span>
        </button>
      </div>
    </section>

    <div className="space-y-6">
      <article className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow border border-outline-variant/10">
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high">
              <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="font-bold text-on-surface text-sm leading-tight">Chidinma Okafor</h3>
              <p className="text-xs text-on-surface-variant font-medium">2 hours ago • Tailoring Hub</p>
            </div>
          </div>
          <button className="p-2 text-outline hover:bg-surface-container-low rounded-full">
            <MoreHorizontal size={20} />
          </button>
        </div>
        <div className="px-5 pb-4">
          <p className="text-on-surface-variant text-[15px] leading-relaxed">
            Finally finished my first traditional Ankara gown! It took three days of practice but I'm so proud of the stitching. What do you girls think? 🧵✨
          </p>
        </div>
        <div className="mx-5 mb-4 rounded-xl overflow-hidden aspect-[4/3]">
          <img src="https://picsum.photos/seed/dress/600/450" alt="Work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="px-5 py-3 border-t border-outline-variant/10 flex items-center justify-between">
          <div className="flex items-center -space-x-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center border-2 border-white">
              <Heart size={12} className="text-white" fill="currentColor" />
            </div>
            <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center border-2 border-white">
              <ThumbsUp size={12} className="text-white" fill="currentColor" />
            </div>
            <span className="ml-4 text-xs font-semibold text-primary">24 sisters cheered</span>
          </div>
          <div className="text-xs text-on-surface-variant font-medium">6 comments</div>
        </div>
      </article>
    </div>
  </PageWrapper>
);

const ChatScreen = () => (
  <PageWrapper>
    <section className="py-8 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-primary-fixed rounded-full mb-4 flex items-center justify-center shadow-lg relative overflow-hidden">
        <img src="https://picsum.photos/seed/ayo/200/200" alt="Ayo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute bottom-0 right-1 w-4 h-4 bg-secondary rounded-full border-2 border-surface animate-pulse"></div>
      </div>
      <h2 className="font-headline text-3xl font-bold tracking-tight text-primary">Ayo, your empowerment guide</h2>
      <p className="text-on-surface-variant max-w-sm mt-2">I'm here to support your growth journey. Ask me anything about learning, mentoring, or skills.</p>
    </section>

    <div className="space-y-6 mb-20">
      <div className="flex items-end gap-3 max-w-[85%]">
        <div className="flex-1 bg-surface-container-low p-5 rounded-2xl rounded-bl-none shadow-sm">
          <p className="text-on-surface leading-relaxed">Sannu! I'm Ayo. How can I help you move forward today? We have new courses in Digital Marketing and Sustainable Farming that might interest you.</p>
          <span className="text-[10px] text-outline font-medium mt-2 block uppercase tracking-widest">Just now</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
        {[
          { icon: GraduationCap, label: "How do I start a course?", color: "primary" },
          { icon: Users, label: "Find a mentor", color: "secondary" },
          { icon: Sparkles, label: "Career advice", color: "tertiary" }
        ].map((chip, i) => (
          <button key={i} className="flex items-center gap-3 p-4 bg-surface-container-lowest border border-outline-variant/10 rounded-xl hover:bg-primary-fixed transition-colors text-left shadow-sm active:scale-95">
            <div className={cn("p-2 rounded-lg", `bg-${chip.color}-fixed text-${chip.color}`)}>
              <chip.icon size={18} />
            </div>
            <span className="text-sm font-medium text-on-surface">{chip.label}</span>
          </button>
        ))}
      </div>
    </div>

    <div className="fixed bottom-24 left-0 w-full px-4 z-40 md:bottom-28">
      <div className="max-w-2xl mx-auto flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-xl p-2 rounded-full shadow-lg border border-outline-variant/20">
        <button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
          <Paperclip size={20} />
        </button>
        <input className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface font-sans py-3 px-2" placeholder="Type your message..." type="text"/>
        <button className="p-3 bg-secondary text-on-secondary rounded-full shadow-md active:scale-90 transition-transform">
          <Mic size={20} />
        </button>
        <button className="p-3 bg-primary text-on-primary rounded-full shadow-md active:scale-90 transition-transform">
          <Send size={20} />
        </button>
      </div>
    </div>
  </PageWrapper>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/*" element={
            <>
              <TopBar />
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/courses" element={<CoursesScreen />} />
                <Route path="/mentors" element={<MentorsScreen />} />
                <Route path="/social" element={<SocialScreen />} />
                <Route path="/chat" element={<ChatScreen />} />
                <Route path="/support" element={<SupportScreen />} />
              </Routes>
              <BottomNav />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
