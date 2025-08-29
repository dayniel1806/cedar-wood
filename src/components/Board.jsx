import React from "react";
import "./Board.css";

// Sample data – replace with your real board members
import member1 from "../assets/board2.jpg";
import member2 from "../assets/board1.jpg";
import member3 from "../assets/board3.jpg";
import member4 from "../assets/board4.jpg";

const boardMembers = [
  {
    id: 1,
    name: "Mr. Moses. T Oyerinde",
    role: "Director",
    image: member1,
  },
  {
    id: 2,
    name: "Mrs. Peace. O Oyerinde",
    role: "Director of Studies",
    image: member2,
  },
  {
    id: 3,
    name: "Mr. Taiwo Oshineye",
    role: "Principal",
    image: member3,
  },
  {
    id: 4,
    name: "Mrs. Kehinde .C",
    role: "Head Teacher",
    image: member4,
  },
];

const Board = () => {
  return (
    <section className="board">
      <h4 className="board-subtitle">OUR TEAM</h4>
      <h2 className="board-title">Meet Our Board</h2>

      <div className="board-grid">
        {boardMembers.map((member) => (
          <div key={member.id} className="board-card">
            <img src={member.image} alt={member.name} className="board-img" />
            <h3 className="board-name">{member.name}</h3>
            <p className="board-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Board;
