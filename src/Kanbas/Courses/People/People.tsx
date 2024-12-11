import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findUsersForCourse } from "../client";
import PeopleTable from "./Table";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const enrolledUsers = await findUsersForCourse(cid as string);
    setUsers(enrolledUsers);
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div>
      <h1>Enrolled Users</h1>
      <PeopleTable users={users} />
    </div>
  );
}
