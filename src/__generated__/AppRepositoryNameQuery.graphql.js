/**
 * @generated SignedSource<<8cf7a812ea1a03bf6c6f1bfba3c0dded>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppRepositoryNameQuery$variables = {|
  maxBlock: number,
|};
export type AppRepositoryNameQuery$data = {|
  +transactions: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +tags: $ReadOnlyArray<{|
          +name: string,
          +value: string,
        |}>,
        +data: {|
          +type: ?string,
          +size: string,
        |},
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "maxBlock"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "max",
            "variableName": "maxBlock"
          },
          {
            "kind": "Literal",
            "name": "min",
            "value": 0
          }
        ],
        "kind": "ObjectValue",
        "name": "block"
      },
      {
        "kind": "Literal",
        "name": "first",
        "value": 20
      },
      {
        "kind": "Literal",
        "name": "tags",
        "value": [
          {
            "name": "Content-Type",
            "values": [
              "image/png"
            ]
          }
        ]
      }
    ],
    "concreteType": "TransactionConnection",
    "kind": "LinkedField",
    "name": "transactions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Transaction",
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
                "concreteType": "Tag",
                "kind": "LinkedField",
                "name": "tags",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "MetaData",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "size",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "111910c72c98cc7325a07e1659103dc9",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery(\n  $maxBlock: Int!\n) {\n  transactions(first: 20, block: {min: 0, max: $maxBlock}, tags: [{name: \"Content-Type\", values: [\"image/png\"]}]) {\n    edges {\n      node {\n        id\n        tags {\n          name\n          value\n        }\n        data {\n          type\n          size\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "74bf73805c5d3151d291daf1e79de68f";

module.exports = ((node/*: any*/)/*: Query<
  AppRepositoryNameQuery$variables,
  AppRepositoryNameQuery$data,
>*/);
