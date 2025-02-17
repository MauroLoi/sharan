import React from "react";
import { Link } from "react-router-dom";

const PathCard = ({ title, description, image, path, period, status }) => {
    const statusConfig = {
        "scopri": { label: "Scopri", color: "text-primary" },
        "in corso": { label: "In corso", color: "text-orange-300" },
        "fatto": { label: "Fatto", color: "text-green-300" },
    };

    return (
        <Link to={path} className="cursor-pointer w-full max-w-[350px] sm:w-[90%] md:w-[80%] lg:w-[40%] xl:w-[30%] min-h-[550px] flex flex-col h-full rounded-md shadow-lg mt-10 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 bg-slate-50">
            <img src={image} alt={title} className="rounded-t-md aspect-[4/3] w-full object-cover h-[200px]" />
            <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-slate-500 text-lg">{title}</h3>
                    <p className="pt-3 h-[60px]">{description}</p>
                </div>
                <div className="border-solid border-t-2 border-x-0 border-b-0 mt-10"></div>
                <div className="flex justify-between items-end">
                    <p className="text-lg font-semibold text-slate-500">Durata: {period}</p>
                    <span className={`text-lg font-bold ${statusConfig[status]?.color}`}>
                        {statusConfig[status]?.label}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default PathCard;




