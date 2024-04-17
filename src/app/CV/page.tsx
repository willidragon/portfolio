"use client";

import type { NextPage } from "next";
import PDFPreview from "@/components/PDFPreview";

const CV: NextPage = () => {
  return (
    <>
      <PDFPreview pdfUrl="cv/williamsucv.pdf" />
    </>
  );
};

export default CV;
