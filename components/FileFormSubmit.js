import React from 'react';

function FileFormSubmit() {
  return (
    <div>
      <form action="/imagesize" method="post">
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FileFormSubmit;
