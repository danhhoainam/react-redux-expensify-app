import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is info: { props.info }</p>
    </div>
);

const withAdminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>Warning: don't share</p> }
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to see info</p> }
        </div>
    )
}

const AdminInfo = withAdminInfo(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="i don't know" isAdmin={false}/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="congrat" />, document.getElementById('app'));