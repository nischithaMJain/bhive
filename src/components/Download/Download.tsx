import React, { lazy, Suspense } from 'react'
import Loading from '../Loading/Loading';
import downloadImg from '../../assets/DownloadSection.svg';
import playStore from '../../assets/googleplay.png';
import googlePlay from '../../assets/imgeStore.png';
import './Download.css'
import { GoArrowRight } from 'react-icons/go';
import { Container } from '@mui/material';
const Image = lazy(() => (import('../Image/Image')));
const Download = () => {
    return (
        <Container className="download">
            <h2>Download Our App now <GoArrowRight /></h2>
            <div className="downloadContainer">

                <Suspense fallback={<Loading />}>
                    <Image src={downloadImg} alt="" width={400} height={470} />
                </Suspense>
                <div className="downloadContent">
                    <p>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
                    <div className="btnContainer"> <button>
                        <Suspense fallback={<Loading />}>
                            <Image src={playStore} alt="Download app on Google play" width={146} height={45} />
                        </Suspense>

                    </button>
                        <button>
                            <Suspense fallback={<Loading />}>
                                <Image src={googlePlay} alt="Download app on play store" width={146} height={45} />
                            </Suspense>

                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Download
