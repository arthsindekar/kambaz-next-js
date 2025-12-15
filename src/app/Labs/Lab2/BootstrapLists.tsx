"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function BootstrapLists() {
  return (
    <div>
      <div id="wd-css-styling-lists">
        <h2>Favorite movies</h2>
        <ListGroup>
          <ListGroupItem active>Aliens</ListGroupItem>
          <ListGroupItem>Terminator</ListGroupItem>
          <ListGroupItem>Blade Runner</ListGroupItem>
          <ListGroupItem>Lord of the Ring</ListGroupItem>
          <ListGroupItem disabled>Star Wars</ListGroupItem>
        </ListGroup>
      </div>
      <div id="wd-css-hyperlink-list">
        <h3>Favorite books</h3>
        <ListGroup>
          <ListGroupItem
            action
            active
            href="https://en.wikipedia.org/wiki/Dune_(novel)"
          >
            Dune
          </ListGroupItem>
          <ListGroupItem
            action
            href="https://en.wikipedia.org/wiki/TheLordofthe____Rings"
          >
            Lord of the Rings
          </ListGroupItem>
          <ListGroupItem
            action
            href="https://en.wikipedia.org/wiki/TheForeverWar"
          >
            __ The Forever War
          </ListGroupItem>
          <ListGroupItem
            action
            href="https://en.wikipedia.org/wiki/2001:A__Space_Odyssey_(novel)"
          >
            2001 A Space Odyssey
          </ListGroupItem>
          <ListGroupItem
            action
            disabled
            href="https://en.wikipedia.org/wiki/Ender%27sGame"
          >
            _ Enders Game
          </ListGroupItem>
          <ListGroupItem action onClick={() => alert("New book added")}>
            Add another book
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}
