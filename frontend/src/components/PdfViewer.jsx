// // import React, { useState } from "react";
// // import Pdf from "../Pdf.pdf";
// // import { Viewer, Worker } from "@react-pdf-viewer/core";
// // import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// // import "@react-pdf-viewer/core/lib/styles/index.css";
// // import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// // function PdfViewer() {
// //   const [numPages, setNumPages] = useState(null);
// //   const [pageNumber, setPageNumber] = useState(1);

// //   function onDocumentLoadSuccess({ numPages }) {
// //     setNumPages(numPages);
// //   }

// //   return (
// //     <div>
// //       <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
// //         <Viewer
// //           fileUrl={Pdf}
// //           plugins={[defaultLayoutPlugin]}
// //           initialPage={pageNumber}
// //           onPageChange={({ pageNumber }) => setPageNumber(pageNumber)}
// //           // Optional: Uncomment the line below to hide the toolbar
// //           // renderToolbar={() => null}
// //         />
// //       </Worker>
// //       {numPages && (
// //         <p>
// //           Page {pageNumber} of {numPages}
// //         </p>
// //       )}
// //     </div>
// //   );
// // }

// import React from "react";
// import { PDFViewer, Document, Page, Text, View, StyleSheet, ReactPDF } from "@react-pdf/renderer";

// // Buat stylesheet untuk PDF
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// // Komponen React yang menampilkan PDF
// const PdfViewer = () => (
//   // <PDFViewer style={{ width: "100%", height: "100vh" }}>
//   //   <MyDocument />
//   // </PDFViewer>
// );
// // ReactPDF.render(<MyDocument />, `"../Pdf.pdf"`);
// export default PdfViewer;
