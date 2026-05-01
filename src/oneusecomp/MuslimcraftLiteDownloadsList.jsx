import './components.css';
import { Link } from 'react-router-dom';

function MuslimcraftLiteDownloadsList() {
  return (
    <div className="downloads-list">
      <h2>Muslimcraft Lite Downloads</h2>
      <ul>
        <li>
          <Link to="/MuslimcraftLiteDownloads/1.20.1">Download for Minecraft 1.20.1</Link>
        </li>
        {/* Add more versions as needed */}
      </ul>
    </div>
  );
}

export default MuslimcraftLiteDownloadsList;
