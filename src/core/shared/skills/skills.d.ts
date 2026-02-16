interface Skill {
  id: number;
  name: string;
  per: string;
}

export interface SkillsComponentProps {
  data: Skill[];
}
