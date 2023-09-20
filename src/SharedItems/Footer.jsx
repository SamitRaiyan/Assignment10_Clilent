import React from 'react';
import img from "../../public/favicon.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className=' '>
           

<div className="flex items-center justify-center">
    <div className="m-2 ">
        <div className="flex flex-col items-center justify-around md:flex-row">
            <div className="items-center m-1 justify-items-start w-60"> <img className="flex m-1"
                    src={img} />
                <div className="text-gray-500 md:text-center"> Chef Hunter
                </div>
            </div>
            <div className="items-center m-1 justify-items-start w-60">
                <h1 className="flex flex-col text-xl text-blue-600 font-medium"> Product </h1> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Features</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Integrations</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Shopify Integrations</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Pricing</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Chrome Extensions</a>
            </div>
            <div className="items-center m-1 justify-start w-60">
                <h1 className="flex flex-col text-xl text-blue-600 font-medium"> Company </h1> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Terms</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Customers</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Blog</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Terms of Services</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Privacy Policy</a>
            </div>
            <div className="items-center m-1 w-60">
                <h1 className="flex flex-col text-xl text-blue-600 font-medium"> Support </h1> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Community</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Support Customers</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Documentations</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Service Providers</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">Email Contact</a>
            </div>
            <div className="items-center m-1 w-60 md:-mt-16">
                <h1 className="flex flex-col text-xl text-blue-600 font-medium"> Contact Us </h1> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">suppport@admin.com</a> <a href="#"
                    className="flex hover:text-blue-600 text-gray-500">(+251)987-6543-210</a>
            </div>
        </div>
        <div className="mt-2 flex flex-row justify-between p-2 bg-black w-full">
            <div className="flex"> <a href="#"
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><FaInstagram/></a> <a href="#"
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><FaTwitter/></a> <a href="#"
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><FaFacebook/></a> <a href="#"
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><FaLinkedin/></a> <a href="#"
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><FaQuora/></a> </div>
        </div>
    </div>
</div> 
        </div>
    );
};

export default Footer;