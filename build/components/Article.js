'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _storeProvider = require('./storeProvider');

var _storeProvider2 = _interopRequireDefault(_storeProvider);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.8em',
    color: '#888'
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10
  },
  body: {
    paddingLeft: 20
  }
};
const dateDisplay = dateString => new Date(dateString).toDateString();

class Article extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      open: true
    }, this.toggleArticle = () => {
      this.setState({
        open: !this.state.open
      });
    }, _temp;
  }

  render() {
    const { article, author } = this.props;
    return _react2.default.createElement(
      _reactBootstrap.Panel,
      {
        expanded: !this.state.open,
        id: 'collapsible-panel-example-1',
        onToggle: () => {},
        style: { marginBottom: "10px" }
      },
      _react2.default.createElement(
        _reactBootstrap.Panel.Heading,
        {
          onClick: this.toggleArticle,
          style: { color: "#4C4F53", fontSize: "3.1em" }
        },
        _react2.default.createElement('i', {
          style: { color: "#4C4F53" },
          className: article.completed ? 'fa fa-check-circle-o' : 'fa fa-circle-o'
        }),
        article.title
      ),
      _react2.default.createElement(
        _reactBootstrap.Panel.Collapse,
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel.Body,
          {
            style: { color: "#4C4F53", fontSize: "1.7em" }
          },
          article.body
        )
      )
    );
  }
}

Article.propTypes = {
  article: _propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    body: _propTypes2.default.string.isRequired,
    date: _propTypes2.default.string.isRequired,
    completed: _propTypes2.default.bool.isRequired
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}

exports.default = (0, _storeProvider2.default)(extraProps)(Article);