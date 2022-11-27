import React from "react";
import Image from "next/image";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { useDispatch } from "react-redux";

export default function ComponentContainer({ image, name, type }) {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          console.log(`You Drop ${name}`);
          return dispatch({ type: "COMPONENT", payload: name });
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    [name, type]
  );
  return (
    <div ref={drag} data-testid={`box`}>
      <Image src={image} alt="Vercel Logo" width={120} height={100} />
    </div>
  );
}
