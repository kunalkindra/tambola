import React from 'preact/compat';
import { Component } from 'preact';

import isEqual from 'lodash/isEqual';
import Error from '../../Error/Error';
import Loader from '../../Loader/Loader';
import getDisplayName from '../../../utils/getDisplayName';

export default function withResolved({
  query: queryFn,
  queryArgs: queryArgsFn = () => undefined,
  as = 'resolved',
  loadingProps = {},
  errorProps = {},
}) {
  return (WrappedComponent) => {
    class WithResolvedComponent extends Component {
      state = {
        result: null,
        error: null,
      };

      componentDidMount() {
        this.load();
      }

      componentDidUpdate(prevProps) {
        if (!isEqual(queryArgsFn(this.props), queryArgsFn(prevProps))) {
          this.load();
        }
      }

      load() {
        return queryFn(queryArgsFn(this.props))
          .then((result) => this.setState({ result, error: null }))
          .catch((error) => this.setState({ result: null, error }));
      }

      render() {
        const { result, error } = this.state;

        if (error) {
          return <Error error={error} {...errorProps} />;
        }

        if (result) {
          const other = {
            [as]: result,
            reload: () => this.load(this.args),
          };

          return <WrappedComponent {...this.props} {...other} />;
        }

        return <Loader className="text-center p-3" {...loadingProps} />;
      }
    }

    WithResolvedComponent.displayName = `withResolved(${
      queryFn.apiName || queryFn.name
    } for ${getDisplayName(WrappedComponent)})`;

    return WithResolvedComponent;
  };
}
