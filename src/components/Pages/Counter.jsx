import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../Redux/Slice/CounterSlice';
import { Button, Flex, Title, Text } from '@mantine/core';

export const Counter = () => {
    
    const count = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    return (
        <Flex p={100} h={'100vh'} align={'center'} direction={'column'}>
            <Title mb={50}>Counter</Title>
            <Text size='xl'>{count}</Text>
            <Flex mt={25} gap={10}>
                <Button color='blue' onClick={() => dispatch(increment())}>
                    Increment
                </Button>
                <Button color='red' onClick={() => dispatch(decrement())}>
                    Decrement
                </Button>
                <Button color='gray' onClick={() => dispatch(reset())}>
                    Reset
                </Button>
            </Flex>
        </Flex>
    );
};
