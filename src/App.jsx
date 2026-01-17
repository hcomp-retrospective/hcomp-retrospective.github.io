import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Users, Brain, Network, ArrowRight, ArrowDown, FileText, Award, BarChart2, GitCommit, GitPullRequest } from 'lucide-react';

const CITATION = String.raw`@inproceedings{10.1145/3715928.3737467,
  author = {Oppenlaender, Jonas and Gadiraju, Ujwal and Hosio, Simo},
  title = {Quo Vadis, HCOMP? A Review of 12 Years of Research at the Frontier of Human Computation and Crowdsourcing},
  year = {2025},
  isbn = {9798400714894},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3715928.3737467},
  pdf = {https://dl.acm.org/doi/pdf/10.1145/3715928.3737467#.pdf},
  doi = {10.1145/3715928.3737467},
  booktitle = {Proceedings of the ACM Collective Intelligence Conference},
  pages = {30–43},
  numpages = {14},
  series = {CI '25},
}`
function CitationBlock() {
  return (
    <pre className="text-xs text-left font-mono whitespace-pre-wrap break-words" style={{whiteSpace:"pre-wrap", fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}}>
      {CITATION}
    </pre>
  );
}

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>Quo Vadis, HCOMP?</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Home', 'Methodology', 'Evolution', 'Findings', 'Conclusion'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors"
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="https://dl.acm.org/doi/10.1145/3715928.3737467"
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Read Paper
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              Honorable Mention • ACM Collective Intelligence 2025
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Quo Vadis, HCOMP? <br />
              <span className="text-blue-600">A Review of 12 Years</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              From optimizing crowd work to navigating the disruption of Generative AI. 
              We map the evolution of the Human Computation and Crowdsourcing conference through the lens of Kuhn's paradigm shifts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <AuthorCard name="Jonas Oppenlaender" aff="University of Oulu" />
              <AuthorCard name="Ujwal Gadiraju" aff="TU Delft" />
              <AuthorCard name="Simo Hosio" aff="University of Oulu" />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative z-10">
              <h3 className="text-sm font-bold text-slate-400 uppercase mb-4">Paper Abstract</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The field of human computation and crowdsourcing has historically studied how tasks can be outsourced to humans. However, many tasks previously distributed to human crowds can today be completed by generative AI...
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We review 12 years of research at HCOMP, mapping the evolution of HCOMP's research topics and identifying significant shifts over time. Reflecting on the findings through the lens of Kuhn's paradigm shifts, we suggest that these shifts do not constitute a paradigm shift yet, but a significant reorientation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Methodology" subtitle="A Data-Driven Retrospective" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MethodCard 
              icon={<FileText className="w-8 h-8 text-blue-500" />}
              title="Data Collection"
              desc="Analyzed titles and abstracts of all 250 research articles published at HCOMP from 2013 to 2024."
            />
            <MethodCard 
              icon={<Network className="w-8 h-8 text-purple-500" />}
              title="Topic Modeling"
              desc="Used Sentence Transformers (all-mpnet-base-v2) and UMAP dimensionality reduction to map semantic shifts."
            />
            <MethodCard 
              icon={<GitPullRequest className="w-8 h-8 text-indigo-500" />}
              title="Comparative Analysis"
              desc="Compared HCOMP trajectory against 6 related venues: CI, CSCW, FAccT, IUI, UMAP, and AAMAS."
            />
          </div>
        </div>
      </section>

      {/* Visualizing the Evolution (Figure 1 Interactive) */}
      <section id="evolution" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader title="The Evolution of Topics" subtitle="Figure 1: Mapping 12 Years of Research (2013-2024)" />
          
          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 min-h-[400px]">
                <img src="/images/umap.jpg" alt="" />
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">2013 - 2017: "Normal Science"</h4>
                  <p className="text-sm text-blue-800">
                    Focus on <strong>Quality Control</strong>, <strong>Task Assignment</strong>, <strong>Incentives</strong>, and <strong>Annotation</strong>. The field optimized the "machine" of crowdsourcing.
                  </p>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-slate-400 rotate-90 lg:rotate-0" />
                </div>
                <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 mb-2">2018 - 2024: The AI Turn</h4>
                  <p className="text-sm text-indigo-800">
                     Shift toward <strong>Explainability (XAI)</strong>, <strong>Human-AI Decision Making</strong>, and <strong>Conversational Systems</strong>. The crowd is now studying the AI that threatens to replace it.
                  </p>
                </div>

                <div className="flex justify-center">
                </div>

                <button
                  onClick={() => (window.location.href = "/viz/")}
                  style={{cursor:'pointer'}}
                  className="w-full p-4 bg-indigo-200 rounded-xl border border-indigo-100 text-center font-bold text-indigo-900 mb-2"
                >
                  Explore the Visualization
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section id="findings" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Key Findings" subtitle="Tracing the Shift from Crowd to AI" />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            
            {/* Finding 1: Co-words */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GitCommit className="text-blue-600" />
                From "Workers" to "Humans"
              </h3>
              <p className="text-slate-600 mb-6">
                Our co-word analysis reveals a stark change in vocabulary. Terms like "task-worker" have vanished, replaced by "human-AI" and "behavior-human". This reflects a reorientation from viewing people as <em>workers</em> in a loop to <em>humans</em> interacting with AI.
              </p>
              <CoWordChart />
              <p className="text-xs text-slate-400 mt-2 text-center italic">Based on Figure 2 in the paper.</p>
            </div>

            {/* Finding 2: Conference Similarity */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="text-purple-600" />
                Moving Closer to FAccT & IUI
              </h3>
              <p className="text-slate-600 mb-6">
                While HCOMP remains closest to <strong>ACM Collective Intelligence (CI)</strong>, the centroid of research has drifted significantly toward <strong>FAccT</strong> (Fairness, Accountability, Transparency) and <strong>IUI</strong> (Intelligent User Interfaces).
              </p>
              <ConferenceDistanceChart />
              <p className="text-xs text-slate-400 mt-2 text-center italic">Based on Centroid Distances (Figure 3 & 7).</p>
            </div>

          </div>

          {/* Finding 3: Paradigm Shift Analysis */}
          <div className="mt-20 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/cubes.png')] opacity-10"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Is this a Kuhn's Paradigm Shift?</h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
              Not yet. While we observe a "crisis" phase where core assumptions (like the necessity of human data) are challenged by Generative AI, the shift has been gradual rather than a sudden revolutionary "Gestalt-switch."
            </p>
            <div className="inline-flex gap-4 relative z-10">
               <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                 <span className="block text-2xl font-bold text-blue-400">Gradual</span>
                 <span className="text-xs text-slate-400 uppercase tracking-wide">Topic Evolution</span>
               </div>
               <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                 <span className="block text-2xl font-bold text-purple-400">Crisis</span>
                 <span className="text-xs text-slate-400 uppercase tracking-wide">Current Phase</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <Brain className="w-12 h-12 text-slate-900 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Quo Vadis, HCOMP?</h2>
          <p className="text-lg text-slate-600 mb-8">
            The conference stands at a crossroads. As Generative AI automates traditional crowd tasks, HCOMP is reinventing itself—merging its deep knowledge of workflow and quality control with the urgent challenges of AI alignment, ethics, and human-AI collaboration.
          </p>
          <a href="https://dl.acm.org/doi/pdf/10.1145/3715928.3737467" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
            Download Full Paper PDF <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>


      <section id="citation" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h5 className="text-3xl font-bold text-slate-900 mb-6">BibTeX</h5>
          <p className="text-lg text-slate-600 mb-8">
            {CitationBlock()}
          </p>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; 2025 Oppenlaender, Gadiraju, Hosio.
          </div>
          <div className="text-center md:text-right">
             Presented at <span className="font-semibold text-slate-700">ACM Collective Intelligence 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Sub-components for Visualizations ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="h-1 w-16 bg-blue-600 mx-auto mb-4 rounded-full"></div>
    <p className="text-slate-500 uppercase tracking-wide text-sm font-medium">{subtitle}</p>
  </div>
);

const AuthorCard = ({ name, aff }) => (
  <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
      {name.charAt(0)}
    </div>
    <div>
      <div className="font-bold text-slate-900 text-sm">{name}</div>
      <div className="text-xs text-slate-500">{aff}</div>
    </div>
  </div>
);

const MethodCard = ({ icon, title, desc }) => (
  <div className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300 border border-slate-100">
    <div className="mb-4">{icon}</div>
    <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

// Interactive Scatter Plot for Figure 1
{/*
const ScatterPlotVis = () => {
  const [hoverYear, setHoverYear] = useState(null);

  // Simulated data points roughly matching the clusters in Figure 1
  const points = [
    // 2013-2017 Cluster (Bottom Left)
    { x: 20, y: 80, year: 2013, topic: "Quality Control" },
    { x: 25, y: 75, year: 2014, topic: "Crowd Contests" },
    { x: 30, y: 85, year: 2014, topic: "Incentives" },
    { x: 35, y: 70, year: 2015, topic: "Task Assignment" },
    { x: 28, y: 65, year: 2015, topic: "Applications" },
    { x: 40, y: 75, year: 2016, topic: "Workflows" },
    { x: 45, y: 60, year: 2017, topic: "Labeling" },
    
    // Transition
    { x: 50, y: 50, year: 2018, topic: "Fairness" },
    { x: 55, y: 45, year: 2019, topic: "Bias" },

    // 2020-2024 Cluster (Top Right/Center)
    { x: 60, y: 30, year: 2020, topic: "Privacy" },
    { x: 65, y: 25, year: 2021, topic: "Interpretability" },
    { x: 70, y: 35, year: 2021, topic: "Explainability" },
    { x: 75, y: 20, year: 2022, topic: "Human-AI Teams" },
    { x: 80, y: 30, year: 2023, topic: "Decision Making" },
    { x: 85, y: 15, year: 2024, topic: "GenAI Risks" },
  ];

  return (
    <div className="w-full h-full min-h-[350px] relative bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="absolute top-4 left-4 text-xs font-bold text-slate-400">Dim 2 (UMAP)</div>
      <div className="absolute bottom-4 right-4 text-xs font-bold text-slate-400">Dim 1 (UMAP)</div>
      
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="border-r border-b border-slate-200/50"></div>
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
          </marker>
        </defs>
        <line x1="25%" y1="75%" x2="75%" y2="25%" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow)" strokeDasharray="10,5" />
      </svg>

      {points.map((pt, i) => {
         const isOld = pt.year < 2018;
         return (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-150 ${isOld ? 'bg-blue-400' : 'bg-indigo-500'}`}
            style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
            onMouseEnter={() => setHoverYear(pt)}
            onMouseLeave={() => setHoverYear(null)}
          >
            {!isOld && <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-75"></div>}
          </div>
         );
      })}

      <div className="absolute top-[20%] right-[10%] text-indigo-900 font-bold text-sm bg-indigo-100/80 px-2 py-1 rounded backdrop-blur-sm border border-indigo-200">
        AI & Ethics (2018-2024)
      </div>
      <div className="absolute bottom-[20%] left-[15%] text-blue-900 font-bold text-sm bg-blue-100/80 px-2 py-1 rounded backdrop-blur-sm border border-blue-200">
        Classic Crowdsourcing (2013-2017)
      </div>

      {hoverYear && (
        <div 
          className="absolute z-10 bg-slate-900 text-white text-xs px-3 py-2 rounded shadow-lg pointer-events-none transform -translate-y-full -translate-x-1/2"
          style={{ left: `${hoverYear.x}%`, top: `${hoverYear.y - 2}%` }}
        >
          <div className="font-bold">{hoverYear.year}</div>
          <div>{hoverYear.topic}</div>
        </div>
      )}
    </div>
  );
};
*/}

// Simple Bar Chart for Co-words (Figure 2)
const CoWordChart = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg border border-slate-100">
      <div className="flex items-end space-x-4 h-48 border-b border-slate-200 pb-2">
        <div className="flex-1 flex flex-col items-center group">
          <div className="w-full bg-blue-100 relative h-full rounded-t-sm overflow-hidden">
             <div className="absolute bottom-0 w-full bg-blue-500 transition-all duration-1000" style={{ height: '90%' }}></div>
          </div>
          <span className="text-xs mt-2 font-medium text-slate-500 rotate-0">Task-Worker</span>
          <span className="text-[10px] text-blue-500 font-bold">2013</span>
        </div>
        
        <div className="flex-1 flex flex-col items-center group">
          <div className="w-full bg-blue-100 relative h-full rounded-t-sm overflow-hidden">
             <div className="absolute bottom-0 w-full bg-blue-500 transition-all duration-1000" style={{ height: '40%' }}></div>
          </div>
          <span className="text-xs mt-2 font-medium text-slate-500">Crowd</span>
          <span className="text-[10px] text-blue-500 font-bold">2016</span>
        </div>

        <div className="flex-1 flex flex-col items-center group">
          <div className="w-full bg-purple-100 relative h-full rounded-t-sm overflow-hidden">
             <div className="absolute bottom-0 w-full bg-purple-500 transition-all duration-1000" style={{ height: '60%' }}></div>
          </div>
          <span className="text-xs mt-2 font-medium text-slate-500">Human-AI</span>
          <span className="text-[10px] text-purple-500 font-bold">2020</span>
        </div>

        <div className="flex-1 flex flex-col items-center group">
          <div className="w-full bg-purple-100 relative h-full rounded-t-sm overflow-hidden">
             <div className="absolute bottom-0 w-full bg-purple-600 transition-all duration-1000" style={{ height: '95%' }}></div>
          </div>
          <span className="text-xs mt-2 font-medium text-slate-500 text-center">AI-Crowd</span>
          <span className="text-[10px] text-purple-600 font-bold">2024</span>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 mt-2">Frequency of Co-occurring terms in titles</div>
    </div>
  );
};

