function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M11.8 18H10c-1.7 0-3-1.3-3-3V8H5v7c0 2.8 2.2 5 5 5h5v-2h-3.2zM11 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8.9 16l-2-6H13V8H9v6.6c0 .8.7 1.5 1.5 1.5h5.3l1.3 4c.2.6.8 1 1.4 1 .2 0 .3 0 .5-.1.8-.3 1.2-1.2.9-2z" /></svg>;
});