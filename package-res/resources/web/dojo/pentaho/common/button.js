/*!
* Copyright 2010 - 2013 Pentaho Corporation.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

dojo.provide('pentaho.common.button');

// TODO support disabled mode and rollover effects

dojo.declare(
    'pentaho.common.button',
    [dijit._Widget, dijit._Templated],
    {
        label : 'a button',
          
        onClick: function() {
            this.callback();
        },
        
        callback: null,

        templatePath: dojo.moduleUrl('pentahocommon', 'button.html'),
        
        postMixInProperties: function() {
            this.inherited(arguments);
        },
        
        postCreate: function() {
            this.inherited(arguments);
            dojo.connect(this.button, "onclick", this, this.onClick);
        }
      }
);
