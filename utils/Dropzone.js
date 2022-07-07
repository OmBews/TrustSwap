import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({
  value,
  setValue,
  setError,
  maxFiles = 1,
  maxSize = 10 * 1024 * 1024,
  accept = "image/*",
}) => {
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (maxFiles === 1) {
        setValue(acceptedFiles[0]);
      } else {
        setValue(acceptedFiles);
      }
    },
    [setValue, maxFiles]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    maxFiles,
    maxSize,
    accept,
    onDrop,
  });
  const [imageBuffer, setImageBuffer] = useState();
  useEffect(() => {
    if (fileRejections.length > 0) {
      setError?.(fileRejections[0].errors[0].message);
    }
  }, [fileRejections, setError]);
  useEffect(() => {
    const showFile = async (val) => {
      const reader = new window.FileReader();

      reader.readAsDataURL(val);
      reader.onloadend = async () => {
        setImageBuffer(reader.result);
      };
    };
    if (maxFiles === 1 && value) {
      showFile(value);
    } else if (maxFiles > 1 && value?.length > 0) {
      showFile(value[0]);
    }
  }, [value]);
  return (
    <div className="dropzone">
      <div
        {...getRootProps({
          className: `inner-dropzone`,
        })}
      >
        {/* {value && <img src={imageBuffer} className="productImage" />} */}
        <input {...getInputProps()} />

        {value ? (
          <img src={imageBuffer} className="productImage" />
        ) : (
          <img src="/images/download.png" />
        )}
      </div>
    </div>
  );
};

export { Dropzone };
