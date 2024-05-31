import React from 'react';

const Error = ({ error, searchTerm }) => {
    return (
        <div className="alert alert-danger alert-dismissible">
            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            <strong>That ain't it Shawty!</strong> The search term '{searchTerm}' caused the following error: '{error}'.
        </div>
    );
};
export default Error;

  