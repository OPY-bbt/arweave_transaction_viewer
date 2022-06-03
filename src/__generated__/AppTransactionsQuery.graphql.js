/**
 * @generated SignedSource<<866cc23018049b61cb8e27562ac860cf>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppTransactionsQuery$variables = {|
  maxBlock: number,
|};
export type AppTransactionsQuery$data = {|
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
export type AppTransactionsQuery = {|
  variables: AppTransactionsQuery$variables,
  response: AppTransactionsQuery$data,
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
    "name": "AppTransactionsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppTransactionsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "41b619f649426412adbcf4aec5d7bd53",
    "id": null,
    "metadata": {},
    "name": "AppTransactionsQuery",
    "operationKind": "query",
    "text": "query AppTransactionsQuery(\n  $maxBlock: Int!\n) {\n  transactions(first: 20, block: {min: 0, max: $maxBlock}, tags: [{name: \"Content-Type\", values: [\"image/png\"]}]) {\n    edges {\n      node {\n        id\n        tags {\n          name\n          value\n        }\n        data {\n          type\n          size\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "90d43ad1a9af2354e3d37aacceb9e44d";

module.exports = ((node/*: any*/)/*: Query<
  AppTransactionsQuery$variables,
  AppTransactionsQuery$data,
>*/);