import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsAll = Object.keys(options);
    return (
    <div>
        {optionsAll.map(option => (
        <button key={shortid.generate()} type="button" name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
        </button>
        ))}
    </div>
    );
  };
  
  
  FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
  };