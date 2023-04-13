// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15; // this tells to use compiler 0.8.15 or more to compile this code.

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; //imported library

//default visibility specifier is internal if we dont specify for variables   ,,but for function we have to specify the specifier otherwise error comes.

contract CryptoBeetles is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {} //Calling ERC721 constructor by Passing values,ERC721.sol is the parent of the parent of this file, but we can call ERC721 constructor from here like this

    function mint(string memory tokenURI) public returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}
