import React, { useState } from 'react';

const Diary = () => {
    const [text, setText] = useState("");

    const handleSave = () => {
        console.log("Testo salvato:", text);
    };

    const handleSaveDraft = () => {
        console.log("Bozza salvata:", text);
    };

    const handleClear = () => {
        setText("");
    };

    return (
        <div className="min-h-screen bg-slate-200 p-6 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">Il mio Diario</h1>
                <textarea
                    placeholder="Scrivi i tuoi pensieri..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                    style={{
                        fontFamily: 'Courier New, monospace',
                        lineHeight: '30px',
                        fontSize: '18px',
                        color: '#4a4a4a',
                        backgroundColor: '#fafafa',
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                        backgroundSize: '100% 30px',
                        backgroundRepeat: 'repeat-y',
                        paddingLeft: '20px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                    }}
                />
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                    >
                        Salva
                    </button>
                    <button
                        onClick={handleSaveDraft}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
                    >
                        Salva come bozza
                    </button>
                    <button
                        onClick={handleClear}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                        Cancella
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Diary;
