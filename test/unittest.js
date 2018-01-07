'use strict';

const UUIDTool = require( '../UUIDTool' );
const expect = require( 'chai' ).expect;

describe( 'UUIDTool', function() {
    it ( 'should generate UUIDv4', function() {
        expect( UUIDTool.genBin()[6] & 0xF0 ).to.equal( 0x40 );
    } );

    it ( 'should generate Base64 without padding', function() {
        expect( UUIDTool.genB64().length ).to.equal( 22 );
    } );

    it ( 'should generate unique', function() {
        expect( UUIDTool.genB64() ).not.to.equal( UUIDTool.genB64() );
    } );
} );
