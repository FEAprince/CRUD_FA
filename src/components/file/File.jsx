import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { suceessMessage} from "../helper";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function File() {
  const [files, setFiles] = useState([]);
  return (
    <div className="file">
      <FilePond
        files={files}
        allowReorder={true}
        allowMultiple={true}
        onupdatefiles={setFiles}
        labelIdle="Drag and  Drop your files or <span>Browse</span>"
      />
      <App />
    </div>
  );
}

function Draggable(props) {
  const { children, onDragStart, onDragEnd, value, className = "" } = props;
  function handleDragStart(e) {
    if (typeof onDragStart === "function") onDragStart(e, value);
  }
  function handleDragEnd(e) {
    if (typeof onDragEnd === "function") onDragEnd(e);
  }
  return (
    <div
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={className}
      draggable
    >
      {children}
    </div>
  );
}

function Droppable(props) {
  const { children, onDragOver, onDrop, className = "", value } = props;
  function handleDragOver(e) {
    e.preventDefault();
    if (typeof onDragOver === "function") onDragOver(e);
  }
  function handleDrop(e) {
    e.preventDefault();
    if (typeof onDrop === "function") onDrop(e, value);
  }
  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop} className={className}>
      {children}
    </div>
  );
}

const TITLE = "ReactJS Upload File ";
const LEAD = "Drag and drop image to another image to change the order";
const DEG = randInt(360);

const FLEX = false;

const LIST = [...Array(1).keys()].map((e) => {
  return `https://picsum.photos/125?${randInt()}`;
});

function App() {
  const [index, setIndex] = React.useState();
  const [list, setList] = React.useState([...LIST]);
  const btn = React.useRef();

  function handleUpload(e) {
    if (typeof btn === "object" && btn !== null) {
      const { current } = btn;
      
      if (typeof current === "object" && current !== null) {
        current.click();
        
      }
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setList([...list, URL.createObjectURL(e.target.files[0])]);
    suceessMessage("File Upload Successfully!");
  }

  function handleDragStart(e, i) {
    setIndex(i);
  }

  function handleDragEnd(e) {
    setIndex();
  }

  function handleDragOver(e) {}

  function handleDrop(e, i) {
    if (typeof index === "number" && typeof i === "number") {
      const a = index < i ? index : i;
      const b = index < i ? i : index;
      setList([
        ...list.slice(0, a),
        list[b],
        ...list.slice(a + 1, b),
        list[a],
        ...list.slice(b + 1),
      ]);
    }
  }

  return (
    <FlexContainer  deg={DEG} flex={FLEX}>
      <div className="container text">
        <div className="h1 text-center text-white text-shadow">{TITLE}</div>
        <p className="lead text-center text-light text-shadow">{LEAD}</p>
        <div className="p-3 bg-white rounded shadow">
          <div className="text-center mb-3">
            <button
              className="btn btn-success btn-sm pl-3 pr-3 rounded-pill shadow"
              onClick={handleUpload}
            >
              Upload
            </button>
            <input
              className="d-none"
              type="file"
              ref={btn}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            {list.map((e, i) => {
              return (
                <div className="col-4">
                  <Droppable
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    value={i}
                  >
                    <Draggable
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      value={i}
                    >
                      <img
                        key={i}
                        src={e}
                        alt="File"
                        className="w-100 border p-1 m-2 shadow-sm"
                        style={{ maxHeight: 150, objectFit: "contain" }}
                      />
                    </Draggable>
                  </Droppable>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FlexContainer>
  );
}

function FlexContainer(props) {
  const { children, deg = randInt(360), bg, style = {}, flex = true } = props;
  const classNames = [
    "align-content-center align-items-center justify-content-center flex-wrap w-100 v-100 vh-100",
  ];
  if (Array.isArray(bg) && bg.length > 0) {
    style.background = `linear-gradient(${deg}deg,${bg.join(",")})`;
  }
  if (flex) classNames.push("d-flex");
  return (
    <div className={classNames.join(" ")} style={style}>
      {children}
    </div>
  );
}



function PreCode(props) {
  const { ugly, className = "", children } = props;

  if (typeof children === "object" && children !== null) {
    if (ugly) {
      return <PreCode {...props}>{JSON.stringify(children)}</PreCode>;
    }
    return <PreCode {...props}>{JSON.stringify(children, null, 2)}</PreCode>;
  }

  return (
    <pre className={`p-3 bg-dark text-white rounded shadow ${className}`}>
      <code>{children}</code>
    </pre>
  );
}

function randInt(n = 10) {
  return Math.floor(Math.random() * n);
}
