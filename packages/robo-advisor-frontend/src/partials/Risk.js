import React from 'react';

type Props = {};

const Risk = (props: Props) => {
  return (
    <div className="menu">
      <div className="btn trigger">
        <span className="line"></span>
      </div>
      <div className="icons">
        <div className="rotater">
          <div className="btn btn-icon">
            <i className="fa fa-codepen"></i>
          </div>
        </div>
        <div className="rotater">
          <div className="btn btn-icon">
            <i className="fa fa-facebook"></i>
          </div>
        </div>
        <div className="rotater">
          <div className="btn btn-icon">
            <i className="fa fa-google-plus"></i>
          </div>
        </div>
        <div className="rotater">
          <div className="btn btn-icon">
            <i className="fa fa-twitter"></i>
          </div>
        </div>
        <div className="rotater">
          <div className="btn btn-icon">
            <i className="fa fa-dribbble"></i>
          </div>
        </div>
        <div className="rotater">
          <div className="btn btn-icon">
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="rotater">
          <div className="btn btn-icon">
            <i className="fa fa-github"></i>
          </div>
        </div>
        <div className="rotater">
          <div className="btn btn-icon">
            <i className="fa fa-behance"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risk;
