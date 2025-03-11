export interface Choice {
  text: string;
  nextScene: string;
}

export interface Scene {
  id: string;
  text: string;
  choices: Choice[];
  background?: string;
  character?: string;
}

export interface Story {
  scenes: { [key: string]: Scene };
  startScene: string;
} 