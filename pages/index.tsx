import type { NextPage } from 'next';
import Home from 'components/page/Home/Index';
import Navbar from '../components/common/navbar';

const App: NextPage = () => (
    <div>
        {/* // <div className="text-4xl space-y-6 font-bold flex flex-col items-center text-gray-800 mt-10 "> */}
        {/* <p className="hover:scale-110 transition-all cursor-pointer ">NEXTJS 🖤</p>
        <p className="hover:scale-110 transition-all cursor-pointer ">TailwindCSS 🌊</p>
        <p className="hover:scale-110 transition-all cursor-pointer ">Typescript 💓</p>
        <p className="hover:scale-110 transition-all cursor-pointer ">ESLint 🔷</p>
        <p className="hover:scale-110 transition-all cursor-pointer ">Prettier 🦋</p>
        <p className="hover:scale-110 transition-all cursor-pointer ">Husky 🐶</p>

        <h1 className="animate-bounce pt-10">Enjoy!!!!!!!</h1> */}

        <Navbar />
        <Home />
    </div>
);

export default App;
