import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../redux/modules/basic';

class App extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    console.log(this.props.state);

    return (
      <div>
        Application
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);