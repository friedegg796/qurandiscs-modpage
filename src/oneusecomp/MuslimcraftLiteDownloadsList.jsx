import './components.css';
import { Link } from 'react-router-dom';

function MuslimcraftLiteDownloadsList() {
  return (
    <div className="downloads-list">
      <h2>Muslimcraft Lite Downloads</h2>
      <ul>
        <li>
          <a href="https://github.com/friedegg796/Muslimcraft-Lite/archive/refs/tags/1.0.1-1.20+.zip" target="_blank" rel="noopener noreferrer">
            Download for Minecraft 1.20.1
          </a>
        </li>
        {/* Add more versions as needed */}
      </ul>
    </div>
  );
}

export default MuslimcraftLiteDownloadsList;
