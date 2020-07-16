import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import classes from './picture.module.scss';

const Picture = ({ src }) => {
    return (
        <div className={classes.picture}>
            {src ? (
                <img src={src} className="img-fluid mx-auto" alt="..." />
            ) : (
                <FontAwesomeIcon icon={faImage} size="3x" />
            )}
        </div>
      );
}

export default Picture;