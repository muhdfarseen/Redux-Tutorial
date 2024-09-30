import { Button, Flex, Title, Text, Input } from '@mantine/core';
import { useReducer, useState } from 'react';
import { todoReducer } from '../../reducers/todoReducer';

const INITIALSTATE = {

}

export const HomePage = () => {
    
    const [todoState, dispatch] = useReducer(todoReducer, []);

    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Date.now(),
                todo: newTask
            }
        });
        setNewTask('');
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

                <Flex w={'40%'} align={'center'} gap={20} justify={'space-between'} direction={'column'}>
                    {todoState.length > 0 ?
                        todoState.map((item) => (
                            <Flex key={item.id} w={'100%'} justify={'space-between'}>
                                <Text size='lg'>{item.todo}</Text>
                                <Button onClick={() => dispatch({ type: 'DELETE_TODO', payload: item.id })} color='red'>
                                    Delete This Task
                                </Button>
                            </Flex>
                        ))
                    :   <Text>No tasks yet!</Text>}
                </Flex>
            </Flex>
        </>
    );
};
