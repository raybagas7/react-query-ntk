'use client';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const Dashboard = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: (): Promise<TodosRes> =>
      fetch('https://dummyjson.com/todos').then((res) => res.json()),
  });

  const newPostTodoMutation = useMutation({
    mutationFn: (): Promise<Todo> =>
      fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: 'Use DummyJSON in the project',
          completed: false,
          userId: 5,
        }),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

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
      <button
        disabled={newPostTodoMutation.isLoading}
        onClick={() => newPostTodoMutation.mutate()}
      >
        Add todo
      </button>
    </div>
  );
};

export default Dashboard;
