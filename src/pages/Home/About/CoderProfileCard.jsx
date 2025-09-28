import React from 'react';
const DotIcon = () => <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
</svg>;
// const coderData: { name: string; role: string; seniority: string; location: string; skills: string[] } = {
const coderData = {
    name: 'Sopon Islam',
    role: 'Full Stack Developer',
    seniority: 'Junior',
    location: 'Rangpur, Bangladesh',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'TailwindCSS', 'CSS', 'Figma', 'GitHub', 'HTML', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Git']
};
const CoderProfileCard = () => {
    return (<div className="w-full mx-auto bg-gradient-to-rfrom-[#000000]to-[#0a0d37] border-[#1b2c68a0] relative rounded-lg border shadow-lg hover:shadow-2xl shadow-base-100 duration-300 backdrop-blur-3xl backdrop-brightness-125">

        { }
        <div className="flex flex-row">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        { }
        <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-[#000000]g bg-base-200/45">
            <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs text-gray-400 font-mono">About.ts</div>
        </div>

        { }
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
            { }
            <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

            <div className="relative flex">
                { }
                <div className="hidden md:flex flex-col items-end pr-4 text-gray-500 font-mono text-xs">
                    {Array.from({
                        length: 12
                    }, (_, i) => <div key={i} className="leading-relaxed select-none opacity-70">{i + 1}</div>)}
                </div>

                { }
                <code className="font-mono text-xs md:text-sm lg:text-base w-full">
                    <div>
                        <span className="mr-2 text-pink-400">const</span>
                        <span className="mr-2 text-violet-400">coder{`: {name: string; role: string; seniority: string; location: string; skills: string[] }`}</span>
                        <span className="mr-2 text-pink-400">=</span>
                        <span className="text-gray-400">{'{'}</span>
                    </div>
                    <div className="pl-6">
                        <span className="text-white">name:</span>
                        <span className="text-gray-400">&#39;</span>
                        <span className="text-green-400">{coderData.name}</span>
                        <span className="text-gray-400">&#39;,</span>
                    </div>
                    <div className="pl-6">
                        <span className="text-white">role:</span>
                        <span className="text-gray-400">&#39;</span>
                        <span className="text-green-400">{coderData.role}</span>
                        <span className="text-gray-400">&#39;,</span>
                    </div>
                    <div className="pl-6">
                        <span className="text-white">seniority:</span>
                        <span className="text-gray-400">&#39;</span>
                        <span className="text-green-400">{coderData.seniority}</span>
                        <span className="text-gray-400">&#39;,</span>
                    </div>
                    <div className="pl-6">
                        <span className="text-white">location:</span>
                        <span className="text-gray-400">&#39;</span>
                        <span className="text-green-400">{coderData.location}</span>
                        <span className="text-gray-400">&#39;,</span>
                    </div>
                    <div className="pl-6">
                        <span className="text-white">skills:</span>
                        <span className="text-gray-400">{'['}</span>
                        <div className="pl-6 flex flex-wrap">
                            {coderData.skills.map((skill, index) => <span key={skill} className="mr-1">
                                <span className="text-gray-400">&#39;</span>
                                <span className="text-cyan-400">{skill}</span>
                                <span className="text-gray-400">&#39;</span>
                                {index < coderData.skills.length - 1 && <span className="text-gray-400">, </span>}
                            </span>)}
                        </div>
                        <span className="text-gray-400">{'],'}</span>
                    </div>
                    <div>
                        <span className="text-gray-400">{'};'}</span>
                    </div>
                </code>
            </div>
        </div>

        { }
        <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-gray-800 pt-3 text-xs text-gray-500 flex justify-between items-center">
            <span>UTF-8</span>
            <span>TypeScript</span>
            <span>Ln 12, Col 2</span>
        </div>
    </div>
    );
};

export default CoderProfileCard;