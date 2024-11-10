import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styles from "./manual.module.scss";
import manualPDF from "../../assets/manual/Manual do Participante SESCOMP.pdf";
import { Header } from '../../shared/header';

export function Manual() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const initialScale = window.innerWidth > 1024 ? 1.0 : 0;

    return (
        <>
            <Header title='Manual'/>
            <div className={styles.manualContainer}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl={manualPDF}
                        plugins={[defaultLayoutPluginInstance]}
                        defaultScale={initialScale}
                        />
                </Worker>
            </div>
        </>
    );
}