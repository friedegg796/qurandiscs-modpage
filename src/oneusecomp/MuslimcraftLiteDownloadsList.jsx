import './components.css';
import { Link } from 'react-router-dom';

function MuslimcraftLiteDownloadsList() {
  return (
    <div className="downloads-list">
      <h2>Muslimcraft Lite Downloads</h2>
      <ul>
        <h3> 1.20 and above</h3>
        <li>
          <a href="https://github.com/friedegg796/Muslimcraft-Lite/archive/refs/tags/1.0.1-1.20+.zip" target="_blank" rel="noopener noreferrer">
            Version 1.0.1
          </a>
        </li>
        {/* Add more versions as needed */}

      <h3> 1.19 and below </h3>
        <li>
          <a href="https://github.com/friedegg796/Muslimcraft-Lite/archive/refs/tags/1.0.1-1.20+.zip" target="_blank" rel="noopener noreferrer">
            Version 1.0.1
          </a>
        </li>


      </ul>
    </div>
  );
}

export default MuslimcraftLiteDownloadsList;
