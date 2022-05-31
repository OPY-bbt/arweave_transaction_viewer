/**
 * @generated SignedSource<<277da17d11f1e437399d303ef627481f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppRepositoryNameQuery$variables = {||};
export type AppRepositoryNameQuery$data = {|
  +blocks: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +previous: string,
      |},
    |}>,
  |},
|};
export type AppRepositoryNameQuery = {|
  variables: AppRepositoryNameQuery$variables,
  response: AppRepositoryNameQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "previous",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "df73855d8719b2902942547bce7f0d1f",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery {\n  blocks {\n    edges {\n      node {\n        id\n        previous\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "c08eb4055234a0da6fecfe4ee6a5e6b4";

module.exports = ((node/*: any*/)/*: Query<
  AppRepositoryNameQuery$variables,
  AppRepositoryNameQuery$data,
>*/);
