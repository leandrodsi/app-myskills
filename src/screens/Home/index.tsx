import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';

import {styles} from './styles';

export interface SkillData {
  id: string;
  name: string;
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    if (!newSkill) {
      return;
    }

    const data = {
      id: new Date().getTime().toString(),
      name: newSkill,
    };

    setMySkills(prev => [data, ...prev]);
    setNewSkill('');
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills(prev => prev.filter(skill => skill.id !== id));
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return setGreeting('Good morning');
    }

    if (currentHour < 18) {
      return setGreeting('Good afternoon');
    }

    return setGreeting('Good evening');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Leandro</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} label="Add" />

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard skill={item} onPress={() => handleRemoveSkill(item.id)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptySkill}>Nenhuma skill cadastrada</Text>
        )}
      />
    </View>
  );
};
