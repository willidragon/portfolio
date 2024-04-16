"use client";

import type { NextPage } from "next";
import PDFPreview from "@/components/PDFPreview";

const CV: NextPage = () => {
  return (
    <>
      <PDFPreview pdfUrl="/CV/2024_WilliamSu_CV.pdf" />
    </>
  );
};

export default CV;
