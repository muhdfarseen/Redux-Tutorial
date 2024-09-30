import { Button, Flex, Title, Text, Input } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { addtodo, deletetodo } from '../../Redux/Slice/TodoSlice';
import { useState } from 'react';

export const WithReduxToolKit = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');
    const handleAddTask = () => {
        if (newTask) {
            dispatch(addtodo(newTask));
            setNewTask('');
        }
    };
    const handleDeleteTask = (id) => {
        dispatch(deletetodo(id));
    };

    return (
        <>
            <Flex p={100} h={'100vh'} align={'center'} direction={'column'}>
                <Title>TO DO LIST</Title>

                <Flex gap={20} my={25} w={'40%'}>
                    <Input flex={1} value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Enter a new task' />
                    <Button color='green' onClick={handleAddTask}>
                        + Add New Task
                    </Button>
                </Flex>

                {todos.map((todo) => (
                    <Flex key={todo.id} w={'40%'} align={'center'} gap={20} justify={'space-between'} mb={15}>
                        <Text size='lg'>{todo.todo}</Text>
                        <Button color='red' onClick={() => handleDeleteTask(todo.id)}>
                            Delete This Task
                        </Button>
                    </Flex>
                ))}
            </Flex>
        </>
    );
};
