// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Drop.sol";
import "@thirdweb-dev/contracts/extension/Permissions.sol";

contract Contract is ERC721Drop, Permissions {

    mapping (uint=>string) public notes;

    constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps,
        address _primarySaleRecipient
    )
        ERC721Drop(
            _defaultAdmin,
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps,
            _primarySaleRecipient
        )
    {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function writeNote(uint _tokenId, string memory _msg) public {
        require(msg.sender==ownerOf(_tokenId), "You aren't the Owner of this token!");
        notes[_tokenId]=_msg;
    }
    
    function overrideNote(uint _tokenId, string memory _msg) public onlyRole(DEFAULT_ADMIN_ROLE) {
        notes[_tokenId]=_msg;
    }
}
