pragma solidity ^0.4.23;

contract PK{

    address owner;
    uint index;
    uint nonce;

    struct player{
        address pAddress;
        uint betPrice;

    }
    player[] players;
    function PK(){
        owner=msg.sender;
        players.push(player(msg.sender,0));
        index=0;

    }
    function balance1() view returns (uint){
        return this.balance;

    }

    function betting() balanceCheck payable returns (uint,uint) {
        nonce++;
        if (randomPK(nonce)==1){
            msg.sender.transfer(msg.value*2);
        }

    }

    function randomPK(uint nonce) view returns (uint) {
        if(uint(keccak256(abi.encodePacked(msg.sender,now,nonce))) % 99 <=50){
            return 1;
        }
        else{
            return 0;
        }
    }

    function() payable{

    }

    function withdraw() onlyOwner{
        msg.sender.transfer(this.balance);

    }

    modifier balanceCheck{
        require(this.balance >= msg.value *2 );
        _;
    }
    modifier onlyOwner{
        require(owner==msg.sender);
        _;
    }

}
