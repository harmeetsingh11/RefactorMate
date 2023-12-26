import React, { useState } from 'react';

const CodeComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <div>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="typescript">TypeScript</option>
        </select>
      </div>
      <pre>
        <code className={`language-${selectedLanguage}`}>
          {`
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello'));
          `}
        </code>
      </pre>
    </div>
  );
};

export default CodeComponent;
