import React from "react";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Percorso 1", progress: 20 },
    { name: "Percorso 2", progress: 50 },
    { name: "Percorso 3", progress: 80 },
    { name: "Percorso 4", progress: 100 },
];

const AnimatedBar = ({ value, index, activeIndex, setActiveIndex, ...props }) => {
    const isActive = index === activeIndex;


    const { height, fill } = useSpring({
        height: isActive ? value : value,
        fill: isActive ? "#4163ec" : "#6FAFE6",
        config: { tension: 100, friction: 5 },
    });

    return (
        <animated.rect
            {...props}
            height={height}
            fill={fill}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
        />
    );
}

const ProgressAnalytics = () => {

    const [activeIndex, setActiveIndex] = useState();

    return (
        <>
            <div className="mx-auto p-4 sm:px-6 lg:px-8 max-w-xl">
                <div className="w-[600px] h-auto">
                    <h3 className="flex justify-center m-4">
                        Traccia il tuo cambiamento interiore
                    </h3>
                    <p className="flex justify-center m-6">Visiona in tempo reale i tuoi progressi nei vari percorsi che hai scelto di
                        iniziare, ricordandoti che l'importante non è raggiungere solo un obiettivo, ma essere consapevoli che qualcosa sta davvero cambiando. Decidi liberamente
                        di prenderti anche delle pause, il grafico conserverà per te le tappe raggiunte.
                    </p>
                </div>
                <div className="w-[600px] h-auto px-4 p-4 font-semibold sm:px-6 lg:px-8 max-w-xl bg-white shadow-lg rounded-2xl">
                    <h4 className="font-semibold text-center mb-6 text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">
                        I tuoi progressi
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="progress"
                                fill={({ progress }) => (progress === 0 ? "#6FAFE6" : "#FFFFFF")}
                                shape={(props) => (
                                    <AnimatedBar {...props} value={props.height} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                                )}
                                animationDuration={1500}
                                animationEasing="ease-out"
                                radius={[10, 10, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default ProgressAnalytics;