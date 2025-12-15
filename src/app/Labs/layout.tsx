import { ReactNode } from "react";
import TOC from "./TOC";
import { Container, Row } from "react-bootstrap";
export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Container className="mt-3">
      <Row>
        <TOC />
      </Row>
      <Row>{children}</Row>
    </Container>
  );
}
