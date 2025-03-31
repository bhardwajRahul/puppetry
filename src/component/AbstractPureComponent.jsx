import React from "react";
import PropTypes from "prop-types";
import { shell } from "electron";
import { notification } from "antd";


export default class AbstractPureComponent extends React.PureComponent {

  static propTypes = {
    action:  PropTypes.shape({
      setLoadingFor: PropTypes.func
    })
  }

  download = ( file, e = null ) => {
    e && e.preventDefault();
    shell.openPath( file );
    notification.open({
      message: "Opening external file",
      description: "The requested file will open in a few seconds"
    });
  }

  onExtClick = ( e ) => {
    e.preventDefault();
    const el = e.target.tagName === "A" ? e.target : e.target.parentNode;
    shell.openExternal( el.href );
    notification.open({
      message: "Opening external link",
      description: "The requested URL will open in the default browser in a few seconds"
    });
  }

}