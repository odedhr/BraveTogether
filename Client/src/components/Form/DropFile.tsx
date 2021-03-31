import React from "react";
import { useDropzone } from "react-dropzone";
type Props = {
  getFiles: (files: File[]) => void;
};
export default function Accept(props: Props) {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
  });

  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          height: "70px",
          width: "70px",
        }}
      >
        <input
          style={{
            height: "70px",
            width: "70px",
          }}
          onChange={() => acceptedFiles && props.getFiles(acceptedFiles)}
          {...getInputProps()}
        />
        {acceptedFiles.length > 0 ? (
          <img
            height={70}
            width={70}
            src={URL.createObjectURL(acceptedFiles[0])}
            style={{ borderRadius: "50%" }}
          />
        ) : (
          <>
            <p>תמונה</p>
            <div>שווה אלף מילים</div>
            <div>אנחנו ממליצים</div>
          </>
        )}
      </div>
    </section>
  );
}
