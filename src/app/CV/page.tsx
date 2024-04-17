"use client";

import type { NextPage } from "next";
import PDFPreview from "@/components/PDFPreview";

const CV: NextPage = () => {
  return (
    <>
      <PDFPreview pdfUrl="williamsucv.pdf" />
    </>
  );
};

export default CV;
