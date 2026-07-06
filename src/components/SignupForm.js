import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

function SignupForm() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: '40px 20px', maxWidth: '500px' }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="●●●●●●●●" />
          
          <div style={{ marginTop: '20px' }}>
            <CoolButton isMedium isPrimary className="is-fullwidth">
              Submit
            </CoolButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;