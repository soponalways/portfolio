import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react"; 
// import { loadSlim } from "@tsparticles/slim";
import { loadFull } from "tsparticles";
import ParticleConfig from "./ParticaleConfig";



const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // await loadSlim(engine);
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        return container; 
    };

    const options = useMemo(
        () => (ParticleConfig),
        [],
    );
    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticleBackground;