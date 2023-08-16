import React from 'react';
import PropTypes from 'prop-types';
import { Provider, observer } from 'mobx-react';
import { ReportBody } from 'components';
import 'styles/app.global.css';

const MochawesomeReport = observer(props => {
  return (
    <Provider reportStore={props.store}>
      <main>
        <ReportBody />
      </main>
    </Provider>
  );
});

MochawesomeReport.propTypes = {
  store: PropTypes.object,
};

MochawesomeReport.displayName = 'MochawesomeReport';

export default MochawesomeReport;
