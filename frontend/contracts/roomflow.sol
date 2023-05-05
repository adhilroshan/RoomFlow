// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract RentalAgreement {
    address payable public owner;
    address payable public renter;
    uint public rentalPeriod;
    uint public rentalRate;
    uint public securityDeposit;
    uint public startTime;
    uint public endTime;
    bool public isRentalActive;
    
    struct RentalSpace {

        address addr;
        string geoloc;
        string spaceType;
        uint size;
        uint price;
        string amenities;
    }
    
    RentalSpace public space;
    
    event RentalStarted(address host, address renter, uint startTime);
    event RentalEnded(address host, address renter, uint endTime);
    
    constructor(address _addr, string memory _geoloc, string memory _spaceType, uint _size, uint _price, string memory _amenities, uint _rentalPeriod, uint _rentalRate, uint _securityDeposit) {
        owner = payable(msg.sender);
        space =  RentalSpace(_addr, _geoloc, _spaceType, _size, _price, _amenities);
        rentalPeriod = _rentalPeriod;
        rentalRate = _rentalRate;
        securityDeposit = _securityDeposit;
        isRentalActive = false;
    }
    
    function startRental() public payable {
        require(msg.sender == renter, "Only the renter can start the rental");
        require(msg.value == rentalRate + securityDeposit, "Insufficient payment amount");
        require(isRentalActive == false, "Rental is already active");
        isRentalActive = true;
        startTime = block.timestamp;
        emit RentalStarted(owner, renter, startTime);
    }
    
    function endRental() public {
        require(msg.sender == renter || msg.sender == owner, "Only the renter or owner can end the rental");
        require(isRentalActive == true, "Rental is not active");
        endTime = block.timestamp;
        isRentalActive = false;
        if (msg.sender == renter) {
            payable(owner).transfer(securityDeposit + address(this).balance);
        } else if (msg.sender == owner) {
            renter.transfer(securityDeposit);
        }
        emit RentalEnded(owner, renter, endTime);
    }
    
    function updateRenterAddress(address payable _renter) public {
        require(msg.sender == owner, "Only the owner can update the renter address");
        renter = _renter;
    }
    
    function updateRentalRate(uint _rentalRate) public {
        require(msg.sender == owner, "Only the owner can update the rental rate");
        rentalRate = _rentalRate;
    }
    
    function updateSecurityDeposit(uint _securityDeposit) public {
        require(msg.sender == owner, "Only the owner can update the security deposit");
        securityDeposit = _securityDeposit;
    }
    
    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
}
