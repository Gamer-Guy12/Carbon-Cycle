import { Accordion } from '@mantine/core';
import Head from 'next/head'

export default function Test() {

    return (
        <>
            <Head>
                <title>Slow Carbon Cycle Test</title>
            </Head>
            <Accordion>
                <Accordion.Item value="How long is the slow carbon cycle?">
                    <Accordion.Control>How long is the slow carbon cycle?</Accordion.Control>
                    <Accordion.Panel>The slow carbon cycle takes 100 million to 200 million years.</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="What is formed when carbon combines with water?">
                    <Accordion.Control>What is formed when carbon combines with water?</Accordion.Control>
                    <Accordion.Panel>When carbon combines with water carbonic acid is formed.</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="What controls the rate at which the ocean takes in CO2">
                    <Accordion.Control>What controls the rate at which the ocean takes in CO2</Accordion.Control>
                    <Accordion.Panel>Winds, currents, and temprature all control the speed at which the ocean takes in CO2</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </>
    );

}