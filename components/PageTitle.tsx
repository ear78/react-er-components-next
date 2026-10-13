import React from 'react';
import PropTypes from 'prop-types';

interface pageTitleProps {
  title: string;
}

export default function pageTitle({ title }: pageTitleProps) {
  return (
    <h1 className="text-center font-normal text-md uppercase tracking-(--page-title-tracking)">
      &lt;{title}/&gt;
    </h1>
  );
}
