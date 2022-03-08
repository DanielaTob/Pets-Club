import React from "react";
import { MdRoom } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

export default function Contact() {
    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 py-10 px-10">
            <div className="">
            <iframe
            className="w-full h-60 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15930.373946314025!2d-76.5018268!3d3.448582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfcad97f3735b5404!2sPets%20club!5e0!3m2!1ses-419!2sco!4v1646701493200!5m2!1ses-419!2sco"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            </div>

        <div className="w-full bg-sky-100 rounded-md">
            <h1 className="px-9 py-3 text-start font-bold text-xl text-sky-400">Contactanos</h1>
            <ul className="px-5 py-3">
                <li className="nav-item">
                <a className="px-2 py-2 flex text-sky-400">
                <MdRoom className="h-7 w-7  text-sky-400 hover:opacity-80" />
                <p className="text-gray-800 px-3">Cra.12##48-18, Cali, Valle del cauca</p>
                </a>
                </li>

                <li className="nav-item">
                <a className="px-2 py-2 flex text-sky-400">
                <MdCall className="h-6 w-6  text-sky-400 hover:opacity-80" />
                <p className="text-gray-800 px-3">3076298</p>
                </a>
                </li>

                <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-sky-400">
                <MdWatchLater className="h-6 w-6  text-sky-400 hover:opacity-80" />
                <p className="text-gray-800 px-3">Lunes a Sábado 8:00 - 19:00</p>
                </a>
                </li> 
            </ul>
        </div>
        </div>
    );
}
