"use client";

import { NextPage } from "next";
import PDFPreview from "@/components/PDFPreview";
import currentUrl from "@/urlconfig";

const CV: NextPage = () => {
  // Construct the PDF URL based on the current URL configuration
  const pdfUrl = `portfolio/williamsucv.pdf`;

  return (
    <>
      <PDFPreview pdfUrl={pdfUrl} />
    </>
  );
};

export default CV;
