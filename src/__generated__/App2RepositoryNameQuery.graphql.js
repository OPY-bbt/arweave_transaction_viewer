/**
 * @generated SignedSource<<3173e9784edb694b530b5c1720c0ad64>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type App2RepositoryNameQuery$variables = {||};
export type App2RepositoryNameQuery$data = {|
  +blocks: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +height: number,
      |},
    |}>,
  |},
|};
export type App2RepositoryNameQuery = {|
  variables: App2RepositoryNameQuery$variables,
  response: App2RepositoryNameQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "App2RepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockConnection",
        "kind": "LinkedField",
        "name": "blocks",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlockEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Block",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "App2RepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockConnection",
        "kind": "LinkedField",
        "name": "blocks",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlockEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Block",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d14e6d48175c2c36bf5c17bf3f2bd3bd",
    "id": null,
    "metadata": {},
    "name": "App2RepositoryNameQuery",
    "operationKind": "query",
    "text": "query App2RepositoryNameQuery {\n  blocks {\n    edges {\n      node {\n        height\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "ab1be03d958db7a19ffe94027ec128a8";

module.exports = ((node/*: any*/)/*: Query<
  App2RepositoryNameQuery$variables,
  App2RepositoryNameQuery$data,
>*/);
