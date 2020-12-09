import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Credit goes to StackOverflow ;-): https://stackoverflow.com/a/54343182
function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
