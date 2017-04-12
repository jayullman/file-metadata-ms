import React from 'react';

import FileFormSubmit from './FileFormSubmit';

export default function Body() {
  return (
    <div className="bodyContent">
      <p>
        This API microservice will return a JSON object with the size of the uploaded file.
      </p>

      <FileFormSubmit />
      
      <p>
        This project was built with Node.js, Express, MongoDB, and uses a React.js front end.
        To learn more about this project, pleasde visit the <a href="https://github.com/libeja/file-metadata-ms" target="_blank">
          Github{'\u00A0'}project{'\u00A0'}page</a>.
      </p>

    </div>
  );
}
