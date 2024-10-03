import { Card, Image, Box, SimpleGrid, Text, Badge, Group, Title, Stack, Loader, Flex } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { useGetProductsQuery } from '../../Redux/Slice/productsApiSlice';

export const WithRTKQuery = () => {

    const { data, error, isLoading } = useGetProductsQuery();

    if (error) {
        notifications.show({
            autoClose: 3000,
            color: 'red',
            title: 'Error Fetching data',
            message: error.error || 'An unknown error occurred'
        });
    }

    return (
        <>
            <Box mih={'100dvh'} bg={'#F8F9FA'} p={'xl'}>
                <Title ta={'center'} my={'xl'}>
                    Example of fetching data from FakeStoreApi using RTK Query
                </Title>

                {isLoading && (
                    <Flex justify={'center'}>
                        <Loader color='blue' type='dots' />
                    </Flex>
                )}

                {data && (
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 0, sm: '0' }} verticalSpacing={{ base: '0', sm: '0' }}>
                        {data.map((item) => (
                            <Card key={item.id} padding='lg' withBorder>
                                <Card.Section p={20}>
                                    <Image src={item.image} fit='contain' height={160} alt={item.title} />
                                </Card.Section>

                                <Stack p={10} gap={15}>
                                    <Group align='end' justify='space-between'>
                                        <Badge radius={'0'} variant='default'>
                                            {item.category}
                                        </Badge>
                                        <Title order={3}>${item.price}</Title>
                                    </Group>

                                    <Text lineClamp={1} fw={500}>
                                        {item.title}
                                    </Text>

                                    <Text lineClamp={2} size='sm' c='dimmed'>
                                        {item.description}
                                    </Text>
                                </Stack>
                            </Card>
                        ))}
                    </SimpleGrid>
                )}
            </Box>
        </>
    );
};
