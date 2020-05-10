import * as BlockdemyUI from 'blockdemy-ui';

let BlockdemyScope = { ...BlockdemyUI };
BlockdemyScope = { ...BlockdemyScope, ...BlockdemyScope.Card, ...BlockdemyScope.CircularProgress };
delete BlockdemyScope.default;

export default BlockdemyScope