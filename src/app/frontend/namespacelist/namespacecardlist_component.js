// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @final
 */
export class NamespaceCardListController {
  /**
   * @ngInject
   */
  constructor() {
    /** @export */
    this.i18n = i18n;
  }
}

/**
 * @return {!angular.Component}
 */
export const namespaceCardListComponent = {
  transclude: true,
  bindings: {
    'namespaceList': '<',
    'namespaceListResource': '<',
  },
  templateUrl: 'namespacelist/namespacecardlist.html',
  controller: NamespaceCardListController,
};

const i18n = {
  /** @export {string} @desc Label 'Name' which appears as a column label in the table of
      namespaces (namespace list view). */
  MSG_NAMESPACE_LIST_NAME_LABEL: goog.getMsg('Name'),
  /** @export {string} @desc Label 'Labels' which appears as a column label in the table of
   namespaces (namespace list view). */
  MSG_NAMESPACE_LIST_LABELS_LABEL: goog.getMsg('Labels'),
  /** @export {string} @desc Label 'Age' which appears as a column label in the table of
      namespaces (namespace list view). */
  MSG_NAMESPACE_LIST_AGE_LABEL: goog.getMsg('Age'),
  /** @export {string} @desc Label 'Status' which appears as a column label in the table of
      namespaces (namespace list view). */
  MSG_NAMESPACE_LIST_STATUS_LABEL: goog.getMsg('Status'),
};