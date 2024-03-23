// import { useRef } from "react";
// import jsPDF from "jspdf";
// import cert2 from "./template/cert2.png";

// const CertificateGenerator = () => {
//   const nameRef = useRef();
//   const fileRef = useRef();

//   //   const generateCertificate = async () => {
//   //     const doc = new jsPDF("p", "pt", [8.5 * 72, 11 * 72]);
//   //     const name = nameRef.current.value;
//   //     const file = fileRef.current.files[0];

//   //     if (file) {
//   //       const reader = new FileReader();
//   //       reader.onloadend = () => {
//   //         const imgData = reader.result;
//   //         doc.addImage(imgData, "PNG", 10, 10, 595, 770);
//   //         doc.setFontSize(20);
//   //         doc.text(`${name}`, 130, 100, null, null, "center");
//   //         doc.save("certificate.pdf");
//   //       };
//   //       reader.readAsDataURL(file);
//   //     }
//   //   };

//   // const generateCertificate = () => {
//   //   const doc = new jsPDF("l", "pt", "letter");
//   //   const name = nameRef.current.value;

//   //   doc.addImage(cert2, "PNG", 10, 10, 595, 770);
//   //   doc.setFontSize(20);
//   //   doc.text(` ${name}`, 105, 80, null, null, "center");

//   //   doc.save(`${name}.pdf`);
//   // };

//   const generateCertificate = () => {
//     const doc = new jsPDF("l", "pt", "letter"); // landscape mode
//     const name = nameRef.current.value;

//     doc.addImage(cert2, "PNG", 10, 10, 770, 590); // adjust as needed
//     doc.setFontSize(20);
//     doc.text(
//       `This is to certify that ${name}`,
//       doc.internal.pageSize.getWidth() / 2,
//       doc.internal.pageSize.getHeight() / 2,
//       null,
//       null,
//       "center"
//     );
//     doc.text(
//       "has completed the course",
//       doc.internal.pageSize.getWidth() / 2,
//       doc.internal.pageSize.getHeight() / 2 + 30,
//       null,
//       null,
//       "center"
//     );

//     doc.save(`${name}.pdf`);
//   };

//   return (
//     <div>
//       <input ref={nameRef} type="text" placeholder="Enter Name" />
//       <input ref={fileRef} type="file" accept="image/*" />
//       <button onClick={generateCertificate}>Generate Certificate</button>
//     </div>
//   );
// };

// export default CertificateGenerator;
// import { useRef, useEffect } from "react";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";

// const CertificateGenerator = () => {
//   const nameRef = useRef();
//   const canvasRef = useRef();

//   useEffect(() => {
//     drawCertificate();
//   }, []);

//   const drawCertificate = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const name = nameRef.current.value;

//     // Draw the certificate on the canvas here
//     // This will depend on your specific design
//     // For example:
//     ctx.font = "20px Arial";
//     ctx.fillText(`This is to certify that ${name}`, 150, 75);
//     ctx.fillText("has completed the course", 150, 100);
//   };

//   const generateCertificate = () => {
//     const canvas = canvasRef.current;
//     const imgData = canvas.toDataURL("image/png");
//     const doc = new jsPDF();

//     doc.addImage(imgData, "PNG", 10, 10, 180, 160);
//     doc.save("certificate.pdf");
//   };

//   return (
//     <div>
//       <input
//         ref={nameRef}
//         type="text"
//         placeholder="Enter Name"
//         onChange={drawCertificate}
//       />
//       <canvas
//         ref={canvasRef}
//         width="600"
//         height="400"
//         style={{ border: "1px solid black" }}
//       ></canvas>
//       <button onClick={generateCertificate}>Generate Certificate</button>
//     </div>
//   );
// };

// export default CertificateGenerator;

// import { useRef, useEffect } from "react";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";

// // Import the image from your public folder
// import cert2 from "./template/cert2.png";
// import cert1 from "./template/cert1.png";
// import cert3 from "./template/cert1.png";

// const CertificateGenerator = () => {
//   const nameRef = useRef();
//   const canvasRef = useRef();
//   const templateRef = useRef();

//   useEffect(() => {
//     drawCertificate();
//   }, []);

