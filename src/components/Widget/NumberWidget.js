import React from 'react';
import PropTypes from 'utils/propTypes';

import { Card, CardText, CardTitle } from 'reactstrap';
import Typography from '../Typography';

const NumberWidget = ({ title, number, color, ...restProps }) => {
  return (
    <Card body {...restProps}>
      <div className="d-flex flex-column justify-content-between">
        <CardText tag="div" className="mb-4">
          <Typography className="mb-0" style={{ fontSize: '1.2rem' }}>
            <strong>{title}</strong>
          </Typography>
        </CardText>
        <CardTitle
          className={`text-${color} mb-0`}
          style={{ fontSize: '1.4rem' }}
        >
          {number}
        </CardTitle>
      </div>
    </Card>
  );
};

NumberWidget.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]),
  progress: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
};

NumberWidget.defaultProps = {
  title: '',
  number: 0,
  color: 'primary',
};

export default NumberWidget;
