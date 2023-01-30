import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {SkillData} from '../../screens/Home';

import {styles} from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  skill: SkillData;
}

export const SkillCard = ({skill, ...rest}: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.8} {...rest}>
      <Text style={styles.textSkill}>{skill.name}</Text>
    </TouchableOpacity>
  );
};
