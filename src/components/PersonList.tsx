import React from "react";

interface NameInterface {
  firstname: string;
  lastname: string;
}

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
