import { useState } from "react";
export default function EventObject() {
  const [event, setEvent] = useState<{
    type: string;
    target: string;
  } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const eventSnapshot = {
      type: e.type,
      target: (e.target as HTMLElement).outerHTML,
    };
    setEvent(eventSnapshot);
  };

  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={handleClick}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}

