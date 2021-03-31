import { black } from "material-ui/styles/colors";
import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
type Props = {
  getFiles: (files: File[]) => void;
};
const TextInsideDrop = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  text-align: center;
  direction: rtl;
`;
export default function Accept(props: Props) {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
  });
  React.useEffect(() => {
    if (acceptedFiles.length > 0) props.getFiles(acceptedFiles);
  }, [acceptedFiles]);
  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          height: "120px",
          width: "120px",
          border: "1px dashed black",
          display: "flex",
          flexDirection: "column",
          borderRadius: "50%",
          outline: "none",
        }}
      >
        <input
          style={{
            height: "70px",
            width: "70px",
          }}
          {...getInputProps()}
        />
        {acceptedFiles.length > 0 ? (
          <img
            height={120}
            width={120}
            src={URL.createObjectURL(acceptedFiles[0])}
            style={{ borderRadius: "50%" }}
          />
        ) : (
          <TextInsideDrop>
            <p style={{ fontWeight: "bold" }}>תמונה</p>
            <div>שווה אלף מילים אנחנו ממליצים</div>
          </TextInsideDrop>
        )}
      </div>
    </section>
  );
}
