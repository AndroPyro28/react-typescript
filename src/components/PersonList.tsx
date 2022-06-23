import React from "react";
import NameInterface from "../Interfaces/NameInterface";


interface PersonListProps {
  nameList: NameInterface[];
}

function PersonList(props: PersonListProps) {
  const { nameList } = props;

  return (
    <div>
      {nameList.length > 0 &&
        nameList.map((name: NameInterface, index: number) => (
          <p key={index}>
            {index + 1}). {name.firstname} {name.lastname}
          </p>
        ))}
    </div>
  );
}

export default PersonList;
