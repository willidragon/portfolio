// Define TypeScript interface for the component props
interface PDFPreviewProps {
  pdfUrl: string;
}

// Define the component with props type
const PDFPreview: React.FC<PDFPreviewProps> = ({ pdfUrl }) => {
  return (
    <object
      data={pdfUrl}
      type="application/pdf"
      width="100%"
      height="100%"
      style={{ minHeight: "100vh" }}
    >
      <p>
        This browser does not support PDFs. Please download the PDF to view it:{" "}
        <a href={pdfUrl}>Download PDF</a>.
      </p>
    </object>
  );
};

export default PDFPreview;
