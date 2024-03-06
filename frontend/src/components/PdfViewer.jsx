import React, { useEffect, useState } from "react";
// import { Document, Page, pdfjs } from "@react-pdf/renderer";
import { Document, Page } from "@react-pdf/renderer";
import axios from "axios";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ dataPeserta }) => {
  console.log({ dataPeserta });
  const [pdfUrl, setPdfUrl] = useState();

  //   useEffect(() => {
  //     const blob = new Blob([dataPeserta], { type: "application/pdf" });
  //     const url = URL.createObjectURL(blob);
  //     console.log("ini url", { url });
  //     setPdfUrl(url);
  //   }, []);

  const apiUrl = import.meta.env.VITE_BASE_URL;

  const downloadPdf = () => {
    if (dataPeserta) {
      const blob = new Blob([dataPeserta], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const namaFile = dataPeserta.replace("uploads/", "");
      a.download = `${namaFile}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      console.error("PDF data is not available");
    }
  };

  const handleDownload = async () => {
    try {
      // Kirim permintaan ke API untuk mendapatkan PDF
      const response = await axios.get(`${apiUrl}/${dataPeserta}`, {
        responseType: "blob", // Set responseType ke 'blob' untuk menerima respons sebagai blob (binary data)
      });

      // Buat objek URL dari blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Buat link untuk mengunduh file
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "example.pdf");
      document.body.appendChild(link);

      // Klik link untuk memulai unduhan
      link.click();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div>
      <div>
        {dataPeserta && (
          <>
            {/* <div style={{ width: "100%", height: "800px" }}>
              <Document
                file={{ data: dataPeserta }}
                onLoadError={(error) => console.error("Error loading PDF:", error)}
              >
                <Page pageNumber={1} width={600} />
                <p>{dataPeserta}</p>
              </Document>
            </div> */}
            <button onClick={handleDownload}>Download PDF</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
