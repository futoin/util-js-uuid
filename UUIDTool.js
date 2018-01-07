'use strict';

/**
 * @file
 *
 * Copyright 2017 FutoIn Project (https://futoin.org)
 * Copyright 2017 Andrey Galkin <andrey@futoin.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const uuidv4 = require( 'uuid/v4' );

/**
 * Common tool for UUID generation and use in transactions
 */
class UUIDTool {
    /**
     * Generate UUID v4
     *
     * @returns {Buffer} buffer of 16 items
     */
    static genBin() {
        const bin_uuid = Buffer.alloc( 16 );
        return uuidv4( null, bin_uuid, 0 );
    }

    /**
     * Generate UUID v4 encoded in Base64 without padding
     *
     * @returns {string} 22 characters
     */
    static genB64() {
        return this.genBin().toString( 'base64' ).substr( 0, 22 );
    }
}

module.exports = UUIDTool;
