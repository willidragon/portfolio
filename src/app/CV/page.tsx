"use client";

import { NextPage } from "next";
import PDFPreview from "@/components/PDFPreview";
import currentUrl from "@/config"; // Import the configuration file

const CV: NextPage = () => {
  // Construct the PDF URL based on the current URL configuration
  const pdfUrl = currentUrl
    ? `${currentUrl}/williamsucv.pdf`
    : "williamsucv.pdf";

  return (
    <>
      <PDFPreview pdfUrl={pdfUrl} />
    </>
  );
};

export default CV;
