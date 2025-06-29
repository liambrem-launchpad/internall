import { useDroppable } from "@dnd-kit/core";
import "./NewSectionDropZone.css";
import { SectionActions } from "../../../utils/constants";

const RELEASE_TO_ADD = "Release to add section";
const DRAG_TO_ADD = "Drag here to add a new section";

const NewSectionDropZone = () => {
  const { setNodeRef, isOver } = useDroppable({ id: SectionActions.DROPZONE });
  return (
    <div
      className="section-droppable"
      ref={setNodeRef}
      style={{
        background: isOver ? "var(--dark1)" : "var(--dark2)",
        border: isOver ? "2px solid var(--pink2)" : "2px dashed var(--gray2)",
        transition: "background 0.2s, border 0.2s",
      }}
    >
      {isOver ? RELEASE_TO_ADD : DRAG_TO_ADD}
    </div>
  );
};

export default NewSectionDropZone;