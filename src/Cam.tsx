import { useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useRef } from "react"; // import useRef
import { IoArrowBack, IoCameraOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const Cam = () => {
    const [zoomImage1, setZoomImage1] = useState(false);
    const [zoomImage2, setZoomImage2] = useState(false);
    const [devices, setDevices] = useState<any>([]);
    const webcamRef1: any = useRef(null);
    const webcamRef2: any = useRef(null);

    const [imgSrc1, setImgSrc1] = useState(null);
    const [imgSrc2, setImgSrc2] = useState(null);

    const capture1 = useCallback(() => {
        const imageSrc = webcamRef1.current.getScreenshot();
        setImgSrc1(imageSrc);

    }, [webcamRef1]);
    const capture2 = useCallback(() => {
        const imageSrc = webcamRef2.current.getScreenshot();
        setImgSrc2(imageSrc);

    }, [webcamRef2]);
    const handleDevices = useCallback(
        (mediaDevices: any) =>
            setDevices(mediaDevices.filter(({ kind }: any) => kind === "videoinput")),

        [setDevices]
    );

    useEffect(
        () => {
            navigator.mediaDevices.enumerateDevices().then(handleDevices);

        },
        [handleDevices]
    );

    return (

        <div className="flex flex-col gap-10  justify-center p-10">
            <button onClick={() => history.back()}><IoArrowBack size={30}></IoArrowBack></button>
            {
                !zoomImage1 && !zoomImage2 && <div className="flex flex-row gap-4 justify-center items-center">

                    <div className='justify-center items-center relative h-full'>
                        <div className="flex flex-col gap-3">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 2, } }} className=' text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Camera 1</motion.h1>

                            <Webcam className="rounded-xl" ref={webcamRef1} audio={false} videoConstraints={{ deviceId: devices[0]?.deviceId }} />
                            <h1 className="text-center">{devices[0]?.label}</h1>


                        </div>
                        <div className="flex flex-col gap-20">
                        </div>

                    </div>
                    <div className=" justify-center items-center relative">
                        <div className="flex flex-col gap-3">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 2, } }} className=' text-xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Camera 2</motion.h1>
                            <Webcam className="rounded-xl" ref={webcamRef2} audio={false} videoConstraints={{ deviceId: devices[1]?.deviceId }} />
                            <h1 className="text-center">{devices[1]?.label}</h1>
                        </div>


                        <div className="flex flex-col gap-20">
                        </div>
                    </div></div>
            }
            <button className="text-purple-700  border-[1px] border-black/20 rounded-2xl p-4 h-fit text-center flex items-center justify-center" onClick={capture1}><IoCameraOutline size={40}></IoCameraOutline></button>
            <button onClick={() => setZoomImage1(!zoomImage1)} className="">
                <img className="w-[100px] rounded-xl" src={imgSrc1 || ''} alt="" />
            </button>

            {zoomImage1 &&
                <div className="absolute top-0 left-0 w-full h-fit bg-black">
                    <div className="w-full px-10 py-5 bg-dongker flex-row text-white">
                        <button onClick={() => setZoomImage1(!zoomImage1)}><IoArrowBack size={30}></IoArrowBack></button>
                    </div>
                    <img className="w-full h-screen object-contain" src={imgSrc1 || ''} alt="" />
                </div>
            }


            {zoomImage2 &&
                <div className="absolute top-0 left-0 w-full h-fit bg-black">
                    <div className="w-full px-10 py-5 bg-dongker flex-row text-white">
                        <button onClick={() => setZoomImage2(!zoomImage2)}><IoArrowBack size={30}></IoArrowBack></button>
                    </div>
                    <img className="w-full h-screen object-contain" src={imgSrc2 || ''} alt="" />
                </div>}





        </div>
    );
};

export default Cam