//   const drawCertificate = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const name = nameRef.current.value;
//     const template = templateRef.current.value;
//     console.log(templateRef);
//     // Create a new image object
//     const img = new Image();

//     // Once the image is loaded, draw it on the canvas
//     img.onload = () => {
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//       // Then draw the text on top of the image
//       ctx.font = "24px Roboto";
//       const textWidth = ctx.measureText(`${name}`).width;
//       const x = (canvas.width - textWidth) / 2;
//       ctx.fillText(`${name}`, x, 195);
//     };

//     // Set the source of the image to your template
//     switch (template) {
//       case "cert1":
//         img.src = cert1;
//         break;
//       case "cert2":
//         img.src = cert2;
//         break;
//       case "cert3":
//         img.src = cert3;
//         break;
//       default:
//         img.src = cert1;
//     }
//   };

//   const generateCertificate = () => {
//     const canvas = canvasRef.current;
//     const name = nameRef.current.value;
//     const imgData = canvas.toDataURL("image/png");

//     console.log(imgData);
//     const doc = new jsPDF("l", "pt", "letter");

//     doc.addImage(imgData, "PNG", 10, 10, 770, 590); // adjust as needed
//     doc.setFontSize(20);

//     doc.save(`${name}.pdf`);
//   };

//   return (
//     <div>
//       <input
//         ref={nameRef}
//         type="text"
//         placeholder="Enter Name"
//         onChange={drawCertificate}
//       />

//       <select ref={templateRef} onChange={drawCertificate}>
//         <option value="cert1">Template 1</option>
//         <option value="cert2">Template 2</option>
//         <option value="cert3">Template 3</option>
//       </select>
//       <canvas
//         ref={canvasRef}
//         width="600"
//         height="400"
//         style={{ border: "1px solid black" }}
//       ></canvas>
//       <button onClick={generateCertificate}>Generate Certificate</button>
//     </div>
//   );
// };

// export default CertificateGenerator;
// import { useRef } from "react";
// import jsPDF from "jspdf";

// const UploadCert = () => {
//   const nameRef = useRef();
//   const fileRef = useRef();

//   const generateCertificate = async () => {
//     const doc = new jsPDF("p", "pt", [8.5 * 72, 11 * 72]);
//     const name = nameRef.current.value;
//     const file = fileRef.current.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const imgData = reader.result;
//         doc.addImage(imgData, "PNG", 10, 10, 595, 770);
//         doc.setFontSize(20);
//         doc.text(`${name}`, 130, 100, null, null, "center");
//         doc.save("certificate.pdf");
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <input ref={nameRef} type="text" placeholder="Enter Name" />
//       <input ref={fileRef} type="file" accept="image/*" />
//       <button onClick={generateCertificate}>Generate Certificate</button>
//     </div>
//   );
// };

// export default UploadCert;
const [name, setName] = useState("");
const [template, setTemplate] = useState(null);
const [coordinates, setCoordinates] = useState({ x: 0 ,y: 0 });

const onFileChange = (event) => {
  const reader = new FileReader();
  reader.onload = function (e) {
    setTemplate(e.target.result);
  };
  reader.readAsDataURL(event.target.files[0]);
};

const generateCertificate = () => {
  const doc = new jsPDF();

  if (template) {
    doc.addImage(template, "JPEG", 0, 0, 210, 297);
  }

  doc.setFontSize(20);
  doc.text(`Name: ${name}`, coordinates.x, coordinates.y);

  doc.save("certificate.pdf");
};

const handleClick = (event) => {
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  setCoordinates({ x, y });
};

return (
  <div>
    <input type="file" onChange={onFileChange} />
    <input
      type="text"
      placeholder="Enter Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <button onClick={generateCertificate}>Generate Certificate</button>
    {template && (
      <img
        src={template}
        alt="Certificate Preview"
        style={{ width: "100%", height: "auto" }}
        onClick={handleClick}
      />
    )}
    {template && (
      <div
        style={{
          position: "absolute",
          top: `${coordinates.y}px`,
          left: `${coordinates.x}px`,
          fontSize: "20px",
        }}
      >
        {name}
      </div>
    )}
  </div>
);
};

export default UploadCert;
