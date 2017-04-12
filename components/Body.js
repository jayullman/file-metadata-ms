import React from 'react';

import FileFormSubmit from './FileFormSubmit';

export default function Body() {
  return (
    <div className="bodyContent">
      <p>
        This API microservice will return a JSON object with the size of the uploaded file in bytes.
      </p>

      <FileFormSubmit />
      
      <p>
        The backend of this project was built with Node and Express. 
        The front end was built with React.
        To learn more about this project, please visit the <a href="https://github.com/libeja/file-metadata-ms" target="_blank">
          Github{'\u00A0'}project{'\u00A0'}page</a>.
      </p>

    </div>
  );
}
