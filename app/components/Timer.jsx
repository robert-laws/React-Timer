var React = require('react');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  render: function() {
    return (
      <div>
        <h1>Timer</h1>
        
      </div>
    )
  }
});

module.exports = Timer;
