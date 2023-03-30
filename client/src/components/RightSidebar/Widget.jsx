import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment.svg";
import pen from "../../assets/pen.svg";
import greyLogo from "../../assets/greylogo.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="13" />
          <p>How edge functions move your back end close to your front end</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="13" />
          <p>ML and AI consulting-as-a-service (Ep. 541)</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="13" />
          <p>Ticket smash for [status-review] tag: Part Deux</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="13" />
          <p>
            We've added a "Necessary cookies only" option to the cookie consent
            popup
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={greyLogo} alt="greylogo" width="20" />
          <p>Microsoft Azure Collective launch and proposed tag changes</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>37</p>
          <p>
            Is there more I should be doing about a user's useless comments, or
            are they...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>
            Why was this spam flag declined,yet the question marked as spam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
