'use client';
import React from 'react';
import { useQuery } from 'react-query';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
interface TodosRes {
  todos: Todo[];
}

const Dashboard = () => {
  const { isLoading, error, data } = useQuery(
    'todos',
    (): Promise<TodosRes> =>
      fetch('https://dummyjson.com/todos').then((res) => res.json())
  );

  console.log(data);

  if (isLoading) {
    return (
      <div>
        <p className="animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }

  return (
    <div>
      {data === undefined ? (
        <p>No todos</p>
      ) : (
        data.todos.map((data) => <li key={data.id}>{data.todo}</li>)
      )}
    </div>
  );
};

export default Dashboard;