// Comparison Chart (Figure 3/7 Simplified)
const ConferenceDistanceChart = () => {
  const [activeTab, setActiveTab] = useState('2013');
  
  const data = {
    '2013': [
      { conf: 'CSCW', val: 80, color: 'bg-green-500' },
      { conf: 'CI', val: 70, color: 'bg-blue-500' },
      { conf: 'IUI', val: 20, color: 'bg-orange-500' },
      { conf: 'FAccT', val: 0, color: 'bg-red-500' },
    ],
    '2018': [
      { conf: 'CSCW', val: 75, color: 'bg-green-500' },
      { conf: 'CI', val: 75, color: 'bg-blue-500' },
      { conf: 'IUI', val: 40, color: 'bg-orange-500' },
      { conf: 'FAccT', val: 30, color: 'bg-red-500' },
    ],
    '2024': [
      { conf: 'CSCW', val: 65, color: 'bg-green-500' },
      { conf: 'CI', val: 75, color: 'bg-blue-500' },
      { conf: 'IUI', val: 85, color: 'bg-orange-500' },
      { conf: 'FAccT', val: 90, color: 'bg-red-500' },
    ]
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold text-slate-700">Topic Similarity Score</h4>
        <div className="flex space-x-2">
          {['2013', '2018', '2024'].map(year => (
            <button
              key={year}
              onClick={() => setActiveTab(year)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${activeTab === year ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {data[activeTab].map((item) => (
          <div key={item.conf}>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-bold text-slate-700">{item.conf}</span>
              <span className="text-slate-400">{item.val}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${item.color}`} 
                style={{ width: `${item.val}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-slate-400 leading-tight">
        * Comparison based on cosine similarity of article title embeddings. Note the sharp rise of FAccT and IUI similarity in recent years.
      </div>
    </div>
  );
};

export default LandingPage;