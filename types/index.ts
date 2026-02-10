// In types/index.ts
export interface Tech {
  img: string;
  tech_name: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  altImg: string;        
  techs: Tech[];         // Changed from string[] to Tech[]
  linkGH: string;
  linkDeploy: string;  
}