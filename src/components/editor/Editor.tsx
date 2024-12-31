import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

const Editor = ({ onChange, value }: EditorProps) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image"], // Botón de imagen
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"], // Agrega el
      ["clean"], // Botón para limpiar el formato
    ],
  };
  return (
    <ReactQuill
      placeholder="Escribe algo..."
      formats={[
        "header",
        "bold",
        "list",
        "link",
        "italic",
        "underline",
        "image",
      ]}
      modules={modules}
      value={value}
      onChange={onChange}
    />
  );
};

export default Editor;
