import React from "react";
import Image from "next/image";
import Lottie from "react-lottie-player";
import LottieImage from "../../assests/animated-photo.json";
import { CenterLottie, DownloadQuoteCard, DownloadQuoteCardConText } from "./AnimationElements";

interface AnimatedDownloadedBtnProps {
    handleDownload: () => void;
}

const AnimatedDownloadedBtn = ({handleDownload} : AnimatedDownloadedBtnProps )=>{
    return(

        <DownloadQuoteCard 
        // onClick={null}
        >
            <CenterLottie>
                <Lottie
                    loop={true}
                    animationData={LottieImage}
                    play={true}
                />
             </CenterLottie>

            <DownloadQuoteCardConText>
                Download your quote card
            </DownloadQuoteCardConText>
        </DownloadQuoteCard>

    );
        
    
}

export default AnimatedDownloadedBtn;