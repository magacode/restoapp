import React from 'react';

const Picture = ({ src }) => {
    return (
        <div className="picture">
            {src ? (
                <img src={src} className="img-fluid mx-auto" alt="..." />
            ) : (
                <i className="fa fa-picture-o fa-2x" aria-hidden="true"></i>
            )}
        </div>
      );
}

export default Picture;