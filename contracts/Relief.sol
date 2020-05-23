pragma solidity ^0.6.0;

import 'https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol';
import './project.sol';

contract ReliefFunding {
    using SafeMath for uint256;

    Project[] private projects;
    event ProjectStarted(
        address contractAddress,
        address projectStarter,
        string projectTitle,
        string projectDesc,
        uint256 deadline,
        uint256 goalAmount
    );

    function startProject(
        string calldata title,
        string calldata description,
        uint durationInDays,
        uint amountToRaise
    ) external {
        uint raiseUntil = now.add(durationInDays.mul(1 days));
        Project newProject = new Project(msg.sender, title, description, raiseUntil, amountToRaise);
        projects.push(newProject);
        emit ProjectStarted(
            address(newProject),
            msg.sender,
            title,
            description,
            raiseUntil,
            amountToRaise
        );
    }                                                                                                                                   

    function returnAllProjects() external view returns(Project[] memory){
        return projects;
    }
}


