pragma solidity ^0.4.23;

contract LegRoll {

    address Owner;
    uint randNum;

    event Failed(address beneficiary, uint amount);
    event Successed(address beneficiary, uint amount);

    modifier onlyOwner {
        require(msg.sender == Owner, "You can't access");
        _;
    }
    function LegRoll(){
        Owner=msg.sender;
    }

    function deposit() public payable onlyOwner {
        require(msg.value != 0, "Deposit more than 0 ether!!");
    }

    modifier spare {
        require(address(this).balance >= msg.value * 5, " Not Enough Fund");
        _;
    }

    function game1(uint inputNum) public payable {
        randNum = uint(keccak256(abi.encodePacked(now, msg.sender, msg.value))) % 100;
        if (inputNum >= randNum) {
            msg.sender.transfer(msg.value * (985/inputNum*10));
        }
    }

/*     function game2() public payable {
        if (uint(keccak256(abi.encodePacked(now, msg.sender, msg.value))) % 5 == 1) {
            msg.sender.transfer(msg.value * 5);
        }
    }*/




    function checkBalance() public view returns(uint) {
        return address(this).balance;
    }

    function withdraw() public onlyOwner {
        msg.sender.transfer(address(this).balance);
  }
}
