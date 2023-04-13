// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title CryptoBeetles
 * @dev Implementation of the ERC721 standard for non-fungible tokens with URI storage.
 */
contract CryptoBeetles is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    /**
     * @dev Constructor that initializes the name and symbol of the NFT.
     * @param _name Name of the NFT.
     * @param _symbol Symbol of the NFT.
     */
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    /**
     * @dev Function to mint a new NFT with a given token URI.
     * @param tokenURI URI of the token.
     * @return newItemId ID of the newly created NFT.
     */
    function mint(string memory tokenURI) public returns (uint256 newItemId) {
        newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
    }
}
