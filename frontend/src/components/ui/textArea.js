import React from 'react';

const TextArea = ({ value, onChange, placeholder }) => {
    return (
        <textarea
            placeholder={placeholder}
            className="placeholder:text-white placeholder:text-m w-80  p-4 mb-6 bg-[#323232] text-white rounded-lg"
            value={value}
            onChange={onChange}
            rows={10}
        />
    );
};

export default TextArea;