import React from 'react';

function Message(props) {
  let classes = 'message';
  
  if (props.isInfo) classes += ' is-info';
  if (props.isSuccess) classes += ' is-success';
  if (props.isWarning) classes += ' is-warning';
  if (props.isDanger) classes += ' is-danger';

  return (
    <article className={classes}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  );
}

export default Message;