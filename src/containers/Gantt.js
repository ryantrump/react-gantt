
import React from 'react';
import moment from 'moment';

import GanttHeader from '../components/GanttHeader';
import GanttTree from '../components/GanttTree';

class Gantt extends React.Component {

  constructor( props ) {

    super( props );

    this.state = { start: moment(), end: moment().add( 60, 'd' ) };

  }

  render() {

    return (

      <div className="gantt">

        <GanttHeader start={this.state.start} end={this.state.end} scale="days" />

        <GanttTree />

      </div>

    );

  }

}

export default Gantt;
