import React from 'react';
import { Button, Input, VStack, HStack } from '@chakra-ui/react';
import { FaUserPlus } from 'react-icons/fa';

const PlayerNameInput = ({ playerNames, setPlayerNames, startGame, currentHole, scores }) => {
  const addPlayer = () => {
    setPlayerNames([...playerNames, '']);
  };

  const setPlayerName = (name, index) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

  return (
    <VStack spacing={4}>
      {playerNames.map((name, index) => (
        <HStack key={index} backgroundColor={index === currentHole - 1 ? "yellow.100" : "transparent"}>
          <Input
            placeholder={`Player ${index + 1} Name`}
            value={name}
            onChange={(e) => setPlayerName(e.target.value, index)}
          />
            {index < currentHole - 1 && (
              <Text color="gray.500" ml={2}>
                Hole {scores[index].hole}: {scores[index].score}
              </Text>
            )}
        </HStack>
      ))}
      <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={addPlayer} isDisabled={playerNames.length >= 5}>
        Add Player
      </Button>
      <Button colorScheme="green" onClick={startGame} isDisabled={playerNames.some(name => name.trim() === '')}>
        Start Game
      </Button>
    </VStack>
  );
};

export default PlayerNameInput;