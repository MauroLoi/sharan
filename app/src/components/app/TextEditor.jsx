import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';
import '../../editor.css';

const TextEditor = ({ className = "", onChange = () => {} }) => {
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                // console.log(quill.root.innerHTML); // Get innerHTML using quill
                // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                onChange(quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill]);

    return (
        <div className={className} style={{ border: "none" }}>
            <div ref={quillRef} />
        </div>
    );
};

export default TextEditor;
