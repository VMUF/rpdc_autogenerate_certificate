import { useRef, useEffect } from "react";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

// Import the image from your public folder
import cert2 from "../template/cert2.png";
import cert1 from "../template/cert1.png";
import cert3 from "../template/cert3.png";
import styled from "styled-components";

const DataValue = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  max-width: 100rem;
`;

const Select = styled.select`
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /* Personalize */
  width: 20rem;
  padding: 1rem 4rem 1rem 1rem;
  background: var(--arrow-icon) no-repeat right 0.8em center / 1.4em,
    linear-gradient(to left, var(--rpdc-color) 3em, var(--select-bg) 3em);
  color: var(--rpdc-color);
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  font-size: 1.6rem;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 1.9rem;
`;

const Canva = styled.canvas`
  border: 1px solid var(--rpdc-color);
  width: 350px;
  height: 250px;
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
`;

const ButtonPosition = styled.div`
  display: flex;
  gap: 0.5rem;

  & button {
    border: none;
    font-size: 2rem;
    background-color: var(--rpdc-color);
    padding: 0.5rem 0.5rem;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    box-shadow: 0 0.5rem 1rem var(--rpdc-color);

    &:hover {
      transform: translateY(-1px);
    }
  }

  & p {
    font-size: 1.6rem;
  }
  & input {
    width: 4rem;
  }
`;

const GenerateButton = styled.button`
  border: none;
  padding: 1rem 1rem;
  background-color: var(--rpdc-color);
  font-size: 1.7rem;
  border-radius: var(--border-radius-md);
`;

export default function TempCert() {
  const nameRef = useRef();
  const templateRef = useRef();
  const canvasRef = useRef();
  const pRef = useRef("200");
  const xRef = useRef("183");

  const drawCertificate = () => {
    const canvas = canvasRef.current;
    const named = nameRef.current.value;
    const ctx = canvas.getContext("2d");
    const y = pRef.current.value;
    const xs = xRef.current.value;
    const template = templateRef.current.value;

    const img = new Image();

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "24px Roboto";
      const textWidth = ctx.measureText(`${named}`).width;
      const x = (canvas.width - textWidth) / 2;
      ctx.fillText(
        `${named.toUpperCase()}`,
        xs ? Number(xs) : 183,
        y ? Number(y) : 200
      );
    };

    switch (template) {
      case "cert1":
        img.src = cert1;
        break;
      case "cert2":
        img.src = cert2;
        break;
      case "cert3":
        img.src = cert3;
        break;
      default:
        img.src = cert1;
    }
  };

  useEffect(() => {
    drawCertificate();
  }, []);

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    const name = nameRef.current.value;
    const imgData = canvas.toDataURL("image/png");

    const doc = new jsPDF("l", "pt", "letter");

    doc.addImage(imgData, "PNG", 10, 10, 770, 590); // adjust as needed
    doc.setFontSize(20);

    doc.save(`${name}.pdf`);
  };

  return (
    <DataValue>
      <Label htmlFor="select">Choose a Template for your Certificate</Label>
      <Select ref={templateRef} onChange={drawCertificate}>
        <option value={"cert1"}>Template 1</option>
        <option value={"cert2"}>Template 2</option>
        <option value={"cert3"}>Template 3</option>
      </Select>
      <Canva ref={canvasRef} width="600" height="400"></Canva>
      <ButtonPosition>
        <p>y-axis:</p>
        <input
          type="number"
          ref={pRef}
          onChange={drawCertificate}
          defaultValue={200}
        />
        <p>x-axis:</p>
        <input
          type="number"
          ref={xRef}
          onChange={drawCertificate}
          defaultValue={183}
        />
      </ButtonPosition>
      <Input
        type="text"
        placeholder="Enter your name..."
        ref={nameRef}
        onChange={drawCertificate}
      />
      <GenerateButton onClick={generateCertificate}>
        Generate Certificate
      </GenerateButton>
    </DataValue>
  );
}
