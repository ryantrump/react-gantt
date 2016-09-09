
import React from 'react';
import moment from 'moment';

const GanttHeader = ( { start, end, scale } ) => {

  var range = [];

  var diff = end.diff( start, 'd' );

  console.log( diff );

  for( var i = 0; i < diff; ++i ) {

    range.push( moment( start ).add( i, 'd' ) );

  }

  const _renderLabel = ( item, key ) => {

    return (

      <p key={key}>{item.format( 'dd DD MMM' )}</p>

    )

  };

  return (

    <div>

      {range.map( _renderLabel )}

    </div>

  );

};

export default GanttHeader;
