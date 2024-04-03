import jsPDF from "jspdf";
import { useState } from "react";
import styled from "styled-components";

const DataValue = styled.div`
  margin: 8rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  max-width: 100rem;

  @media (max-width: 50em) {
    display: none;
  }
`;
const GenerateButton = styled.button`
  border: none;
  padding: 1rem 1rem;
  background-color: var(--rpdc-color);
  font-size: 1.7rem;
  border-radius: var(--border-radius-md);
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
`;

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
  }

  &:hover {
    background-color: var(--rpdc-color);
  }
`;

const Img = styled.img`
  width: 11in;
  height: 8.5in;
  display: block;
  position: relative;
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

const Heading = styled.div`
  display: none;
  @media (max-width: 50em) {
    margin: 8rem auto;

    display: block;
    text-align: center;
    max-width: 40rem;
  }
`;

export default function UploadCert() {
  const [name, setName] = useState("");
  const [template, setTemplate] = useState(null);
  const [coordinate, setCoordinate] = useState({ x: 500, y: 650 });

  const handleFileImage = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => setTemplate(e.target.result);
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleXaxis = (e) => {
    setCoordinate((data) => ({
      ...data,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleYaxis = (e) => {
    setCoordinate((data) => ({
      ...data,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const generateCertificate = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: "letter",
    });

    if (template) {
      doc.addImage(template, "PNG", 0, 0, 11, 8.5);

      doc.setFontSize(20);
      doc.text(
        `${name.toUpperCase()}`,
        Number(coordinate.x / 96),
        Number(coordinate.y / 135),
        {
          align: "center",
        }
      );
      doc.save(`${name}.pdf`);
    }
  };

  return (
    <>
      <Heading>
        <h2>For a Better Experience Please use Pc or Laptop 🌝🌝🌝🌝</h2>
      </Heading>
      <DataValue>
        <FileInput type="file" accept="image/*" onChange={handleFileImage} />
        {template && (
          <>
            <Img src={template} alt="img" />
            <div
              style={{
                position: "absolute",
                top: `${coordinate.y}px`,
                left: `${coordinate.x}px`,
                fontSize: "30px",
              }}
            >
              {name}
            </div>
            <ButtonPosition>
              <p>y-axis:</p>
              <input
                type="number"
                name="y"
                value={coordinate.y}
                onChange={handleYaxis}
              />
              <p>x-axis:</p>
              <input
                type="number"
                name="x"
                value={coordinate.x}
                onChange={handleXaxis}
              />
            </ButtonPosition>
            <Input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={handleName}
            />
          </>
        )}
        <GenerateButton onClick={generateCertificate}>
          Generate Certificate
        </GenerateButton>
      </DataValue>
    </>
  );
}
