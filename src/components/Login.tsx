import * as React from 'react';

export interface LoginProps {
}

export default class Login extends React.Component<LoginProps, any> {
  public render() {
    return (
      <div>
          <button className="github" onClick={()=>console.log('github')}>Log in with Github</button>
      </div>
    );
  }
}
