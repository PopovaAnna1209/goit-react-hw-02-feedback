import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        {options.map(option => (
        <button key={shortid.generate()} type="button" name={option} onClick={onLeaveFeedback}>
            {option}
        </button>
        ))}
    </div>
    );
  };
  
  
  FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
  };