/**
 * @generated SignedSource<<2a14fe87bd28fdf4225e34d1ed6f10b8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type AppComparisonFields$fragmentType: FragmentType;
export type AppComparisonFields$data = {|
  +edges: $ReadOnlyArray<{|
    +node: {|
      +id: string,
    |},
  |}>,
  +$fragmentType: AppComparisonFields$fragmentType,
|};
export type AppComparisonFields$key = {
  +$data?: AppComparisonFields$data,
  +$fragmentSpreads: AppComparisonFields$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppComparisonFields",
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "BlockConnection",
  "abstractKey": null
};

(node/*: any*/).hash = "42cb8d54e8957b8378edcf3c060c3954";

module.exports = ((node/*: any*/)/*: Fragment<
  AppComparisonFields$fragmentType,
  AppComparisonFields$data,
>*/);
