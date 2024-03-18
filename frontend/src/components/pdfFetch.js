import pdfjs from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.entry";
import Pdf from "../Pdf.pdf";

// Fungsi untuk membaca isi file PDF
const pdfFetch = async (pdfUrl) => {
  const loadingTask = pdfjs.getDocument("../Pdf.pdf");
  const pdf = await loadingTask.promise;

  // Menginisialisasi string untuk menampung konten PDF
  let pdfContent = "";

  // Iterasi melalui setiap halaman PDF
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);

    // Ekstrak teks dari setiap halaman PDF
    const textContent = await page.getTextContent();
    const textItems = textContent.items;

    // Gabungkan teks dari setiap item di halaman PDF
    for (const item of textItems) {
      pdfContent += item.str + " ";
    }
  }

  return pdfContent;
};

export default pdfFetch;
