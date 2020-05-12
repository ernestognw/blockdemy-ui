import * as BlockdemyUI from 'blockdemy-ui';

// eslint-disable-next-line import/no-mutable-exports
let BlockdemyScope = { ...BlockdemyUI };
BlockdemyScope = { ...BlockdemyScope, ...BlockdemyScope.Card, ...BlockdemyScope.CircularProgress };
delete BlockdemyScope.default;

export default BlockdemyScope;
